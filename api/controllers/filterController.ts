import { prisma } from "../prisma/dataBase"
import {Request, Response} from "express"

const ejemplo = {
    inputName:"", // -> full stack* (genérico)
    modality: "", // -> presencial/remote/hybrid (solo habrá estas 3 opciones)
    contractType: "", // -> fullTime/partTime/temporary/perHour (solo habrá estas 4 opciones)
    location:
        {
        country:"", // Perú/Argentina (genérico)
        county:"",  // Cuzco/Caba (genérico)
        },
    score: "1", // -> "1"/"2"/"3"/"4"/"5" (solo habrá estas 5 opciones)
    categories: "", // -> Technology/Health/Finance/Education/Humanities/Art (rubros genéricos, inicialmente hemos puesto 6, distinto a las Tags)
    orderBy: "", // -> scoreHightToLow/ (por el momento solo se ha pensado 1 ordenamiento)
}

module.exports = {
    index: async (req: Request, res: Response) => {
        const { 
            inputName, 
            modality, 
            typeContract, 
            location, 
            categories, 
            orderBy,
            score 
        } = req.body
        let posts = await prisma.post.findMany()
        
        
        inputName ? posts = posts.filter(post => post.description.toLowerCase().includes(inputName.toLowerCase())) : null

        modality ? posts = posts.filter(post => post.modality.toLowerCase().includes(modality.toLowerCase())) : null

        typeContract ? posts = posts.filter(post => post.contractType.toLowerCase().includes(typeContract.toLowerCase())) : null
        

        categories ? posts = posts.filter(post => post.tags.includes(categories.toLowerCase())) : null




        res.json(posts)
    }
}