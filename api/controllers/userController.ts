import { prisma } from "../prisma/database"
import {Request, Response} from "express"

module.exports = {
    create: async (req:Request, res:Response) => {
        try {
            const data = req.body
            const user = await prisma.user.create({
                data: {
                    roleId: 1,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    about: data.about,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    country: data.country,
                    image: data.image,
                    showImage: data.showImage,
                    skillTags: data.skillTags,
                    experience: data.experience,
                    education: data.education,
                    languages: data.languages,
                    postulations: data.postulations,
                    followed: data.followed
                }
            })
            res.json(user)
        } catch(error){
            res.send(error)
        }
    },
    index: async (req:Request, res:Response) => {
        try {
            const {email} = req.params
            const userProfile = await prisma.user.findFirst({
                    where:{
                        email: email,
                    },
                }
            )
            res.json(userProfile)
        } catch(error){
            console.log(error)
            res.status(400).send(error)
        }

    },

    update: async (req:Request, res:Response) => {

    },
    delete: async (req:Request, res:Response) => {

    }
}

