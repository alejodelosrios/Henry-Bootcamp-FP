import { prisma } from "../prisma/database"
import { Request, Response } from "express";

module.exports = {
    create: async (req:Request, res:Response) => {
        const data = req.body
        if (!req.body.companyId){
            res.status(404).send("Company is required")
        }
        try {
            const newPost = await prisma.post.create({
                data: {
                    companyId: data.companyId as number,
                    title: data.title as string,
                    description: data.description as string,
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
            res.send(newPost)
        } catch(error){
            res.status(400).send(error)
        }
    },
    index: async (req:Request, res:Response) => {
        try {
           const getAllPost = await prisma.post.findMany()
           getAllPost.length ?
               res.status(200).json(getAllPost) :
               res.status(404).send("No posts found")
       } catch(error){
           res.status(400).send(error)
       }
    },
    postById: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const post = await prisma.post.findFirst({
                where: {
                    id: Number(id)
                }
            })
            res.json(post)
        }catch(error){
            res.send(error)
        }
    },
    filter: async (req: Request, res: Response) => {
        try{
            const { 
                inputName,
                categories,
                score,
                orderBy,
                location,
                modality,
                contractType
            } = req.body

            const posts = await prisma.post.findMany()

            // async function getScore(companyId: number){
            //     const company = await prisma.company.findUnique({
            //         where: {
            //             id: companyId
            //         },
            //         select: {
            //             reviews: true
            //         }
            //     })
            //     let totalScore = 0
            //     company.reviews.map(review => totalScore += review.score)
            //     return totalScore/company.reviews.length
            // }

            let formattedPosts = await posts.map(post => {
                return ({
                    id: post.id as number,
                    companyId: post.companyId as number,
                    title: post.title as string,
                    location: post.location as string,
                    modality: post.modality as string,
                    contractType: post.contractType as string,
                    salary: post.salary as string,
                    startDate: post.startDate as string,
                    endDate: post.endDate as string,
                    tags: post.tags as object,
                    category: post.category as string,
                    // score: getScore(post.companyId)
                })
            })

            
            
            // FILTRO INPUTNAME
            inputName ? formattedPosts = formattedPosts.filter(post => post.title.toLowerCase().includes(inputName.toLowerCase())) : null
            
            // FILTRO CATEGORY
            categories.length ? formattedPosts = formattedPosts.filter(post => categories.join(" ").toLowerCase().includes(post.category.toLowerCase())) : null
    
            // FILTRO LOCATION
            location.city.length ? formattedPosts = formattedPosts.filter(post => location.city.join(" ").toLowerCase().includes(post.location.toLowerCase())) : null
    
            // FILTRO MODALITY
            let modalities = ""
            for (let key in modality) {
                if (modality[key] === true) {
                    modalities += key + " "
                }
            }
            modalities ? formattedPosts = formattedPosts.filter(post => modalities.toLowerCase().includes(post.modality.toLowerCase())) : null
            
            // FILTRO CONTRACTTYPE
            let contractTypes = ""
            for (let key in contractType) {
                if (contractType[key] === true) {
                    contractTypes += key + " "
                }
            }
            contractTypes ? formattedPosts = formattedPosts.filter(post => contractTypes.toLowerCase().includes(post.contractType.toLowerCase())) : null

            //FILTRO SCORE
            // score ? formattedPosts = formattedPosts.filter(post => post.score < score+0.5 && post.score > score-0.5) : null
            
            //FILTRO ORDER



    
            formattedPosts.length ? res.send(formattedPosts) : "No se encontraron resultados"
        }catch(error){
            res.send(error)
        }
    },
    delete: async (req:Request, res:Response) => {
        try {
            const {id} = req.params
            const deletedPost = await prisma.post.delete({
                    where: {
                        id: Number(id)
                    },
                }
            )
            res.json(deletedPost) 
        } catch(error){
            res.status(400).send(error)
        }
    },
}
