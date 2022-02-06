import { prisma } from "../prisma/database";
import { Request, Response } from "express";

module.exports = {
  getUserIfExists: async function (email: string) {
    try {
      if (!email) return "Debes enviar el email del usuario por params";
      const user = await prisma.user.findFirst({
        where: {
          email: email,
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
                  post: true,
                },
              },
              favorites: true,
            },
          },
          company: {
            include: {
              notifications: true,
              reviews: true,
              posts: true,
              followers: true,
            },
          },
        },
      });

      if (!user) return "No se encontro el usuario";
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  checkIfEmailAvailable: async function (email: string) {
    const users = await prisma.user.findMany();
    users.forEach((user) => {
      if (user.email === email) return false;
      else return true;
    });
  }
};
