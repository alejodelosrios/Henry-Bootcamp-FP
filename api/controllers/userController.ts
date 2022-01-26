import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      if (!userData.email) return res.send("Falta campo 'email'");
      if (!userData.password) return res.send("Falta campo 'contraseña'");
      if (!userData.role) return res.send("Falta campo 'rol'");
      const user = await prisma.user.create({
        data: {
          email: userData.email as string,
          password: userData.password as string,
          role: userData.role as string,
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
  userByEmail: async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      if (!email) return res.send("Debes enviar el email del usuario por params");
      const user = await prisma.user.findMany({
        where: {
          email: email,
        },
        include: {
          applicant: true,
          company: true
        }
      });
      res.json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const {
        email,
        newEmail = email,
        password,
        newPassword = password,
      } = req.body;

      if (!userId) return res.send("Debes enviar el id del usuario por params");
      if (!email)
        return res.send(
          "Debes enviar el campo 'email' por body e incluir otro campo 'newEmail' si quieres actualizarlo"
        );
      if (!password)
        return res.send(
          "Debes enviar el campo 'password' por body e incluir otro campo 'newPassword' si quieres actualizarla"
        );
      const userUpdated = await prisma.user.updateMany({
        where: {
          id: Number(userId),
        },
        data: {
          email: newEmail,
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
      const { userId } = req.params;
      if (!userId) return res.send("Debes enviar el id del usuario por params");

      const userDelete = await prisma.user.delete({
        where: {
          id: Number(userId),
        },
      });
      res.json(userDelete);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
