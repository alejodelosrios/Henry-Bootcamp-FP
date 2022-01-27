import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params
      const {
        degree,
        institution,
        startDate,
        endDate,
        description
      } = req.body;
      if(!applicantId) return res.send("Debes incluir el applicantId por params")
      const education = await prisma.education.create({
        data: {
          degree: degree as string,
          institution: institution as string,
          startDate: startDate as string,
          endDate: endDate as string,
          description: description as string,
          applicantId: Number(applicantId),
        },
      });
      res.json(education);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { educationId } = req.params;
      const {
        degree,
        institution,
        startDate,
        endDate,
        description,
        applicantId,
      } = req.body;
      if(!educationId) return res.send("Debes incluir el educationId por params")
      const updatedEducation = await prisma.education.update({
        where: {
          id: Number(educationId),
        },
        data: {
          degree: degree as string,
          institution: institution as string,
          startDate: startDate as string,
          endDate: endDate as string,
          description: description as string,
          applicantId: applicantId as number,
        },
      });
      res.json(updatedEducation);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { educationId } = req.params;
      if(!educationId) return res.send("Debes incluir el educationId por params")
      const educationDelete = await prisma.education.delete({
        where: {
          id: Number(educationId),
        },
      });
      res.send(educationDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
