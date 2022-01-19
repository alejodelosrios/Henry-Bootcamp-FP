import { prisma } from "../index"

module.exports = {
    create: async (req, res) => {
        try {
            const data = req.body
            const company = await prisma.company.create({
                data: {
                    name: data.name,
                    roleId: data.roleId,
                    legalName: data.legalName,
                    email: data.email,
                    password: data.password,
                    stin: data.stin,
                    accountManagers: data.accountManagers,
                    image: data.image,
                    posts: data.posts,
                    companyValues: data.companyValues,
                    mission: data.mission,
                    vision: data.vision,
                    reviews: data.reviews
                }
            })
            res.json(company)
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