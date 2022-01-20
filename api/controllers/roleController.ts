import { prisma } from "../index"
import {Request, Response} from "express"

module.exports = {
    create: async (req:Request, res:Response) => {
        try {
            const {roles} = req.body
            const allRoles = await prisma.role.createMany({
                data: roles,
            })
            res.send(allRoles)
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