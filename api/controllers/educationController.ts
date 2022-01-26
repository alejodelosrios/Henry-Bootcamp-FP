import { prisma } from "../prisma/database";
import { Request, Response } from "express";
import { endianness } from "os";
import { ifError } from "assert";

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
          degree: degree,
          institution: institution,
          startDate: startDate,
          endDate: endDate,
          description: description,
          applicantId: Number(applicantId),
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
      res.status(400).send(error);
    }
  },

  //por email
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
