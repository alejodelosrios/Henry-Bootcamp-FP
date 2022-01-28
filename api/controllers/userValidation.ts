import { prisma } from "../prisma/database";

module.exports = {
    getUserIfExists: async function (email: string) {
        console.log(email);
        const user = await prisma.user.findMany({
            where: {
                email: email,
            },
            include: {
                applicant: true,
                company: true,
            },
        });
        if (user[0]) {
            return user[0];
        }
        return "No se encontro el usuario";

        //users.forEach(user => {
        //if(user.email === email) return user
        //else return "No se encontro el usuario"
        //})
    },
    
    checkIfEmailAvailable: async function (email: string) {
        const users = await prisma.user.findMany();
        users.forEach((user) => {
            if (user.email === email) return false;
            else return true;
        });
    },
};
