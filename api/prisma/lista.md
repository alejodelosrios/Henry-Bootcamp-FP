/user
    /create ====> HECHA
    /index ====> HECHA
    /:id  
    /delete/:id ====> HECHA
    /update/:id ====> HECHA

/applicant
    /create ====> HECHA
    /index ====> HECHA
    /:id ====> HECHA
    /delete/:id ====> HECHA
    /update/:id ====> HECHA

/company
    /create ====> HECHA
    /index ====> HECHA
    /:id ====> HECHA
    /posts/:id ====> HECHA
    /delete/:id ====> HECHA
    /update/:id

/posts
    /create ====> HECHA
    /index ====> HECHA
    /:id ====> HECHA
    /delete/:id ====> HECHA
    /update/:id

/experience
    /create
    /delete/:id
    /update/:id

/education
    /create
    /delete/:id
    /update/:id

/languages
    /create
    /delete/:id
    /update/:id

/review
    /create

/category
    /create
    /index  
    /delete/:id
    /update/:id

/tags
    /create
    /index  
    /delete/:id
    /update/:id

/notification
    /create
    /index  
    /:id?  
    /delete/:id
    /update/:id

/notification/types
    /create
    /index
    /delete/:id
    /update/:id

/news
    /create
    /index  
    /:id  
    /delete/:id
    /update/:id





createReview: async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { review } = req.body;
        const updatedCompany = await prisma.company.update({
            where: {
                id: Number(id),
            },
            data: {
                reviews: {
                    push: review as object,
                },
            },
        });
        res.send(updatedCompany.reviews);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
},



LO QUE LLEGA A FILTROS

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


ver json web tokens

que la ruta user cree tambien applicant o company segun rol provisto



CREAR RUTAS

para guardar las postulaciones a las cuales se subscribio un applicant

para guardar las postulaciones que el applicant marco como favourites

para guardar las empresas que sigue un applicant

para guardar los followers que tiene una empresa
