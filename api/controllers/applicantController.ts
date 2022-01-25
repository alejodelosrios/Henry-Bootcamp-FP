import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const newApplicant = await prisma.applicant.create({
        data: {
          userId: userData.userId,
          firstName: userData.firstName,
          lastName: userData.lastName,
          about: userData.about,
          phoneNumber: userData.phoneNumber,
          country: userData.country,
          image: userData.image,
          showImage: true
        },
      });
      res.send(newApplicant);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const users = await prisma.applicant.findMany({
        include: {
          favourites: true
        }
      });
      const favourites = users[0].favourites
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  //   userByEmail: async (req: Request, res: Response) => {
  //     try {
  //       const { email } = req.params;
  //       const userProfile = await prisma.applicant.findFirst({
  //         where: {
  //           email: email,
  //         },
  //       });
  //       res.json(userProfile);
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },

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
