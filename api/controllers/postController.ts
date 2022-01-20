import { prisma } from "../prisma/dataBase"
import {Request, Response} from "express"

module.exports = {
    create: async (req: Request, res: Response) => {
        try {
            const data = req.body
            const post = await prisma.post.create({
                data: {
                    companyId: data.companyId as number,
                    title: data.title as string,
                    description: data.description as string,
                    location: data.location,
                    modality: data.modality as string,
                    contractType: data.contractType as string,
                    salary: data.salary as string,
                    startDate: data.startDate as string,
                    endDate: data.endDate as string,
                    tags: data.tags,
                    category: data.category as string
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