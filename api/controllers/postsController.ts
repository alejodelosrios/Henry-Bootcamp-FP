import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  create: async (req: Request, res: Response) => {
    console.log(req.params);
    const { companyId } = req.params;
    const {
      title,
      description,
      location,
      modality,
      contractType,
      salary,
      startDate,
      endDate,
      tags,
      category,
    } = req.body;

    if (!companyId) return res.send("Debes incluir un campo 'companyId' que indique a cual compañia pertenece este post por params");
    if (!title) return res.send("Debes incluir un campo 'title'");
    if (!description) return res.send("Debes incluir un campo 'description'");
    if (!location) return res.send("Debes incluir un campo 'location'");
    if (!modality) return res.send("Debes incluir un campo 'modality', puede ser onSite, remote o hybrid");
    if (!contractType) return res.send("Debes incluir un campo 'contractType', puede ser fullTime, partTime, temporary o perHour");
    if (!salary) return res.send("Debes incluir un campo 'salary', si no hay salario enviar string vacío");
    if (!startDate) return res.send("Debes incluir un campo 'startDate'");
    if (!endDate) return res.send("Debes incluir un campo 'endDate'");
    if (!tags) return res.send("Debes incluir un campo 'tags', revisar /api/prisma/seed.ts para ver ejemplos");
    if (!category) return res.send("Debes incluir un campo 'category', revisar /api/prisma/seed.ts para ver opciones");

    try {
      const newPost = await prisma.post.create({
        data: {
          companyId: Number(companyId),
          title: title as string,
          description: description as string,
          location: location as string,
          modality: modality as string,
          contractType: contractType as string,
          salary: salary as string,
          startDate: startDate as string,
          endDate: endDate as string,
          tags: tags as string[],
          categoryId: +category as number,
        },
      });
      res.send(newPost);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  index: async (req: Request, res: Response) => {
    try {
      const getAllPost = await prisma.post.findMany();
      getAllPost.length
        ? res.status(200).json(getAllPost)
        : res.status(404).send("No posts found");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  postById: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      if (!postId) return res.send("Debes enviar el postId por params");
      const post = await prisma.post.findFirst({
        where: {
          id: Number(postId),
        },
      });
      res.json(post);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  filter: async (req: Request, res: Response) => {
    try {
      const {
        inputName,
        categories,
        score,
        orderBy,
        location,
        modality,
        contractType,
      } = req.body;

      if (typeof inputName !== "string")
        return res.send(
          "Debes incluir un campo 'inputName', puede contener una string vacía"
        );
      if (!categories) return res.send("Debes incluir un campo 'categories', puede contener una string vacía");
      if (typeof score !== "string")
        return res.send(
          "Debes incluir un campo 'score', puede contener una string vacía"
        );
      if (typeof orderBy !== "string")
        return res.send(
          "Debes incluir un campo 'orderBy', puede contener una string vacía"
        );
      if (!location) return res.send("Debes incluir un campo 'location', puede contener una string vacía");
      if (!modality) return res.send("Debes incluir un campo 'modality', puede contener una string vacía");
      if (!contractType) return res.send("Debes incluir un campo 'contractType', puede contener una string vacía");

      const posts = await prisma.post.findMany();

      // async function getScore(companyId: number){
      //     const company = await prisma.company.findUnique({
      //         where: {
      //             id: companyId
      //         },
      //         select: {
      //             reviews: true
      //         }
      //     })
      //     let totalScore = 0
      //     company.reviews.map(review => totalScore += review.score)
      //     return totalScore/company.reviews.length
      // }

      let formattedPosts = posts.map((post) => {
        return {
          id: post.id as number,
          companyId: post.companyId as number,
          title: post.title as string,
          location: post.location as string,
          modality: post.modality as string,
          contractType: post.contractType as string,
          salary: post.salary as string,
          startDate: post.startDate as string,
          endDate: post.endDate as string,
          tags: post.tags as string[],
          categoryId: post.categoryId as number,
          // score: getScore(post.companyId)
        };
      });

      // FILTRO INPUTNAME
      inputName
        ? (formattedPosts = formattedPosts.filter((post) =>
            post.title.toLowerCase().includes(inputName.toLowerCase())
          ))
        : null;

      // FILTRO CATEGORY
      categories.length
        ? (formattedPosts = formattedPosts.filter((post) =>
            categories.join(" ").toLowerCase().includes(post.categoryId)
          ))
        : null;

      // FILTRO LOCATION
      location.city.length
        ? (formattedPosts = formattedPosts.filter((post) =>
            location.city
              .join(" ")
              .toLowerCase()
              .includes(post.location.toLowerCase())
          ))
        : null;

      // FILTRO MODALITY
      let modalities = "";
      for (let key in modality) {
        if (modality[key] === true) {
          modalities += key + " ";
        }
      }
      modalities
        ? (formattedPosts = formattedPosts.filter((post) =>
            modalities.toLowerCase().includes(post.modality.toLowerCase())
          ))
        : null;

      // FILTRO CONTRACTTYPE
      let contractTypes = "";
      for (let key in contractType) {
        if (contractType[key] === true) {
          contractTypes += key + " ";
        }
      }
      contractTypes
        ? (formattedPosts = formattedPosts.filter((post) =>
            contractTypes
              .toLowerCase()
              .includes(post.contractType.toLowerCase())
          ))
        : null;

      //FILTRO SCORE
      // score ? formattedPosts = formattedPosts.filter(post => post.score < score+0.5 && post.score > score-0.5) : null

      //FILTRO ORDER

      formattedPosts.length
        ? res.send(formattedPosts)
        : res.send("No se encontraron resultados");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      if (!postId) return res.send("Debes enviar el postId por params");
      const deletedPost = await prisma.post.delete({
        where: {
          id: Number(postId),
        },
      });
      res.json(deletedPost);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
