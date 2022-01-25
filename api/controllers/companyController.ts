import { prisma } from "../prisma/database"
import {Request, Response} from "express"
import { Review } from "@prisma/client"

module.exports = {
    create: async (req: Request, res: Response) => {
        try {
            const data = req.body
            const company = await prisma.company.create({
                data: {
                    name: data.name as string,
                    userId: data.userId as number,
                    legalName: data.legalName as string,
                    stin: data.stin as string,
                    accountManagers: data.accountManagers as string,
                    image: data.image as string,
                    companyValues: data.companyValues as string,
                    mission: data.mission as string,
                    vision: data.vision as string,
            
                }
            })
            res.json(company)
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
          }
    },
    index: async (req: Request, res: Response) => {
        try{
            const companies = await prisma.company.findMany()
            res.send(companies)
        }catch(error){
            res.send(error)
        }
    },
    companyById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const getCompanyProfile = await prisma.company.findUnique({
                where: {
                    id: Number(id),
                },
            });
            res.json(getCompanyProfile);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    createReview: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const  {description, score} = req.body;

            const newReview = await prisma.review.create({
                data: {
                  score: score,
                  description: description, 
                  companyId: Number(id)
                }
              })

            res.send(newReview);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
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
            console.log(error);
            res.status(500).send(error);
        }
    },
    update: async (req: Request, res: Response) => {

    },
    delete: async (req: Request, res: Response) => {
        try {
            const {id} = req.params

            const postsDelete = await prisma.post.deleteMany({
                where: {
                    companyId: Number(id),
                },
              }) 

            const notificationsDelete = await prisma.notification.delete({
                where: {
                    id: Number(id)
                },
            })

            const reviewsDelete = await prisma.review.delete({
                where: {
                    id: Number(id)
               },
           })

            const followersDelete = await prisma.applicant.delete({
                where: {
                    id: Number(id)
               },
           })       

            const companyDelete = await prisma.company.delete({
                where: {
                    id: Number(id)
                },
            })
            res.send(companyDelete) 
        } catch(error){
            console.log(error)
            res.status(400).send(error)
        }
    },
        
    }
