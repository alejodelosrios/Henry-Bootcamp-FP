import { prisma } from "../prisma/database"
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
        try {
           const title = req.query.title as string
           const getAllPost = await prisma.post.findMany()
           if(title){
           const getPost= getAllPost.filter(e => e.title.toLowerCase().includes(title.toLowerCase())) 
           getPost.length ?
               res.status(200).send(getPost) :
               res.status(404).send("Post not found")
           } else {
               res.status(200).send(getAllPost)
           }
       } catch(error){
           console.log(error)
           res.status(400).send(error)
       }
    },
    postById: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const post = await prisma.post.findFirst({
                where: {
                    postId: Number(id)
                }
            })
            res.send(post)
        }catch(error){
            res.send(error)
        }
    },
    update: async (req:Request, res:Response) => {

    },
    delete: async (req:Request, res:Response) => {

    }
}