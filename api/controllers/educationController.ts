import { prisma } from "../prisma/database";
import { Request, Response } from "express";
import { endianness } from "os";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const education = await prisma.education.create({
        data: {
          degree: data.degree,
          institution: data.institution,
          startDate: data.startDate,
          endDate: data.endDate,
          description: data.description,
          applicantId: data.applicantId,
        },
      });
      res.json(education);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  //recibis el email por params y que le agreguen un query nuevo email
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const {
        degree,
        institution,
        startDate,
        endDate,
        description,
        applicantId,
      } = req.body;
      const updatedEducation = await prisma.education.update({
        where: {
          id: Number(id),
        },
        data: {
          degree,
          institution,
          startDate,
          endDate,
          description,
          applicantId,
        },
      });
      res.json(updatedEducation);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  //por email
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const educationDelete = await prisma.education.delete({
        where: {
          id: Number(id),
        },
      });
      res.send(educationDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
