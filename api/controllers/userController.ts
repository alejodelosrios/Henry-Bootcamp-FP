import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const user = await prisma.user.create({
        data: {
          email: userData.email as string,
          password: userData.password as string,
          role: userData.role as string
        },
      });
      res.json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
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
      res.status(400).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userDelete = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(userDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
}
