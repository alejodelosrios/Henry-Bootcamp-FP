import { prisma } from "../prisma/database";
import { Request, Response } from "express";
import {transporter} from "../config/mailer";

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const {
        name,
        legalName,
        stin,
        accountManagers,
        image,
        location,
        values,
        aboutValues,
        about,
        mission,
        vision,
      } = req.body;

      if (!userId)
        return res.send(
          "Debes incluir un campo 'userId' con el id del usuario al cual esta asociado esta compañia por params"
        );
      if (!name)
        return res.send(
          "Debes incluir un campo 'name', puede contener una string vacía"
        );
      if (!legalName)
        return res.send(
          "Debes incluir un campo 'legalName', puede contener una string vacía"
        );
      if (!stin)
        return res.send(
          "Debes incluir un campo 'stin' (el 'cuil' en argentina), puede contener una string vacía"
        );
      if (!accountManagers)
        return res.send(
          "Debes incluir un campo 'accountManagers', contiene un arreglo de strings, puede estar vacío"
        );
      if (!image)
        return res.send(
          "Debes incluir un campo 'image', puede contener una string vacía"
        );
      if (!values)
        return res.send(
          "Debes incluir un campo 'values', es un arreglo que contiene strings, puede estar vacío"
        );
      if (!aboutValues)
        return res.send(
          "Debes incluir un campo 'aboutValues', puede contener una string vacía"
        );
      if (!about)
        return res.send(
          "Debes incluir un campo 'about', puede contener una string vacía"
        );
      if (!mission)
        return res.send(
          "Debes incluir un campo 'mission', puede contener una string vacía"
        );
      if (!vision)
        return res.send(
          "Debes incluir un campo 'vision', puede contener una string vacía"
        );

      const newCompany = await prisma.company.create({
        data: {
          userId: Number(userId),
          name: name as string,
          legalName: legalName as string,
          stin: stin as string,
          accountManagers: accountManagers as string[],
          companyLogo: image as string,
          location: location as string,
          values: values as string,
          aboutValues: aboutValues as string,
          about: about as string,
          mission: mission as string,
          vision: vision as string,
        },
      });
      res.json(newCompany);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const companies = await prisma.company.findMany();
      res.json(companies);
    } catch (error) {
      res.send(error);
    }
  },

  companyById: async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params;
      if (!companyId) return res.send("Debes enviar el companyId params");
      const company = await prisma.company.findUnique({
        where: {
          id: Number(companyId),
        },
        include: {
          notifications: true,
          reviews: true,
          posts: true,
          followers: true,
          images: true,
          payment: true,
        },
      });
      
      if(company && company.posts){
        company.posts = company.posts.sort(function(a, b) {
          if(a.title > b.title){
              return 1
          }
          if(b.title > a.title) {
              return -1
          }
          return 0
        })
      } 
      
      res.json(company);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getPosts: async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params;
      if (!companyId) return res.send("Debes enviar el companyId por params");
      const company = await prisma.company.findUnique({
        where: {
          id: Number(companyId),
        },
        include: {
          posts: {
            where: {
              active: true
            }
          },
        },
      });

      const posts = company && company.posts.sort(function(a, b) {
        if(a.title > b.title){
            return 1
        }
        if(b.title > a.title) {
            return -1
        }
        return 0
      })

      if (company) {
        res.json(posts);
      } else {
        res.status(400).send("Company doesn't exist");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  updateApplicationStatus: async (req: Request, res: Response) => {
    try {
      const { applicantId, postId, newStatus } = req.body;
      const updatedStatus = await prisma.applicantPool.updateMany({
        where: {
          applicantId,
          postId,
        },
        data: {
          status: newStatus,
        },
      });

      //NOTIFY APPLICANT

      const applicant = await prisma.applicant.findFirst({
        where: {
          id: Number(applicantId)
        }
      })

      if (!applicant?.userId) {
        return res.status(400).send("something went wrong");
      }

      const user = await prisma.user.findFirst({
        where: {
          id: applicant.userId
        }
      })

      const post = await prisma.post.findFirst({
        where: {
          id: Number(postId),
        },
        include: {
          applicants: {
            include: {
              applicant: {
                include: {
                  skillTags: true
                }  
              }            
            }
          }
        }
      });

      const notifyApplicant = await prisma.notification.create({
        data: {
          message: `Se ha modificado el estado de tu postulacion para ${
            post && post.title
          }`,
          type: "statusUpdate",
          applicantId: Number(applicantId),
          postId: Number(postId),
        },
      });

      let emailApplicant = await transporter.sendMail({
        from: '"Transforma" <transformapage@gmail.com>',
        to: `${user && user.email}`,
        subject: `${applicant && applicant.firstName} ${
          applicant && applicant.lastName
        }`,
        html: `<p>El estado de tu postulacion para la oferta ${
          post && post.title
        } ha cambiado a ${newStatus}. Saludos, el equipo de Transforma</p>`,
      });

      const sortedApplicants = post && post.applicants.sort(function(a, b) {
        if(a.applicant.firstName > b.applicant.firstName){
            return 1
        }
        if(b.applicant.firstName > a.applicant.firstName) {
            return -1
        }
        return 0
      })
      
      res.json(sortedApplicants && sortedApplicants);
    } catch (error) {
      res.send(error);
    }
  },

  addFavoriteApplicant: async (req: Request, res: Response) => {
    try {
      const { applicantId, postId } = req.body;
      if (!applicantId)
        return res.send("Debes incluir un campo 'applicantId', es un number");
      if (!postId)
        return res.send("Debes incluir un campo 'postId', es un number");

      const post = await prisma.post.findFirst({
        where: {
          id: Number(postId),
        },
        include: {
          favorites: true,
        },
      });

      const checkIfApplicantAlreadyFavorite =
        post &&
        post.favorites.filter((applicant) => applicant.id === applicantId);

      if (checkIfApplicantAlreadyFavorite) {
        if (!checkIfApplicantAlreadyFavorite.length) {
          const addApplicantToFavorites = await prisma.post.update({
            where: {
              id: postId,
            },
            data: {
              favorites: {
                connect: [{ id: applicantId }],
              },
            },
            include: {
              favorites: true,
            },
          });
          res.json(addApplicantToFavorites);
        } else {
          const removeApplicantFromFavorites = await prisma.post.update({
            where: {
              id: postId,
            },
            data: {
              favorites: {
                disconnect: [{ id: applicantId }],
              },
            },
            include: {
              favorites: true,
            },
          });
          res.json(removeApplicantFromFavorites);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  addImage: async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params;
      const { name = "", url } = req.body;
      if (!companyId) return res.send("Debes enviar el companyId por params");
      if (!url) return res.send("Debes incluir un campo 'url'");
      const newImage = await prisma.image.create({
        data: {
          name: name as string,
          url: url as string,
          companyId: Number(companyId),
        },
      });
      const images = await prisma.image.findMany({
        where: {
          companyId: Number(companyId),
        },
      });
      res.json(images);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params;
      const {
        name,
        legalName,
        stin,
        accountManagers,
        image,
        location,
        values,
        aboutValues,
        about,
        mission,
        vision,
      } = req.body;
      if (!companyId) return res.send("Debes enviar el companyId por params");
      const updatedCompany = await prisma.company.update({
        where: {
          id: Number(companyId),
        },
        data: {
          name: name as string,
          legalName: legalName as string,
          stin: stin as string,
          accountManagers: accountManagers as string[],
          companyLogo: image as string,
          location: location as string,
          values: values as string,
          aboutValues: aboutValues as string,
          about: about as string,
          mission: mission as string,
          vision: vision as string,
        },
      });
      res.json(updatedCompany);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  getPremiumCompanies: async (req: Request, res: Response) => {
    try {
      const premiumCompanies = await prisma.company.findMany({
        where: {
          premium: true,
        },
        select: {
          id: true,
          name: true,
          companyLogo: true,
          location: true,
         },
      });
      res.json(premiumCompanies);
    } catch (error) {
      console.log(error)
      res.send(error);
    }
  },
  

  delete: async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params;
      if (!companyId) return res.send("Debes enviar el companyId por params");
      const postsDelete = await prisma.post.deleteMany({
        where: {
          companyId: Number(companyId),
        },
      });

      const deletedCompany = await prisma.company.delete({
        where: {
          id: Number(companyId),
        },
      });
      res.json(deletedCompany);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
