import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {

  create: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      const {
        position,
        company,
        startDate,
        endDate,
        description
      } = req.body;
      if(!applicantId) return res.send("Debes incluir el applicantId por params")
      const experience = await prisma.experience.create({
        data: {
          position: position,
          company: company,
          startDate: startDate,
          endDate: endDate,
          description: description,
          applicantId: Number(applicantId),
        },
      });
      res.json(experience);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { experienceId } = req.params;
      const { position, company, startDate, endDate, description } = req.body;
      if(!experienceId) return res.send("Debes incluir el experienceId por params")
      const experienceUpdate = await prisma.experience.update({
        where: {
          id: Number(experienceId),
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
      const { experienceId } = req.params;
      if(!experienceId) return res.send("Debes incluir el experienceId por params")
      const experienceDelete = await prisma.experience.delete({
        where: {
          id: Number(experienceId),
        },
      })
      res.send(experienceDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
}
