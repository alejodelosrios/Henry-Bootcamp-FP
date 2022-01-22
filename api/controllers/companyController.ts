import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const company = await prisma.company.create({
        data: {
          name: data.name,
          roleId: data.roleId,
          legalName: data.legalName,
          email: data.email,
          stin: data.stin,
          accountManagers: data.accountManagers,
          image: data.image,
          posts: data.posts,
          companyValues: data.companyValues,
          mission: data.mission,
          vision: data.vision,
          reviews: data.reviews,
        },
      });
      res.json(company);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const companies = await prisma.company.findMany();
      res.send(companies);
    } catch (error) {
      res.send(error);
    }
  },
  companyById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const getCompanyProfile = await prisma.company.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(getCompanyProfile);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  createReview: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { review } = req.body;
      const updatedCompany = await prisma.company.update({
        where: {
          id: Number(id),
        },
        data: {
          reviews: {
            push: review as object,
          },
        },
      });
      res.send(updatedCompany.reviews);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  getPosts: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const company = await prisma.company.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          posts: true,
        },
      });
      if (company) {
        res.json(company.posts);
      } else {
        res.status(400).send("Company doesn't exist");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async (req: Request, res: Response) => {},
  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const deletedPosts = await prisma.post.deleteMany({
        where: {
          companyId: Number(id),
        },
      });
      const deletedCompany = await prisma.company.delete({
        where: {
          id: Number(id),
        },
      });

      res.json(deletedCompany);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
