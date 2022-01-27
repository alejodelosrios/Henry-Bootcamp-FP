import { prisma } from "../prisma/database";

module.exports = {
    getUserIfExists: async function (email:string){
        const users = await prisma.user.findMany()
        users.forEach(user => {
            if(user.email === email) return user
            else return "No se encontro el usuario"
        })
    },
    checkIfEmailAvailable: async function (email:string){
        const users = await prisma.user.findMany()
        users.forEach(user => {
            if(user.email === email) return false
            else return true
        })
    }
}
