import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const {
        userId,
        firstName,
        lastName,
        about,
        phoneNumber,
        country,
        image
      } = req.body;

      if(!userId) return res.send("Debes incluir un campo 'userId' con el id del usuario al cual esta asociado este applicant")
      if(!firstName) return res.send("Debes incluir un campo 'firstName', puede contener una string vacía")
      if(!lastName) return res.send("Debes incluir un campo 'lastName', puede contener una string vacía")
      if(!about) return res.send("Debes incluir un campo 'about', puede contener una string vacía")
      if(!phoneNumber) return res.send("Debes incluir un campo 'phoneNumber', puede contener una string vacía")
      if(!country) return res.send("Debes incluir un campo 'country', puede contener una string vacía")
      if(!image) return res.send("Debes incluir un campo 'image', puede contener una string vacía")

      const newApplicant = await prisma.applicant.create({
        data: {
          userId: userId as number,
          firstName: firstName as string,
          lastName: lastName as string,
          about: about as string,
          phoneNumber: phoneNumber as string,
          country: country as string,
          image: image as string,
          showImage: true as boolean
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
  applicantById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if(!id) return res.send("Debes enviar el id del applicant por params")
      const userProfile = await prisma.applicant.findFirst({
        where: {
          id: Number(id),
        },
      });
      res.json(userProfile);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, phoneNumber, country, about } =
        req.body;
      const updatedApplicant = await prisma.applicant.update({
        where: {
          id: Number(id),
        },
        data: {
          firstName,
          lastName,
          phoneNumber,
          country,
          about,
        },
      });

      const updatedUser = await prisma.user.update({
        where: {
          id: updatedApplicant.userId,
        },
        data: {
          email,
        },
      });
      res.send(updatedApplicant);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const applicantDelete = await prisma.applicant.deleteMany({
        where: {
          id: Number(id),
        },
      });
      res.send(applicantDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
