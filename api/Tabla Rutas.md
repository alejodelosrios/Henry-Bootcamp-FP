La direccion base para las peticiones es 'http://localhost:3001/api/v2', a eso luego le agregan lo que necesiten.

Ejemplo de como concatenar las rutas usando el create de user: 'http://localhost:3001/api/v2/user/create'

Las rutas TERMINADAS tienen un '>' adelante
Las rutas EN PROGRESO tienen un '*' adelante
Las rutas PENDIENTES tienen un '-' adelante

Las rutas son las siguientes:

/user

>   POST    /create                 (crea un nuevo user)                                      => recibe objeto user (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todos los users)                                => no recibe parametros
>   GET     /:email                 (devuelve un user especifico)                             => recibe email por params
>   PUT     /update/:userId         (actualiza la informacion de un user)                     => recibe userId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:userId         (borra un user especifico)                                => recibe userId por params


/applicant

>   POST    /create/:userId         (crea un nuevo applicant)                                 => recibe userId por params y objeto applicant (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todos los applicants)                           => no recibe parametros
>   GET     /:applicantId           (devuelve un applicant especifico con TODA su info)       => recibe applicantId por params
>   PUT     /apply                  (postula a un applicant para un post)                     => recibe objeto con applicantId y postId
>   PUT     /favorite		        (añade o elimina un post a los favoritos de un applicant) => recibe objeto con applicantId y postId
>   PUT     /follow                 (añade una compañia a los followed de un applicant)       => recibe objeto con applicantId y companyId
>   PUT     /tags                   (añade tags al perfil de un applicant)                    => recibe objeto con applicantId y arreglo de tags a relacionar
>   PUT     /update/:applicantId    (actualiza la informacion de un applicant)                => recibe applicantId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:applicantId    (borra un applicant especifico)                           => recibe applicantId por params


/company

>   POST    /create/:userId         (crea una nueva company)                                  => recibe userId por params y objeto company (mirar en /prisma/seed.ts para los modelos)
>   POST    /review/:companyId      (crea una nueva review para una compañia especifica)      => recibe companyId por params y objeto review (mirar en /prisma/seed.ts para los modelos) 
>   GET     /index                  (devuelve todas las company)                              => no recibe parametros
>   GET     /:companyId             (devuelve una company especifica con TODA su info)        => recibe companyId por params
>   GET     /posts/:companyId       (devuelve todos los posts de una company)                 => recibe companyId por params
>   PUT     /application            (actualiza el estado de un aplicante de una postulacion)  => recibe objeto con applicantId, postId y newStatus
>   PUT     /add-image/:companyId   (agrega imagenes al carrusel de una compañia)             => recibe companyId por params y objeto image (mirar en /prisma/seed.ts para los modelos)
>   PUT     /update/:companyId      (actualiza la informacion de una company)                 => recibe companyId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:companyId      (borra una company especifica)                            => recibe companyId por params


/posts

>   POST    /create/:companyId      (crea un nuevo post)                                      => recibe companyId por params y objeto post (mirar en /prisma/seed.ts para los modelos)
*   POST    /filter                 (devuelve todos los posts que coinciden con los filtros)  => recibe objeto filtros (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todos los posts)                                => no recibe parametros
>   GET     /:postId                (devuelve un post especifico con todos sus applicants)    => recibe postId por params
*   PUT     /update/:postId         (actualiza la endDate de un post especifico)              => recibe postId por params y objeto con propiedad endDate
>   DELETE  /delete/:postId         (borra un post especifico)                                => recibe postId por params


/experience

>   POST    /create/:applicantId    (crea una nueva experience y la asocia a un applicant)    => recibe applicantId por params y objeto experience (mirar en /prisma/seed.ts para los modelos)
>   PUT     /update/:experienceId   (actualiza la informacion de un experience)               => recibe experienceId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:experienceId   (borra una experience especifica)                         => recibe experienceId por params


/education

>   POST    /create/:applicantId    (crea una nueva education y la asocia a un applicant)     => recibe applicantId por params y objeto education (mirar en /prisma/seed.ts para los modelos)
>   PUT     /update/:educationId    (actualiza la informacion de un education)                => recibe educationId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:educationId    (borra una education especifica)                          => recibe educationId por params


/language

>   POST    /create/:applicantId    (crea una nueva languages y la asocia a un applicant)     => recibe applicantId por params objeto languages (mirar en /prisma/seed.ts para los modelos)
>   PUT     /update/:languageId     (actualiza la informacion de un languages)                => recibe languageId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:languageId     (borra una languages especifica)                          => recibe languageId por params


/category

>   POST    /create                 (crea una category)                                       => recibe objeto category (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todas las categorias existentes)                => no recibe parametros
>   PUT     /update/:categoryId     (actualiza una category)                                  => recibe categoryId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:categoryId     (borra una category especifica)                           => recibe categoryId por params


/tag

>   POST    /create                 (crea una tags)                                           => recibe objeto tags (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todas las tags existentes)                      => no recibe parametros
>   GET     /:tagId                 (devuelve una tag especifica)                             => recibe el tagId por params
>   PUT     /update/:tagId          (actualiza una tags)                                      => recibe id por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:tagId          (borra una tags especifica)                               => recibe id por params


/notification

>   POST    /create                 (crea una notification)                                   => recibe objeto notification (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todas las notification existentes)              => no recibe parametros
>   GET     /:notificationId        (devuelve una notification especifica)                    => recibe notificationId por params
>   PUT     /update/:notificationId (actualiza una notification)                              => recibe notificationId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:notificationId (borra una notification especifica)                       => recibe notificationId por params


<!-- /notification/types

>   POST    /create                 (crea un notification-type)                               => recibe objeto notification (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todos los notification-types existentes)        => no recibe parametros
>   PUT     /update/:typeId         (actualiza un notification-type)                          => recibe id por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:typeId         (borra un notification-type especifico)                   => recibe id por params  -->


/news

>   POST    /create                 (crea una news)                                           => recibe objeto news (mirar en /prisma/seed.ts para los modelos)
>   GET     /index                  (devuelve todas las news existentes)                      => no recibe parametros
>   GET     /:newsId                (devuelve una news especifica)                            => recibe newsId por params
>   PUT     /update/:newsId         (actualiza una news)                                      => recibe newsId por params y objeto con todas las propiedades a actualizar
>   DELETE  /delete/:newsId         (borra una news especifica)                               => recibe newsId por params


Esas son las rutas que hay gente, si necesitan cualquier otra avisen y los de back se las hacemos al toque :D
