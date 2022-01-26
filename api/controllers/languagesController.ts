import { prisma } from "../prisma/database";
import { Request, Response } from "express";
import { endianness } from "os";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const data = req.body;

      const language = await prisma.language.create({
        data: {
          language: data.language,
          level: data.level,
          applicantId: Number(id),
        },
      });
      res.json(language);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { language, level, applicantId } = req.body;
      const updatedLanguage = await prisma.language.update({
        where: {
          id: Number(id),
        },
        data: {
          language,
          level,
          applicantId,
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
      const { id } = req.params;
      const languageDelete = await prisma.language.delete({
        where: {
          id: Number(id),
        },
      });
      res.send(languageDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
