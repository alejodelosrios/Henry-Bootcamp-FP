import { prisma } from "../prisma/database";
import { Request, Response } from "express";

const jwt = require("jsonwebtoken");
const SHA2 = require("sha2");

const userValidator = require("./userValidation")

module.exports = {
  register: async (req: Request, res: Response) => {
    try {
      const {
        email,
        password,
        role
      } = req.body;
      if (!email) return res.send("Falta campo 'email'");
      if (!password) return res.send("Falta campo 'password'");
      if (!role) return res.send("Falta campo 'role'");

      //CHEQUEA SI EL USER EXISTE ANTES DE CREARLO, 
      const checkIfEmailAvailable = userValidator.checkIfEmailAvailable(email)
      if(!checkIfEmailAvailable) return res.send("Email en uso")

      let hashedPassword = SHA2.SHA_512_t(80, password).toString("hex")
      const user = await prisma.user.create({
        data: {
          email: email as string,
          password: hashedPassword as string,
          role: role as string,
        },
      });

      if(role === "applicant" || role === "admin") {
        const applicant = await prisma.applicant.create({
          data: {
            userId: user.id,
            firstName: "",
            lastName: "",
            about: "",
            phoneNumber: "",
            country: "",
            image: "",
            showImage: true,
          }
        })
      }
      
      if(role === "company") {
        const company = await prisma.company.create({
          data: {
            userId: user.id,
            name: "",
            legalName: "",
            stin: "",
            accountManagers: [],
            companyLogo: "",
            location: "",
            values: "",
            aboutValues: "",
            about: "",
            mission: "",
            vision: "",
          },
        });
      }
      
      const newUser = await prisma.user.findMany({
        where: {
          email: email,
        },
        include: {
          applicant: {
            include: {
              notifications: true
            }
          },
          company: {
            include: {
              notifications: true
            }
          }
        }
      });

      const userForToken = {
        id: user.id,
        email: user.email,
        role: user.role
      }
    
      jwt.sign(userForToken, "jugosho", (err: object, token: string) => {
        if(err) return res.status(500).send(err)
        res.json({
          ...newUser,
          token: token
        })
      })
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  index: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      let { email, password } = req.body;
      if (!email) return res.send("Debes incluir un campo 'email', es un string");
      if (!password) return res.send("Debes incluir un campo 'password', es un string");

      let hashedPassword = SHA2.SHA_512_t(80, password).toString("hex")
      
      const user = await prisma.user.findFirst({
        where: {
          email: email,
          password: hashedPassword
        },
        include: {
          applicant: {
            include: {
              experience: true,
              education: true,
              languages: true,
              skillTags: true,
              notifications: true,
              followed: true,
              postulations: {
                include: {
                  post: true
                }
              },
              favorites: true
            }
          },
          company: {
            include: {
              notifications: true,
              reviews: true,
              posts: true,
              followers: true
            }
          }
        }
      });

      if(!user) return res.status(403).send("credenciales invalidas")

      const userForToken = {
        id: user.id,
        email: user.email,
        role: user.role
      }
    
      jwt.sign(userForToken, "jugosho", (err: object, token: string) => {
        if(err) return res.status(500).send(err)
        res.json({
          ...user,
          token: token
        })
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  
  update: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const {
        email,
        newEmail = email,
        password,
        newPassword = password,
      } = req.body;

      if (!userId) return res.send("Debes enviar el id del usuario por params");
      if (!email) return res.send("Debes enviar el campo 'email' por body e incluir otro campo 'newEmail' si quieres actualizarlo");
      if (!password) return res.send("Debes enviar el campo 'password' por body e incluir otro campo 'newPassword' si quieres actualizarla");
      const userUpdated = await prisma.user.updateMany({
        where: {
          id: Number(userId),
        },
        data: {
          email: newEmail as string,
          password: newPassword as string,
        },
      });
      res.json(userUpdated);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      if (!userId) return res.send("Debes enviar el id del usuario por params");
      const userDelete = await prisma.user.delete({
        where: {
          id: Number(userId),
        },
      });
      res.json(userDelete);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
