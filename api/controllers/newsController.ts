import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { image, title, description } = req.body;
      if (!image) return res.send("Debes incluir la image por body");
      if (!title) return res.send("Debes incluir el title por body");
      if (!description) return res.send("Debes incluir la description por body");

      const newNews = await prisma.news.create({
        data: {
          image: image as string,
          title: title as string,
          description: description as string,
        },
      });
      res.json(newNews);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  subscribe: async (req: Request, res: Response) => {
    try {
      const {email} = req.params
      if(!email) return res.send("Debes enviar el email del user por params")
      const checkIfUserAlreadySubscribed = await prisma.subscribedUser.findMany({
        where: {
          email: email
        }
      })
      if(checkIfUserAlreadySubscribed && checkIfUserAlreadySubscribed.length) return res.send("Ya estas suscrito a la newsletter")
      const subscribeUserToNewsletter = await prisma.subscribedUser.create({
        data: {
          email: email
        }
      })
      res.send("Te has suscrito a la newsletter con exito")
    } catch (error) {
      res.status(400).send(error);
    }
  },

  unsubscribe: async (req: Request, res: Response) => {
    try {
      const {email} = req.params
      if(!email) return res.send("Debes enviar el email del user por params")
      const checkIfUserIsSubscribed = await prisma.subscribedUser.findMany({
        where: {
          email: email
        }
      })
      if(checkIfUserIsSubscribed && checkIfUserIsSubscribed.length) {
        const unsubscribeUserFromNewsletter = await prisma.subscribedUser.delete({
          where: {
            email: email
          }
        })
        res.send("Ya no estas suscrito a la newsletter")
      } else {
        return res.send("No te encuentras suscrito a la newsletter")
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const getAllNews = await prisma.news.findMany();
      res.json(getAllNews)
    } catch (error) {
      res.status(400).send(error);
    }
  },

  newsByNewsId: async (req: Request, res: Response) => {
    try {
      const { newsId } = req.params;
      if (!newsId) return res.send("Debes enviar el newsId por params");
      const getAllNews = await prisma.news.findMany({
        where: {
          id: Number(newsId),
        },
      });
      getAllNews.length
        ? res.status(200).json(getAllNews)
        : res.status(404).send("No news found");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  
  update: async (req: Request, res: Response) => {
    try {
      const { newsId } = req.params;
      const { 
        image, 
        title, 
        description 
      } = req.body;
      if (!newsId) return res.send("Debes incluir el newsId por params");
      if (!image) return res.send("Debes incluir la image por body");
      if (!title) return res.send("Debes incluir el title por body");
      if (!description) return res.send("Debes incluir la description por body");

      const updatedLanguage = await prisma.news.update({
        where: {
          id: Number(newsId),
        },
        data: {
          image: image as string,
          title: title as string,
          description: description as string,
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
      console.log(error)
      res.status(400).send(error);
    }
  },
};
