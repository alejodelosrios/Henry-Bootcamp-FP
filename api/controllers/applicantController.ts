import { prisma } from "../prisma/database";
import { Request, Response } from "express";
import {transporter} from "../config/mailer";
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { firstName, lastName, about, phoneNumber, country, image } =
        req.body;

      if (!userId)
        return res.send(
          "Debes incluir un campo 'userId' con el id del usuario al cual esta asociado este applicant por params"
        );
      if (!firstName)
        return res.send(
          "Debes incluir un campo 'firstName', puede contener una string vacía"
        );
      if (!lastName)
        return res.send(
          "Debes incluir un campo 'lastName', puede contener una string vacía"
        );
      if (!about)
        return res.send(
          "Debes incluir un campo 'about', puede contener una string vacía"
        );
      if (!phoneNumber)
        return res.send(
          "Debes incluir un campo 'phoneNumber', puede contener una string vacía"
        );
      if (!country)
        return res.send(
          "Debes incluir un campo 'country', puede contener una string vacía"
        );
      if (!image)
        return res.send(
          "Debes incluir un campo 'image', puede contener una string vacía"
        );

      const newApplicant = await prisma.applicant.create({
        data: {
          userId: Number(userId),
          firstName: firstName as string,
          lastName: lastName as string,
          about: about as string,
          phoneNumber: phoneNumber as string,
          country: country as string,
          image: image as string,
          showImage: true as boolean,
        },
      });
      res.send(newApplicant);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  review: async (req: Request, res: Response) => {
    try {
      const { companyId, description, score } = req.body;
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

      const company = await prisma.company.findFirst({
        where: {
          id: Number(companyId)
        },
        include: {
          reviews: true
        }
      })

      let rating: number = 0
      company && company.reviews.map(review => {
        if(review && review.score) return rating += review.score
      })

      if(company){
        rating /= company.reviews.length
      }

      const updateCompanyRating = await prisma.company.update({
        where: {
          id: Number(companyId)
        },
        data: {
          rating: Math.round(rating)
        }
      })

      const updateCompanyPosts = await prisma.post.updateMany({
        where: {
          companyId: Number(companyId)
        },
        data: {
          companyRating: Math.round(rating)
        }
      })
      
      res.json(company && company.reviews);
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const applicants = await prisma.applicant.findMany();
      res.json(applicants);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  applicantById: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      if (!applicantId)
        return res.send("Debes enviar el applicantId por params");
      const userProfile = await prisma.applicant.findFirst({
        where: {
          id: Number(applicantId),
        },
        include: {
          experience: true,
          education: true,
          languages: true,
          skillTags: true,
          notifications: true,
          followed: true,
          postulations: true,
          favorites: true,
        },
      });
      let formattedApplicantForFront
      if(userProfile) {
        const getEmail = await prisma.user.findFirst({
          where: {
            id: userProfile.userId
          },
          select: {
            email: true
          }
        })
        formattedApplicantForFront = {
          ...getEmail,
          ...userProfile
        }
      }
      
      res.json(formattedApplicantForFront);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  apply: async (req: Request, res: Response) => {
    try {
      const { applicantId, postId } = req.body;
      if (!applicantId) return res.send("Debes incluir el campo 'applicantId'");
      if (!postId) return res.send("Debes incluir el campo 'postId'");

      //CONSEGUIMOS EL APPLICANT Y POST PARA USAR SUS DATOS PARA PERSONALIZAR LA NOTIFICACION
      const applicant = await prisma.applicant.findFirst({
        where: {
          id: Number(applicantId),
        },
        include: {
          postulations: {
            include: {
              post: true,
            },
          },
        },
      });

      const postulation =
        applicant &&
        applicant.postulations.filter(
          (postulation) => postulation.postId === postId
        );

      //SI NO APLICO ENTONCES CREAMOS SU APLICACION
      if (postulation) {
        if (!postulation.length) {
          const applicantPool = await prisma.applicantPool.create({
            data: {
              applicantId: Number(applicantId),
              postId: Number(postId),
              status: "applied",
            },
          });
        }

        const post = await prisma.post.findFirst({
          where: {
            id: Number(postId),
          },
        });

        if (!applicant?.userId) {
          return res.status(400).send("something went wrong");
        }

        const applicantUser = await prisma.user.findFirst({
          where: {
            id: applicant.userId
          }
        })

        if (!post?.companyId) {
          return res.status(400).send("something went wrong");
        }

        const companyUser = await prisma.user.findFirst({
          where: {
            id: post.companyId
          }
        })

        // NOTIFICAMOS AL USER QUE APLICO CORRECTAMENTE

        const notifyApplicant = await prisma.notification.create({
          data: {
            type: "application",
            message: `Te has postulado existosamente para la oferta ${
              post && post.title
            }`,
            postId: Number(postId),
            applicantId: Number(applicantId),
          },
        });

        let emailApplicant = await transporter.sendMail({
          from: '"Transforma" <transformapage@gmail.com>',
          to: `${applicantUser && applicantUser.email}`,
          subject: `${applicant && applicant.firstName} ${
            applicant && applicant.lastName
          }`,
          html: `<p>Te has postulado con éxito para la oferta ${
            post && post.title
          }. Saludos, el equipo de Transforma</p>`,
        });

        //NOTIFICAMOS A LA COMPANY QUE RECIBIO UNA POSTULACION
        const notifyCompany = await prisma.notification.create({
          data: {
            type: "application",
            message: `Has recibido una postulacion de ${
              applicant && applicant.firstName
            } ${applicant && applicant.lastName} para la oferta $${
              post && post.title
            }`,
            postId: Number(postId),
            companyId: post && post.companyId,
          },
        });

        let emailCompany = await transporter.sendMail({
          from: '"Transforma" <transformapage@gmail.com>',
          to: `${companyUser && companyUser.email}`,
          subject: `${applicant && applicant.firstName} ${applicant && applicant.lastName}`,
          html: `<p>${applicant && applicant.firstName} ${applicant && applicant.lastName} se ha postulado para la oferta ${post && post.title}. Saludos, el equipo de Transforma</p>`,
        });
      }

      //RECUPERAMOS TODAS LAS NOTIFICACIONES ASOCIADAS AL APPLICANT
      const notifications = await prisma.notification.findMany({
        where: {
          applicantId: Number(applicantId),
        },
      });

      const updatedApplicant = await prisma.applicant.findFirst({
        where: {
          id: applicantId,
        },
        include: {
          postulations: {
            include: {
              post: true,
            },
          },
        },
      });

      // FORMATEAMOS EL OBJETO COMO PIDIO EL FRONT
      const response = {
        postulation: updatedApplicant && updatedApplicant,
        notifications: notifications,
      };

      res.json(response);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  addfavorite: async (req: Request, res: Response) => {
    try {
      const { applicantId, postId } = req.body;

      const applicant = await prisma.applicant.findFirst({
        where: {
          id: Number(applicantId),
        },
        include: {
          favorites: true,
        },
      });

      const isAlreadyFavourite =
        applicant &&
        applicant.favorites.find((favourite) => favourite.id === postId);

      if (isAlreadyFavourite) {
        const favouriteUpdate = await prisma.applicant.update({
          where: {
            id: Number(applicantId),
          },
          data: {
            favorites: {
              disconnect: [{ id: Number(postId) }],
            },
          },
          include: {
            favorites: true,
          },
        });
        res.json(favouriteUpdate.favorites);
      } else {
        const favouriteUpdate = await prisma.applicant.update({
          where: {
            id: Number(applicantId),
          },
          data: {
            favorites: {
              connect: [{ id: Number(postId) }],
            },
          },
          include: {
            favorites: true,
          },
        });
        res.json(favouriteUpdate.favorites);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  follow: async (req: Request, res: Response) => {
    try {
      const { applicantId, companyId } = req.body;

      const followUpdate = await prisma.applicant.update({
        where: {
          id: Number(applicantId),
        },
        data: {
          followed: {
            connect: [{ id: Number(companyId) }],
          },
        },
      });
      res.json(followUpdate);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  tags: async (req: Request, res: Response) => {
    try {
      const { applicantId, tagId } = req.body;

      const applicant = await prisma.applicant.findFirst({
        where: {
          id: applicantId
        },
        include: {
          skillTags: true
        }
      })

      const checkIfTagAlreadyExists = applicant && applicant.skillTags.filter(tag => tag.id === tagId)

      if(checkIfTagAlreadyExists && checkIfTagAlreadyExists.length) {
        const applicantUpdate = await prisma.applicant.update({
          where: {
            id: Number(applicantId),
          },
          data: {
            skillTags: {
              disconnect: [{id: tagId}],
            },
          },
          include: {
            skillTags: true
          }
        });
        res.json(applicantUpdate);
      }
      else {
        const applicantUpdate = await prisma.applicant.update({
          where: {
            id: Number(applicantId),
          },
          data: {
            skillTags: {
              connect: [{id: tagId}],
            },
          },
          include: {
            skillTags: true
          }
        });
        res.json(applicantUpdate);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      const { firstName, lastName, email, phoneNumber, country, about, showImage } =
        req.body;
      if (!applicantId)
        return res.send("Debes enviar el id del applicant por params");
      const updatedApplicant = await prisma.applicant.update({
        where: {
          id: Number(applicantId),
        },
        data: {
          firstName: firstName as string,
          lastName: lastName as string,
          phoneNumber: phoneNumber as string,
          country: country as string,
          about: about as string,
          showImage: showImage as boolean,
        },
      });

      const updatedUser = await prisma.user.update({
        where: {
          id: updatedApplicant.userId,
        },
        data: {
          email: email as string,
        },
        include: {
          applicant: true
        }
      });
      res.send(updatedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { applicantId } = req.params;
      if (!applicantId)
        return res.send("Debes enviar el id del applicant por params");
      const experienceDelete = await prisma.experience.deleteMany({
        where: {
          applicantId: Number(applicantId),
        },
      });

      const educationDelete = await prisma.education.deleteMany({
        where: {
          applicantId: Number(applicantId),
        },
      });

      const languageDelete = await prisma.language.deleteMany({
        where: {
          applicantId: Number(applicantId),
        },
      });
      const applicantDelete = await prisma.applicant.deleteMany({
        where: {
          id: Number(applicantId),
        },
      });

      res.send(applicantDelete);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
