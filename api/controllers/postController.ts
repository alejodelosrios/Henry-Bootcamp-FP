import { prisma } from "../index"

module.exports = {
    create: async (req, res) => {
        try {
            const data = req.body
            const post = await prisma.post.create({
                data: {
                    company: data.company,
                    description: data.description,
                    location: data.location,
                    modality: data.modality,
                    contractType: data.contractType,
                    salary: data.salary,
                    endDate: data.endDate,
                    tags: data.tags,
                    applicants: data.applicants
                }
            })
            res.json(post)
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