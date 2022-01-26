import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const notificationData = req.body;
      if (!notificationData.message) return res.send("Falta campo 'mensaje ");
      if (!notificationData.typeId) return res.send("Falta campo 'typeId'");
      if (!notificationData.applicantId)
        return res.send("Falta campo 'applicantId'");
      if (!notificationData.companyId)
        return res.send("Falta campo 'companyId'");

      const notification = await prisma.notification.create({
        data: {
          message: notificationData.message,
          typeId: notificationData.typeId,
          applicantId: notificationData.applicantId,
          companyId: notificationData.companyId,
        },
      });
      res.json(notification);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const notification = await prisma.notification.findMany();
      res.json(notification);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  notificationByNotificationId: async (req: Request, res: Response) => {
    try {
      const { notificationId } = req.params;
      const notification = await prisma.notification.findMany({
        where: {
          id: Number(notificationId),
        },
      });
      res.json(notification);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { notificationId } = req.params;
      const { message, typeId, applicantId, companyId } = req.body;

      if (!notificationId)
        return res.send("Debes enviar el id de la notificación por params");
      if (!message) return res.send("Debes enviar el campo 'message' por body");
      if (!typeId) return res.send("Debes enviar el campo 'typeId' por body");

      if (!applicantId)
        return res.send("Debes enviar el campo 'applicantId' por body ");

      if (!companyId)
        return res.send("Debes enviar el campo 'companyId' por body ");
      const notificationUpdated = await prisma.notification.updateMany({
        where: {
          id: Number(notificationId),
        },
        data: {
          message,
          typeId,
          applicantId,
          companyId,
        },
      });
      res.json(notificationUpdated);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { notificationId } = req.params;

      const notificationDelete = await prisma.notification.delete({
        where: {
          id: Number(notificationId),
        },
      });
      res.json(notificationDelete);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
