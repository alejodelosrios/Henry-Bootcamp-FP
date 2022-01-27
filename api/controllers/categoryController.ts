import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {

  create: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if(!name) return res.send("Debes colocar un name")
      const category = await prisma.category.create({
        data: {
          name,
        },
      });
      res.json(category);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const getAllCateg = await prisma.category.findMany();
      getAllCateg.length
        ? res.status(200).json(getAllCateg)
        : res.status(404).send("No categories found");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;
      if(!categoryId) return res.send("Debes incluir el categoryId por params")
      const categoryUpdate = await prisma.category.update({
        where: {
          id: Number(categoryId),
        },
        data: {
          name,
        },
      });
      res.json(categoryUpdate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      if(!categoryId) return res.send("Debes incluir el categoryId por params")
      const categoryDelete = await prisma.category.delete({
        where: {
          id: Number(categoryId),
        },
      })
      res.send(categoryDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
}
