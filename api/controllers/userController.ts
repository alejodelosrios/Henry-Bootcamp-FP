import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const user = await prisma.user.create({
        data: {
          id: 1,
          email: data.email,
          password: data.password,
          role: data.role,
          applicant: data.applicant,
          company: data.company,
          // firstName: data.firstName,
          // lastName: data.lastName,
          // about: data.about,
          // phoneNumber: data.phoneNumber,
          // email: data.email,
          // country: data.country,
          // image: data.image,
          // showImage: data.showImage,
          // skillTags: data.skillTags,
          // experience: data.experience,
          // education: data.education,
          // languages: data.languages,
          // postulations: data.postulations,
          // followed: data.followed
        },
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  //recibis el email por params y que le agreguen un query nuevo email
  update: async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      const { password, newPassword } = req.body;
      const userUpdated = await prisma.user.updateMany({
        where: {
          email,
        },
        data: {
          password: newPassword,
        },
      });
      res.json(userUpdated);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  //por email
  delete: async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      const userDelete = await prisma.user.deleteMany({
        where: {
          email,
        },
      });
      res.send(userDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
function data(
  where: any,
  arg1: { email: string },
  data: any,
  arg3: { password: any; role: any }
) {
  throw new Error("Function not implemented.");
}
