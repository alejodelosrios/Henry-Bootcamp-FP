import { prisma } from "../prisma/database";
import { Request, Response } from "express";
import { transporter } from "../config/mailer";

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

    if (typeof Number(companyId) !== "number")
      return res.send(
        "Debes incluir un campo 'companyId' que indique a cual compañia pertenece este post por params, contiene un number"
      );
    if (typeof title !== "string")
      return res.send(
        "Debes incluir un campo 'title', contiene una string, puede estar vacia"
      );
    if (typeof description !== "string")
      return res.send("Debes incluir un campo 'description'");
    if (typeof location !== "string")
      return res.send(
        "Debes incluir un campo 'location', es una string que puede estar vacia"
      );
    if (typeof modality !== "string")
      return res.send(
        "Debes incluir un campo 'modality', es una string que puede estar vacia o ser 'onSite', 'remote' o 'hybrid'"
      );
    if (typeof contractType !== "string")
      return res.send(
        "Debes incluir un campo 'contractType', es una string que puede estar vacia o ser 'fullTime', 'partTime', 'temporary' o 'perHour'"
      );
    if (typeof salary !== "string")
      return res.send(
        "Debes incluir un campo 'salary', contiene un string que puede estar vacío"
      );
    if (typeof startDate !== "string")
      return res.send(
        "Debes incluir un campo 'startDate', contiene un string que puede estar vacío"
      );
    if (typeof endDate !== "string")
      return res.send(
        "Debes incluir un campo 'endDate', contiene un string que puede estar vacío"
      );
    if (typeof tags !== "object")
      return res.send(
        "Debes incluir un campo 'tags', es un arreglo que contiene strings"
      );
    if (typeof category !== "number")
      return res.send("Debes incluir un campo 'category', es un number");

    try {
      const company = await prisma.company.findFirst({
        where: {
          id: Number(companyId),
        },
      });

      const newPost = await prisma.post.create({
        data: {
          companyId: Number(companyId),
          title: title as string,
          description: description as string,
          location: location as string,
          modality: modality as string,
          contractType: contractType as string,
          salary: salary as string,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          tags: tags as string[],
          categoryId: Number(category),
          companyRating: company && company.rating,
        },
      });
      res.send(newPost);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  filter: async (req: Request, res: Response) => {
    try {
      const {
        inputNames,
        categories,
        score,
        orderBy,
        location,
        modality,
        contractType,
      } = req.body;

      if (typeof inputNames !== "object")
        return res.send(
          "Debes incluir un campo 'inputName', es un arreglo que contiene strings, puede estar vacio"
        );
      if (typeof categories !== "object")
        return res.send(
          "Debes incluir un campo 'categories', es un arreglo que contiene numbers"
        );

      if (typeof location !== "object")
        return res.send(
          "Debes incluir un campo 'location', que es un objeto con propiedad 'city', que contiene un arreglo"
        );
      if (typeof location.city !== "object")
        return res.send(
          "Location debe incluir un campo 'city', que contiene un arreglo que puede estar vacio"
        );

      if (typeof modality !== "object")
        return res.send(
          "Debes incluir un campo 'modality', es un objeto con propiedades 'onSite', 'remote' y 'hybrid' que contienen un valor booleano"
        );
      if (typeof modality.onSite !== "boolean")
        return res.send(
          "El campo 'modality' debe incluir un campo 'onSite' que contiene un valor booleano"
        );
      if (typeof modality.remote !== "boolean")
        return res.send(
          "El campo 'modality' debe incluir un campo 'remote' que contiene un valor booleano"
        );
      if (typeof modality.hybrid !== "boolean")
        return res.send(
          "El campo 'modality' debe incluir un campo 'hybrid' que contiene un valor booleano"
        );

      if (typeof contractType !== "object")
        return res.send(
          "Debes incluir un campo 'contractType', es un objeto con propiedades 'fullTime', 'partTime', 'temporary' y 'perHour' que contienen un valor booleano"
        );
      if (typeof contractType.fullTime !== "boolean")
        return res.send(
          "El campo 'contractType' debe incluir un campo 'fullTime' que contiene un valor booleano"
        );
      if (typeof contractType.partTime !== "boolean")
        return res.send(
          "El campo 'contractType' incluir un campo 'partTime' que contiene un valor booleano"
        );
      if (typeof contractType.temporary !== "boolean")
        return res.send(
          "El campo 'contractType' incluir un campo 'temporary' que contiene un valor booleano"
        );
      if (typeof contractType.perHour !== "boolean")
        return res.send(
          "El campo 'contractType' incluir un campo 'perHour' que contiene un valor booleano"
        );

      if (typeof score !== "string")
        return res.send(
          "Debes incluir un campo 'score', puede contener una string vacía"
        );
      if (typeof orderBy !== "string")
        return res.send(
          "Debes incluir un campo 'orderBy', puede contener una string vacía"
        );

      let posts = await prisma.post.findMany({
        include: {
          company: {
            select: {
              companyLogo: true,
            },
          },
        },
      });

      // FILTRO INPUTNAME
      inputNames.length
        ? (posts = posts.filter((post) => {
            for (let i = 0; i < inputNames.length; i++) {
              if (
                post.title.toLowerCase().includes(inputNames[i].toLowerCase())
              )
                return post;
            }
          }))
        : null;

      // FILTRO CATEGORY
      categories.length
        ? (posts = posts.filter((post) => categories.includes(post.categoryId)))
        : null;

      // FILTRO LOCATION
      location.city.length
        ? (posts = posts.filter((post) =>
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
        ? (posts = posts.filter((post) =>
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
        ? (posts = posts.filter((post) =>
            contractTypes
              .toLowerCase()
              .includes(post.contractType.toLowerCase())
          ))
        : null;

      // FILTRO SCORE
      score
        ? (posts = posts.filter((post) => post.companyRating === Number(score)))
        : null;

      //FILTRO ORDER
      posts = posts.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (b.title > a.title) {
          return -1;
        }
        return 0;
      });

      res.json(posts);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const getAllPosts = await prisma.post.findMany({
        include: {
          company: {
            select: {
              companyLogo: true,
            },
          },
        },
      });

      res.json(getAllPosts);
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
          applicants: {
            include: {
              applicant: {
                select: {
                  firstName: true,
                  lastName: true,
                  country: true,
                  image: true,
                  skillTags: true,
                },
              },
            },
          },
          company: {
            select: {
              id: true,
              name: true,
              companyLogo: true,
              location: true,
            },
          },
          favorites: true,
          favoritedBy: true,
        },
      });
      if (post) {
        post.applicants =
          post &&
          post.applicants.sort(function (a, b) {
            if (a.applicant.firstName > b.applicant.firstName) {
              return 1;
            }
            if (b.applicant.firstName > a.applicant.firstName) {
              return -1;
            }
            return 0;
          });
      }

      res.json(post && post);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      const { endDate } = req.body;
      if (!postId) return res.send("Debes enviar el postId por params");
      const updatedPost = await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          endDate: endDate,
          notifiedEndDate: false,
        },
      });

      const company = await prisma.company.findFirst({
        where: {
          id: updatedPost && updatedPost.companyId,
        },
        include: {
          posts: true,
        },
      });

      res.json(company && company.posts);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { postId } = req.params;
      if (!postId) return res.send("Debes enviar el postId por params");
      const post = await prisma.post.findFirst({
        where: {
          id: Number(postId),
        },
        include: {
          applicants: {
            include: {
              applicant: true,
            },
          },
        },
      });

      const applicants = post && post.applicants;

      applicants &&
        applicants.forEach(async (applicant) => {
          let updateApplicantStatus = await prisma.applicantPool.updateMany({
            where: {
              applicantId: Number(applicant.applicantId),
              postId: Number(post && post.id),
            },
            data: {
              status: "complete",
            },
          });

          let notifyApplicant = await prisma.notification.create({
            data: {
              type: "update",
              message: `La oferta ${post && post.title} ha sido dada de baja`,
              postId: Number(post && postId),
              applicantId: Number(applicant.applicantId),
            },
          });

          //ENVIAR EMAIL A LOS APPLICANTS

          const user = await prisma.user.findFirst({
            where: {
              id: applicant && applicant.applicant.userId,
            },
          });

          let emailApplicant = await transporter.sendMail({
            from: '"Transforma" <transformapage@gmail.com>',
            to: `${user && user.email}`,
            subject: `${applicant && applicant.applicant.firstName} ${
              applicant && applicant.applicant.lastName
            }`,
            html: `<p>La oferta ${
              post && post.title
            } ha sido dada de baja. Saludos, el equipo de Transforma</p>`,
          });
        });

      const hidePost = await prisma.post.update({
        where: {
          id: Number(postId),
        },
        data: {
          active: false,
        },
      });

      if (post) {
        const companyPosts = await prisma.post.findMany({
          where: {
            companyId: Number(post.companyId),
          },
        });
        res.json(companyPosts);
      }

      res.send("Post eliminado exitosamente");
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
