import { prisma } from "../prisma/database"
import {Request, Response} from "express"

module.exports = {
    create: async (req: Request, res: Response) => {
        try {
            const userData = req.body
            const newCompany = await prisma.company.create({
                data: {
                    userId: userData.userId as number,
                    name: userData.name as string,
                    legalName: userData.legalName as string,
                    stin: userData.stin as string,
                    accountManagers: userData.accountManagers as string[],
                    image: userData.image as string,
                    companyValues: userData.companyValues as string,
                    mission: userData.mission as string,
                    vision: userData.vision as string
                }
            })
            res.json(newCompany)
        } catch (error) {
            res.status(400).send(error);
          }
    },
    index: async (req: Request, res: Response) => {
        try{
            const companies = await prisma.company.findMany()
            res.json(companies)
        }catch(error){
            res.send(error)
        }
    },
    companyById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const company = await prisma.company.findUnique({
                where: {
                    id: Number(id),
                },
            });
            res.json(company);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    getPosts: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const company = await prisma.company.findUnique({
                where: {
                    id: Number(id),
                },
                include: {
                    posts: true,
                },
            });
            if (company) {
            res.json(company.posts);
            } else {
            res.status(400).send("Company doesn't exist");
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const {id} = req.params

            const postsDelete = await prisma.post.deleteMany({
                where: {
                  companyId: Number(id),
                },
              }); 

            const deletedCompany = await prisma.company.delete({
                    where: {
                        id: Number(id)
                    },
                }
            )
            res.json(deletedCompany) 
        } catch(error){
            res.status(400).send(error)
        }
    },
        
    }
