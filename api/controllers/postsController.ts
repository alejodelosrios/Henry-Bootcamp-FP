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

    if (typeof companyId !== "number") return res.send("Debes incluir un campo 'companyId' que indique a cual compañia pertenece este post por params, contiene un number");
    if (typeof title !== "string") return res.send("Debes incluir un campo 'title', contiene una string, puede estar vacia");
    if (typeof description !== "string") return res.send("Debes incluir un campo 'description'");
    if (typeof location !== "string") return res.send("Debes incluir un campo 'location', es una string que puede estar vacia");
    if (typeof modality !== "string") return res.send("Debes incluir un campo 'modality', es una string que puede estar vacia o ser 'onSite', 'remote' o 'hybrid'");
    if (typeof contractType !== "string") return res.send("Debes incluir un campo 'contractType', es una string que puede estar vacia o ser 'fullTime', 'partTime', 'temporary' o 'perHour'");
    if (typeof salary !== "string") return res.send("Debes incluir un campo 'salary', contiene un string que puede estar vacío");
    if (typeof startDate !== "string") return res.send("Debes incluir un campo 'startDate', contiene un string que puede estar vacío");
    if (typeof endDate !== "string") return res.send("Debes incluir un campo 'endDate', contiene un string que puede estar vacío");
    if (typeof tags !== "object") return res.send("Debes incluir un campo 'tags', es un arreglo que contiene strings");
    if (typeof category !== "number") return res.send("Debes incluir un campo 'category', es un number");

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
          categoryId: Number(category),
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
        include: {
          applicants: true,
          favoritedBy: true
        }
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

      if (typeof inputName !== "string") return res.send("Debes incluir un campo 'inputName', contiene una string, puede estar vacia");
      if (typeof categories !== "object") return res.send("Debes incluir un campo 'categories', es un arreglo que contiene numbers");
      
      if (typeof location !== "object") return res.send("Debes incluir un campo 'location', que es un objeto con propiedad 'city', que contiene un arreglo");
      if (typeof location.city !== "object") return res.send("Location debe incluir un campo 'city', que contiene un arreglo que puede estar vacio");

      if (typeof modality !== "object") return res.send("Debes incluir un campo 'modality', es un objeto con propiedades 'onSite', 'remote' y 'hybrid' que contienen un valor booleano");
      if (typeof modality.onSite !== "boolean") return res.send("El campo 'modality' debe incluir un campo 'onSite' que contiene un valor booleano");
      if (typeof modality.remote !== "boolean") return res.send("El campo 'modality' debe incluir un campo 'remote' que contiene un valor booleano");
      if (typeof modality.hybrid !== "boolean") return res.send("El campo 'modality' debe incluir un campo 'hybrid' que contiene un valor booleano");

      if (typeof contractType !== "object") return res.send("Debes incluir un campo 'contractType', es un objeto con propiedades 'fullTime', 'partTime', 'temporary' y 'perHour' que contienen un valor booleano");
      if (typeof contractType.fullTime !== "boolean") return res.send("El campo 'contractType' debe incluir un campo 'fullTime' que contiene un valor booleano");
      if (typeof contractType.partTime !== "boolean") return res.send("El campo 'contractType' incluir un campo 'partTime' que contiene un valor booleano");
      if (typeof contractType.temporary !== "boolean") return res.send("El campo 'contractType' incluir un campo 'temporary' que contiene un valor booleano");
      if (typeof contractType.perHour !== "boolean") return res.send("El campo 'contractType' incluir un campo 'perHour' que contiene un valor booleano");

      if (typeof score !== "string") return res.send("Debes incluir un campo 'score', puede contener una string vacía");
      if (typeof orderBy !== "string") return res.send("Debes incluir un campo 'orderBy', puede contener una string vacía");

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
            categories.includes(post.categoryId)
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
