import { prisma } from "../prisma/database"
const faker = require('@faker-js/faker');

const tags = ["react", "redux", "sequelize", "prisma", "javascript", "c++", "python", "UX/UI", "windows", "linux", "ubuntu", "frontend", "backend", "fullstack", "testing", "typescript", "faker", "nodejs", "css", "html", "cssmodules", "styledcomponents", "figma", "notion", "trello", "word", "office", "excel"]

const categories = ["Agriculture, Food, and Natural Resources", "Architecture and Construction", "Arts, Audio/Video Technology, and Communication", "Business and Finance", "Education and Training", "Government and Public Administration", "Health Science", "Information Technology", "Law, Public Safety, Corrections, and Security", "Marketing", "Science, Technology, Engineering, and Math"]

//CAMBIAR ESTOS VALORES SEGUN CUANTOS QUIEREN DE CADA UNO EN LA DB
let admin = 1
let applicants = 50
let companies = 15
let users = admin + applicants + companies
let posts = 100

//CUANDO TENGAN ESOS NUMEROS PACTADOS EJECUTEN 'npx prisma db seed'

async function main(){


    //CREAR ADMIN
    await prisma.user.createMany({
        data: [
            {
            email: "admin@test.com",
            password: "password",
            role: "admin"
            }
        ],
        skipDuplicates: true
    })
    //agregarle el profile
    await prisma.applicant.createMany({
        data: {
            userId: 1,
            firstName: "Admin",
            lastName: "of Admins",
            about: "I'm the Alpha and the Omega, Bruce, I'm God.",
            phoneNumber: "42069",
            country: "Tierra de Jugosos",
            image: "https://static.s123-cdn-static-d.com/uploads/4720894/normal_6034cb6f1d192.jpg",
            showImage: true
        },
        skipDuplicates: true
    })

    
    //CREAR COMPANIES
    for(let i=0; i<companies; i++){
        await prisma.user.createMany({
            data: [
                {
                email: faker.faker.internet.exampleEmail(),
                password: faker.faker.random.alphaNumeric(15),
                role: "company"
                }
            ],
            skipDuplicates: true
        })
    }
    //agregarles el profile
    for(let i=admin+1; i<users-applicants; i++){
        await prisma.company.createMany({
            data: [
                {
                    userId: i,
                    name: faker.faker.random.word(),
                    legalName: faker.faker.random.words(2),
                    stin: `${faker.faker.datatype.number({min: 10, max: 99})}-${faker.faker.datatype.number({min: 10000000, max: 99999999})}-${faker.faker.datatype.number({min: 0, max: 9})}`, //esto seria el cuit
                    accountManagers: [`${faker.faker.name.firstName()} ${faker.faker.name.lastName()}`, `${faker.faker.name.firstName()} ${faker.faker.name.lastName()}`],
                    image: faker.faker.internet.avatar(),
                    companyValues: faker.faker.random.words(3),
                    mission: faker.faker.lorem.paragraph(),
                    vision: faker.faker.lorem.paragraph()
                }
            ],
            skipDuplicates: true
        })
    }

    //agregarles las reviews
    for(let i=1; i<companies; i++){
        await prisma.review.createMany({
            data: [
                {
                    description: faker.faker.lorem.paragraph(),
                    score: Math.floor(Math.random()*5)+1,
                    companyId: i
                },
                {
                    description: faker.faker.lorem.paragraph(),
                    score: Math.floor(Math.random()*5)+1,
                    companyId: i
                },
                {
                    description: faker.faker.lorem.paragraph(),
                    score: Math.floor(Math.random()*5)+1,
                    companyId: i
                },
                {
                    description: faker.faker.lorem.paragraph(),
                    score: Math.floor(Math.random()*5)+1,
                    companyId: i
                },
                {
                    description: faker.faker.lorem.paragraph(),
                    score: Math.floor(Math.random()*5)+1,
                    companyId: i
                }
            ]
        })
    }


    //CREAR APPLICANTS
    for(let i=0; i<applicants; i++){
        await prisma.user.createMany({
            data: [
                {
                    email: faker.faker.internet.exampleEmail(),
                    password: faker.faker.random.alphaNumeric(15),
                    role: "applicant"
                }
            ],
            skipDuplicates:true
        })
    }      
    //agregarles el profile
    for(let i=admin+companies+1; i<users; i++){
        await prisma.applicant.createMany({
            data: [
                {
                    userId: i,
                    firstName: faker.faker.name.firstName(),
                    lastName: faker.faker.name.lastName(),
                    about: faker.faker.lorem.paragraph(),
                    phoneNumber: faker.faker.phone.phoneNumber(),
                    country: faker.faker.address.country(),
                    image: faker.faker.internet.avatar(),
                    showImage: true
                }
            ],
            skipDuplicates: true
        })
    }
    
    for(let i=1; i<applicants; i++){

        //agregarles las experiences        
        await prisma.experience.createMany({
            data: [
                {
                    position: faker.faker.random.word(),
                    company: faker.faker.random.words(2),
                    startDate: faker.faker.date.past(),
                    endDate: faker.faker.date.recent(),
                    description: faker.faker.lorem.paragraph(),
                    applicantId: i
                },
                {
                    position: faker.faker.random.word(),
                    company: faker.faker.random.words(2),
                    startDate: faker.faker.date.past(),
                    endDate: faker.faker.date.recent(),
                    description: faker.faker.lorem.paragraph(),
                    applicantId: i
                }
            ]
        })

        //agregarles las educations
        await prisma.education.createMany({
            data: [
                {
                    degree: faker.faker.random.words(2),
                    institution: faker.faker.random.word(),
                    startDate: faker.faker.date.past(),
                    endDate: faker.faker.date.recent(),
                    description: faker.faker.lorem.paragraph(),
                    applicantId: i
                },
                {
                    degree: faker.faker.random.words(2),
                    institution: faker.faker.random.word(),
                    startDate: faker.faker.date.past(),
                    endDate: faker.faker.date.recent(),
                    description: faker.faker.lorem.paragraph(),
                    applicantId: i
                }
            ]
        })

        //agregarles los lenguajes
        await prisma.language.createMany({
            data: [
                {
                    language: faker.faker.random.word(),
                    level: faker.faker.random.arrayElement(['novice', 'intermediate', 'advanced', 'bilingual']),
                    applicantId: i
                },
                {
                    language: faker.faker.random.word(),
                    level: faker.faker.random.arrayElement(['novice', 'intermediate', 'advanced', 'bilingual']),
                    applicantId: i
                }
            ]
        })
    }

    //CARGAR POSTS

    for(let i=0; i<posts; i++){
        await prisma.post.createMany({
            data: [
                {
                    companyId: 1+Math.floor(Math.random()*(companies-1)),
                    title: faker.faker.random.word(),
                    description: faker.faker.lorem.paragraph(),
                    location: `${faker.faker.address.cityPrefix()} ${faker.faker.address.citySuffix()}`,
                    modality: faker.faker.random.arrayElement(["onSite", "remote", "hybrid"]),
                    contractType: faker.faker.random.arrayElement(["fullTime", "partTime", "temporary", "perHour"]),
                    salary: `${faker.faker.datatype.number()}usd`,
                    startDate: "",
                    endDate: "",
                    tags: [faker.faker.random.arrayElement(tags), faker.faker.random.arrayElement(tags), faker.faker.random.arrayElement(tags)],
                    category: faker.faker.random.arrayElement(categories)
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
