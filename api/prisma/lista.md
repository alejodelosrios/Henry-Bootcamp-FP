/user
    /create             ====> HECHA
    /index              ====> HECHA
    /:id                ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/applicant
    /create             ====> HECHA
    /index              ====> HECHA
    /:id                ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/company
    /create             ====> HECHA
    /index              ====> HECHA
    /:id                ====> HECHA
    /posts/:id          ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA
    /review/:companyId  ====> HECHA

/posts
    /create             ====> HECHA
    /index              ====> HECHA
    /:id                ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/experience
    /create             ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/education
    /create             ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/languages
    /create             ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/category
    /create             ====> HECHA
    /index              ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/tags
    /create             ====> HECHA
    /index              ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

/notification
    /create             ====> HECHA
    /index              ====> HECHA
    /:id                ====> HECHA
    /delete/:id         ====> HECHA
    /update/:id         ====> HECHA

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


CREAR RUTAS

para guardar las postulaciones a las cuales se subscribio un applicant
PUT     /applicant/apply
recibe objeto con applicantId y postId

para guardar las postulaciones que el applicant marco como favourites
PUT     /applicant/addfavourite
recibe objeto con applicantId y postId

para guardar las empresas que sigue un applicant
PUT     /applicant/follow
recibe objeto con applicantId y companyId

para guardar las tags que tiene un applicant en su perfil
PUT     /applicant/tags
recibe objeto con applicantId y arreglo de tags a relacionar

