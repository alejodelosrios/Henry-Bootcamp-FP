import { prisma } from "../prisma/database"
const faker = require('@faker-js/faker');

const tags = ["react", "redux", "sequelize", "prisma", "javascript", "c++", "python", "UX/UI", "windows", "linux", "ubuntu", "frontend", "backend", "fullstack", "testing", "typescript", "faker", "nodejs", "css", "html", "cssmodules", "styledcomponents", "figma", "notion", "trello", "word", "office", "excel"]

const categories = ["Agriculture, Food, and Natural Resources", "Architecture and Construction", "Arts, Audio/Video Technology, and Communication", "Business and Finance", "Education and Training", "Government and Public Administration", "Health Science", "Information Technology", "Law, Public Safety, Corrections, and Security", "Marketing", "Science, Technology, Engineering, and Math"]

//CAMBIAR ESTOS VALORES SEGUN CUANTOS QUIEREN DE CADA UNO EN LA DB
let users = 50
let companies = 15
let posts = 100

//CUANDO TENGAN ESOS NUMEROS PACTADOS EJECUTEN 'npx prisma db seed'

async function main(){

    //CARGAR ROLES
    await prisma.role.createMany({
        data: [
            {
                name: "applicant"
            },
            {
                name: "recruiter"
            },
            {
                name: "admin"
            } 
        ]
    })

    //CARGAR USERS Y ADMIN

    await prisma.user.createMany({
        data: [
            {
                roleId: 3,
                firstName: "admin",
                lastName: "",
                about: faker.lorem.paragraph(),
                phoneNumber: faker.phone.phoneNumber(),
                email: "admin@test.com",
                country: faker.address.country(),
                image: faker.internet.avatar(),
                showImage: true,
                skillTags: [faker.random.arrayElement(tags), faker.random.arrayElement(tags), faker.random.arrayElement(tags)],
                experience: [
                    {
                        position: faker.random.word(),
                        company: faker.random.words(2),
                        startDate: faker.date.past(),
                        endDate: faker.date.recent(),
                        description: faker.lorem.paragraph()
                    }
                ],
                education: [
                    {
                        degree: faker.random.words(2),
                        institution: faker.random.word(),
                        startDate: faker.date.past(),
                        endDate: faker.date.recent(),
                        description: faker.lorem.paragraph()
                    }
                ],
                languages: [
                    {
                        language: faker.random.word(),
                        level: faker.random.arrayElement(['novice', 'intermediate', 'advanced', 'bilingual'])
                    }
                ]
            }
        ]
    })

    for(let i=0; i<users; i++){
        await prisma.user.createMany({
            data: [
                {
                    roleId: 1,
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    about: faker.lorem.paragraph(),
                    phoneNumber: faker.phone.phoneNumber(),
                    email: faker.internet.exampleEmail(),
                    country: faker.address.country(),
                    image: faker.internet.avatar(),
                    showImage: true,
                    skillTags: [faker.random.arrayElement(tags), faker.random.arrayElement(tags), faker.random.arrayElement(tags)],
                    experience: [
                        {
                            position: faker.random.word(),
                            company: faker.random.words(2),
                            startDate: faker.date.past(),
                            endDate: faker.date.recent(),
                            description: faker.lorem.paragraph()
                        }
                    ],
                    education: [
                        {
                            degree: faker.random.words(2),
                            institution: faker.random.word(),
                            startDate: faker.date.past(),
                            endDate: faker.date.recent(),
                            description: faker.lorem.paragraph()
                        }
                    ],
                    languages: [
                        {
                            language: faker.random.word(),
                            level: faker.random.arrayElement(['novice', 'intermediate', 'advanced', 'bilingual'])
                        }
                    ]
                }
            ]
        })
    }

    //CARGAR COMPAÑIAS
    for(let i=0; i<companies; i++){
        await prisma.company.createMany({
            data: [
                {
                    roleId: 2,
                    name: faker.random.word(),
                    legalName: faker.random.words(2),
                    email: faker.internet.exampleEmail(),
                    stin: `${faker.datatype.number({min: 10, max: 99})}-${faker.datatype.number({min: 10000000, max: 99999999})}-${faker.datatype.number({min: 0, max: 9})}`, //esto seria el cuit
                    accountManagers: [`${faker.name.firstName()} ${faker.name.lastName()}`, `${faker.name.firstName()} ${faker.name.lastName()}`],
                    image: faker.internet.avatar(),
                    companyValues: faker.random.words(3), //los valores de la compañia
                    mission: faker.lorem.paragraph(),
                    vision: faker.lorem.paragraph(),
                    reviews: [
                        {
                            description: faker.lorem.paragraph(),
                            score: 5,
                        },
                        {
                            description: faker.lorem.paragraph(),
                            score: 3,
                        },
                        {
                            description: faker.lorem.paragraph(),
                            score: 1,
                        },
                        {
                            description: faker.lorem.paragraph(),
                            score: 4,
                        }
                    ]
                }
            ]
        })
    }

    //CARGAR POSTS
    for(let i=0; i<posts; i++){
        await prisma.post.createMany({
            data: [
                {
                    companyId: faker.datatype.number({min: 1, max: 15}),
                    title: faker.random.word(),
                    description: faker.lorem.paragraph(),
                    location: `${faker.address.cityPrefix()} ${faker.address.citySuffix()}`,
                    modality: faker.random.arrayElement(["on-site", "remote", "hybrid"]),
                    contractType: faker.random.arrayElement(["fullTime", "partTime", "temporary", "perHour"]),
                    salary: `${faker.datatype.number()}usd`,
                    startDate: "",
                    endDate: "",
                    tags: [faker.random.arrayElement(tags), faker.random.arrayElement(tags), faker.random.arrayElement(tags)],
                    category: faker.random.arrayElement(categories)
                }
            ]
        })
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
