import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { image, title, description } = req.body;
      if (!image) return res.send("Debes incluir la image por body");
      if (!title) return res.send("Debes incluir el title por body");
      if (!description)
        return res.send("Debes incluir la description por body");

      const newNews = await prisma.news.create({
        data: {
          image,
          title,
          description,
        },
      });

      res.json(newNews);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const getAllNews = await prisma.news.findMany();
      getAllNews.length
        ? res.status(200).json(getAllNews)
        : res.status(404).send("No news found");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  newsByNewsId: async (req: Request, res: Response) => {
    try {
      const { newsId } = req.params;
      const getAllNews = await prisma.news.findMany({
        where: {
          id: Number(newsId),
        },
      });
      getAllNews.length
        ? res.status(200).json(getAllNews)
        : res.status(404).send("No news found");
    } catch (error) {
      res.status(400).send(error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { newsId } = req.params;
      const { image, title, description } = req.body;
      if (!newsId) return res.send("Debes incluir el newsId por params");
      if (!image) return res.send("Debes incluir la image por body");
      if (!title) return res.send("Debes incluir el title por body");
      if (!description)
        return res.send("Debes incluir la description por body");

      const updatedLanguage = await prisma.news.update({
        where: {
          id: Number(newsId),
        },
        data: {
          image,
          title,
          description,
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
      const { newsId } = req.params;
      if (!newsId) return res.send("Debes incluir el newsId por params");
      const newsDelete = await prisma.news.delete({
        where: {
          id: Number(newsId),
        },
      });
      res.send(newsDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
