import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {

  create: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if(!name) return res.send("Debes colocar un name")
      const tag = await prisma.tag.create({
        data: {
          name,
        },
      });
      res.json(tag);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const getAllTags = await prisma.tag.findMany();
      getAllTags.length
        ? res.status(200).json(getAllTags)
        : res.status(404).send("No tags found");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { tagId } = req.params;
      const { name } = req.body;
      if(!tagId) return res.send("Debes incluir el tagId por params")
      const tagUpdate = await prisma.tag.update({
        where: {
          id: Number(tagId),
        },
        data: {
          name,
        },
      });
      res.json(tagUpdate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { tagId } = req.params;
      if(!tagId) return res.send("Debes incluir el tagId por params")
      const tagDelete = await prisma.tag.delete({
        where: {
          id: Number(tagId),
        },
      })
      res.send(tagDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
}
