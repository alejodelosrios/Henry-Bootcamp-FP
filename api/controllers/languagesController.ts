import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params
      const {
        language,
        level
      } = req.body;
      if(!applicantId) return res.send("Debes incluir el applicantId por params")
      const newLanguage = await prisma.language.create({
        data: {
          language: language as string,
          level: level as string,
          applicantId: Number(applicantId),
        },
      });
      res.json(newLanguage);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { languageId } = req.params;
      const { 
        language, 
        level, 
        applicantId 
      } = req.body;
      if(!languageId) return res.send("Debes incluir el languageId por params")
      const updatedLanguage = await prisma.language.update({
        where: {
          id: Number(languageId),
        },
        data: {
          language: language as string,
          level: level as string,
          applicantId: applicantId as number,
        },
      });
      res.json(updatedLanguage);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { languageId } = req.params;
      if(!languageId) return res.send("Debes incluir el languageId por params")
      const languageDelete = await prisma.language.delete({
        where: {
          id: Number(languageId),
        },
      });
      res.send(languageDelete);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
