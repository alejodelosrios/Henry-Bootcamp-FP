import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {

  create: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if(!name) return res.send("Debes colocar un name")
      const category = await prisma.category.create({
        data: {
          name: name as string,
        },
      });
      res.json(category);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const getAllCategories = await prisma.category.findMany();
      getAllCategories.length
        ? res.status(200).json(getAllCategories)
        : res.status(404).send("No categories found");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;
      if(!categoryId) return res.send("Debes incluir el categoryId por params")
      const updatedCategory = await prisma.category.update({
        where: {
          id: Number(categoryId),
        },
        data: {
          name: name as string,
        },
      });
      res.json(updatedCategory);
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
      console.log(error);
      res.status(400).send(error);
    }
  },
}
