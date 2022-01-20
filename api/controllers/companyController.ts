import { prisma } from "../prisma/dataBase"
import {Request, Response} from "express"

module.exports = {
    create: async (req: Request, res: Response) => {
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
    index: async (req: Request, res: Response) => {

    },
    update: async (req: Request, res: Response) => {

    },
    delete: async (req: Request, res: Response) => {
        
    }
}