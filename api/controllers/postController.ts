import { prisma } from "../index"
import {Request, Response} from "express"

module.exports = {
    create: async (req:Request, res:Response) => {
        try {
            const data = req.body
            const post = await prisma.post.create({
                data: {
                    companyId: data.company as number,
                    description: data.description as string,
                    location: data.location as string,
                    modality: data.modality as string,
                    contractType: data.contractType as string,
                    salary: data.salary as string,
                    endDate: data.endDate as string,
                    tags: data.tags as string[],
                }
            })
            res.json(post)
        } catch(error){
            res.send(error)
        }
    },
    index: async (req:Request, res:Response) => {

    },
    update: async (req:Request, res:Response) => {

    },
    delete: async (req:Request, res:Response) => {
        
    }
}