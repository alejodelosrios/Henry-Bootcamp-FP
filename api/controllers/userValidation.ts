import { prisma } from "../prisma/database"

module.exports = {
    getUserIfExists: async function (email){
        const users = await prisma.user.findMany()
        const companies = await prisma.company.findMany()
        const allUsers = [...users, ...companies]
        allUsers.forEach(user => {
            if(user.email === email) return user
            else return "No se encontro el usuario"
        })
    },
    checkIfEmailAvailable: async function (email){
        const users = await prisma.user.findMany()
        const companies = await prisma.company.findMany()
        const allUsers = [...users, ...companies]
        allUsers.forEach(user => {
            if(user.email === email) return "Email en uso"
            else return "Email disponible"
        })
    }
}