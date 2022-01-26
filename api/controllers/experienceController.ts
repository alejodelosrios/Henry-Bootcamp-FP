import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const experience = await prisma.experience.create({
        data: {
          position: data.position,
          company: data.company,
          startDate: data.startDate,
          endDate: data.endDate,
          description: data.description,
          applicantId: Number(id),
        },
      });
      res.json(experience);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { position, company, startDate, endDate, description } = req.body;
      const experienceUpdate = await prisma.experience.update({
        where: {
          id: Number(id),
        },
        data: {
          position,
          company,
          startDate,
          endDate,
          description,
        },
      });
      res.json(experienceUpdate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const experienceDelete = await prisma.experience.delete({
        where: {
          id: Number(id),
        },
      });
      res.send(experienceDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
