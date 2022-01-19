import { prisma } from "../index"
import {Request, Response} from "express"

const ejemplo = {
    inputName:"", // -> full stack* (genérico)
    modality: "", // -> presencial/remote/hybrid (solo habrá estas 3 opciones)
    typeContract: "", // -> fullTime/partTime/temporary/perHour (solo habrá estas 4 opciones)
    Location:
        {
        country:"", // Perú/Argentina (genérico)
        state:"",  // Cuzco/Caba (genérico)
        },
    score: "1", // -> "1"/"2"/"3"/"4"/"5" (solo habrá estas 5 opciones)
    categories: "", // -> Technology/Health/Finance/Education/Humanities/Art (rubros genéricos, inicialmente hemos puesto 6, distinto a las Tags)
    orderBy: "", // -> scoreHightToLow/ (por el momento solo se ha pensado 1 ordenamiento)
}

module.exports = {
    index: async (req: Request, res: Response) => {
        const posts = await prisma.post.findMany()
        res.json(posts)
    }
}