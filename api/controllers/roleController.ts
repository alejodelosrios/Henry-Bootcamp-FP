import { prisma } from "../index"

module.exports = {
    create: async (req, res) => {
        try {
            const {roles} = req.body
            const allRoles = await prisma.role.createMany({
                data: roles,
            })
            res.send(allRoles)
        } catch(error){
            res.send(error)
        }
    },
    index: async (req, res) => {

    },
    update: async (req, res) => {

    },
    delete: async (req, res) => {
        
    }
}