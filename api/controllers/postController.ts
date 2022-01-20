import { prisma } from "../index"
import {Request, Response} from "express"

module.exports = {
    create: async (req:Request, res:Response) => {
        const data = req.body
        if (!req.body.company){
            res.status(404).send("Company is required")
        }
        try {
            const post = await prisma.post.create({
                data: {
                    companyId: data.company as number,
                    description: data.description as string,
                    title: data.title as string,
                    location: data.location as string,
                    modality: data.modality as string,
                    contractType: data.contractType as string,
                    salary: data.salary as string,
                    startDate: data.startDate as string,
                    endDate: data.endDate as string,
                    tags: data.tags as string[],
                    category: data.category as string
                }
            })
            res.json(post)
        } catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    },
    index: async (req:Request, res:Response) => {
    }
    ,
    update: async (req:Request, res:Response) => {

    },
    delete: async (req:Request, res:Response) => {

    }
}