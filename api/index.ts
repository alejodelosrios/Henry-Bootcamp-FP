import express from 'express';
import { PrismaClient } from "@prisma/client";
const carRouter = require('./routes/car')
const userRouter = require('./routes/user')

const app = express();
app.use(express.json());

export const prisma = new PrismaClient();

// app.use("/cars", carRouter)
// app.use("/users", userRouter)

//GET para crear los roles
app.post("/createRoles", async (req, res) => {
    const {roles} = req.body
    const rols = await prisma.role.createMany({
        data: roles,
    })
    res.send(rols)
})

app.post("/user", async (req, res) => {
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
})

app.post("/company", async (req, res) => {
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
})

app.post("/posts", async (req, res) => {
    try {
        const data = req.body
        const post = await prisma.post.create({
            data: {
                company: data.company,
                description: data.description,
                location: data.location,
                modality: data.modality,
                contractType: data.contractType,
                salary: data.salary,
                endDate: data.endDate,
                tags: data.tags,
                applicants: data.applicants
            }
        })
        res.json(post)
    } catch(error){
        res.send(error)
    }
})

app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001")
})