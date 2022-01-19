import { prisma } from "../index"
import {Request, Response} from "express"

module.exports = {
    create: async (req: Request, res: Response) => {
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
    index: async (req: Request, res: Response) => {

    },
    update: async (req: Request, res: Response) => {

    },
    delete: async (req: Request, res: Response) => {
        
    }
}