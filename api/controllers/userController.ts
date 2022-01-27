import { prisma } from "../prisma/database";
import { Request, Response } from "express";
const userValidator = require("./userValidation")

module.exports = {
  create: async (req: Request, res: Response) => {
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

      const user = await prisma.user.create({
        data: {
          email: email as string,
          password: password as string,
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
            image: "",
            companyValues: "",
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
          applicant: true,
          company: true
        }
      });
      res.json(newUser);
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
  userByEmail: async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      if (!email) return res.send("Debes enviar el email del usuario por params");
      const user = await prisma.user.findMany({
        where: {
          email: email,
        },
        include: {
          applicant: true,
          company: true
        }
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
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
