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
            let formattedPosts = await posts.map(post => {
                return ({
                    postId: post.postId as number,
                    companyId: post.companyId as number,
                    title: post.title as string,
                    location: post.location as string,
                    modality: post.modality as string,
                    contractType: post.contractType as string,
                    salary: post.salary as string,
                    startDate: post.startDate as string,
                    endDate: post.endDate as string,
                    tags: post.tags as object,
                    category: post.category as string
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
            modalities ? formattedPosts = formattedPosts.filter(post => modalities.includes(post.modality.toLowerCase())) : null
            
            // FILTRO CONTRACTTYPE
            let contractTypes = ""
            for (let key in contractType) {
                if (contractType[key] === true) {
                    contractTypes += key + " "
                }
            }
            contractTypes ? formattedPosts = formattedPosts.filter(post => contractTypes.toLowerCase().includes(post.contractType.toLowerCase())) : null
    
    
            formattedPosts.length ? res.send(formattedPosts) : "No se encontraron resultados"
        }catch(error){
            res.send(error)
        }
    },
    update: async (req:Request, res:Response) => {

    },
    delete: async (req:Request, res:Response) => {

    }
}


const ejemplo = {
    inputName:"", // -> full stack* (genérico)
    modality: "", // -> presencial/remote/hybrid (solo habrá estas 3 opciones)
    contractType: "", // -> fullTime/partTime/temporary/perHour (solo habrá estas 4 opciones)
    location: [
        {
            country:"", // Perú/Argentina (genérico)
            state:"",  // Cuzco/Caba (genérico)
        }
    ],
    score: "", // -> "1"/"2"/"3"/"4"/"5" (solo habrá estas 5 opciones)
    categories: "", // -> Technology/Health/Finance/Education/Humanities/Art (rubros genéricos, inicialmente hemos puesto 6, distinto a las Tags)
    orderBy: "", // -> scoreHightToLow/ (por el momento solo se ha pensado 1 ordenamiento)
}

const ejemploBRYAN = {
    inputName:"",
    categories: ["Agriculture, Food, and Natural Resources", "Business and Finance"],
    score: "3", // devolver todo lo que este hasta .5 por arriba o debajo
    orderBy: "orderScoreAsc",
    location: {
        city:["caba", "san pedro", "baradero"]
    },
    modality: {
        onSite: false,
        hybrid: false,
        remote: false,
    },
    contractType: {
        fullTime: false,
        partTime: false,
        temporality: false,
        perHour: false,
    }
}