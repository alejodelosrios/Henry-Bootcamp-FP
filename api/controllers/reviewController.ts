import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {

  create: async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params
      const { description, score } = req.body;
      if(!description) return res.send("Debes incluir un campo 'description' en el body")
      if(!score) return res.send("Debes incluir un campo 'score' en el body")
      if(!companyId) return res.send("Debes incluir un campo 'companyId' por params")

      const review = await prisma.review.create({
        data: {
          description: description,
          score: score,
          companyId: Number(companyId),
        },
      });
      res.json(review);
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  }
}
