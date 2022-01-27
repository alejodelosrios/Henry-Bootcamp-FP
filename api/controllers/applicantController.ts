import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { firstName, lastName, about, phoneNumber, country, image } =
        req.body;

      if (!userId)
        return res.send(
          "Debes incluir un campo 'userId' con el id del usuario al cual esta asociado este applicant por params"
        );
      if (!firstName)
        return res.send(
          "Debes incluir un campo 'firstName', puede contener una string vacía"
        );
      if (!lastName)
        return res.send(
          "Debes incluir un campo 'lastName', puede contener una string vacía"
        );
      if (!about)
        return res.send(
          "Debes incluir un campo 'about', puede contener una string vacía"
        );
      if (!phoneNumber)
        return res.send(
          "Debes incluir un campo 'phoneNumber', puede contener una string vacía"
        );
      if (!country)
        return res.send(
          "Debes incluir un campo 'country', puede contener una string vacía"
        );
      if (!image)
        return res.send(
          "Debes incluir un campo 'image', puede contener una string vacía"
        );

      const newApplicant = await prisma.applicant.create({
        data: {
          userId: Number(userId),
          firstName: firstName as string,
          lastName: lastName as string,
          about: about as string,
          phoneNumber: phoneNumber as string,
          country: country as string,
          image: image as string,
          showImage: true as boolean,
        },
      });
      res.send(newApplicant);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const applicants = await prisma.applicant.findMany();
      res.json(applicants);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  //   para guardar las postulaciones a las cuales se subscribio un applicant
  // PUT     /applicant/apply
  // recibe objeto con applicantId y postId
  apply: async (req: Request, res: Response) => {
    try {
      const { applicantId, postId } = req.body;

      const applicantUpdate = await prisma.applicant.update({
        where: {
          id: Number(applicantId),
        },
        data: {
          postulations: {
            connect: [{ id: Number(postId) }],
          },
        },
      });
      res.json(applicantUpdate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  applicantById: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      if (!applicantId)
        return res.send("Debes enviar el applicantId por params");
      const userProfile = await prisma.applicant.findFirst({
        where: {
          id: Number(applicantId),
        },
        include: {
          experience: true,
          education: true,
          languages: true,
          skillTags: true,
          notifications: true,
          followed: true,
          postulations: true,
          favourites: true,
        },
      });
      res.json(userProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      const { firstName, lastName, email, phoneNumber, country, about } =
        req.body;
      if (!applicantId)
        return res.send("Debes enviar el id del applicant por params");
      const updatedApplicant = await prisma.applicant.update({
        where: {
          id: Number(applicantId),
        },
        data: {
          firstName: firstName as string,
          lastName: lastName as string,
          phoneNumber: phoneNumber as string,
          country: country as string,
          about: about as string,
        },
      });

      const updatedUser = await prisma.user.update({
        where: {
          id: updatedApplicant.userId,
        },
        data: {
          email: email as string,
        },
      });
      res.send(updatedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      if (!applicantId)
        return res.send("Debes enviar el id del applicant por params");
      const experienceDelete = await prisma.experience.deleteMany({
        where: {
          applicantId: Number(applicantId),
        },
      });

      const educationDelete = await prisma.education.deleteMany({
        where: {
          applicantId: Number(applicantId),
        },
      });

      const languageDelete = await prisma.language.deleteMany({
        where: {
          applicantId: Number(applicantId),
        },
      });
      const applicantDelete = await prisma.applicant.deleteMany({
        where: {
          id: Number(applicantId),
        },
      });

      res.send(applicantDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
