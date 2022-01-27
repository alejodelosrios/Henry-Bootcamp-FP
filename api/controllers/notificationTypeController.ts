import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if (!name) return res.send("Falta campo 'name' en el body");
      const notificationType = await prisma.notificationTypes.create({
        data: {
          name: name as string,
        },
      });
      res.json(notificationType);
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const notificationType = await prisma.notificationTypes.findMany();
      res.json(notificationType);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { typeId } = req.params;
      const { name } = req.body;

      if (!typeId) return res.send("Debes enviar el typeId de la notificación por params");
      if (!name) return res.send("Falta el campo 'name' en el body");

      const notificationTypeUpdated = await prisma.notificationTypes.updateMany(
        {
          where: {
            id: Number(typeId),
          },
          data: {
            name: name as string,
          },
        }
      );
      res.json(notificationTypeUpdated);
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { typeId } = req.params;
      if(!typeId) return res.send("Debes enviar el typeId por params")
      const notificationTypeDelete = await prisma.notificationTypes.delete({
        where: {
          id: Number(typeId),
        },
      });
      res.json(notificationTypeDelete);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
