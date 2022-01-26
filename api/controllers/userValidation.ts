import { prisma } from "../prisma/database";

module.exports = {
    getUserIfExists: async function (email: string) {
        const users = await prisma.user.findMany();
        const companies = await prisma.company.findMany();
        const allUsers = [...users, ...companies];
        return allUsers.find((user) => user.email === email);
    },
    checkIfEmailAvailable: async function (email: string) {
        const users = await prisma.user.findMany();
        const companies = await prisma.company.findMany();
        const allUsers = [...users, ...companies];
        allUsers.forEach((user) => {
            if (user.email === email) return "Email en uso";
            else return "Email disponible";
        });
    },
};
