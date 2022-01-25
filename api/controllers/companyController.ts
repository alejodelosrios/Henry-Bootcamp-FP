import { prisma } from "../prisma/database"
import {Request, Response} from "express"

module.exports = {
    create: async (req: Request, res: Response) => {
        try {
            const {
                userId,
                name,
                legalName,
                stin,
                accountManagers,
                image,
                companyValues,
                mission,
                vision
            } = req.body

            if(!userId) return res.send("Debes incluir un campo 'userId' con el id del usuario al cual esta asociado esta compañia por params")
            if(!name) return res.send("Debes incluir un campo 'name', puede contener una string vacía")
            if(!legalName) return res.send("Debes incluir un campo 'legalName', puede contener una string vacía")
            if(!stin) return res.send("Debes incluir un campo 'stin' (el 'cuil' en argentina), puede contener una string vacía")
            if(!accountManagers) return res.send("Debes incluir un campo 'accountManagers', contiene un arreglo de strings, puede estar vacío")
            if(!image) return res.send("Debes incluir un campo 'image', puede contener una string vacía")
            if(!companyValues) return res.send("Debes incluir un campo 'companyValues', puede contener una string vacía")
            if(!mission) return res.send("Debes incluir un campo 'mission', puede contener una string vacía")
            if(!vision) return res.send("Debes incluir un campo 'vision', puede contener una string vacía")

            const newCompany = await prisma.company.create({
                data: {
                    userId: userId as number,
                    name: name as string,
                    legalName: legalName as string,
                    stin: stin as string,
                    accountManagers: accountManagers as string[],
                    image: image as string,
                    companyValues: companyValues as string,
                    mission: mission as string,
                    vision: vision as string
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
            if(!id) return res.send("Debes enviar el id de la compañia por params")
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
            if(!id) return res.send("Debes enviar el id de la compañia por params")
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
            if(!id) return res.send("Debes enviar el id de la compañia por params")
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
