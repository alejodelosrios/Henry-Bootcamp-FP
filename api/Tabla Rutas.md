La direccion base para las peticiones es 'http://localhost:3001/api/v2', a eso luego le agregan lo que necesiten.

Ejemplo de como concatenar las rutas usando el create de user: 'http://localhost:3001/api/v2/user/create'

Las rutas TERMINADAS tienen un '>' adelante
Las rutas EN PROGRESO tienen un '*' adelante
Las rutas PENDIENTES tienen un '-' adelante

Las rutas son las siguientes:

/user
>    POST    /create             (crea un nuevo user)                                        => recibe objeto user (mirar en /prisma/seed.ts para los modelos)
>    GET     /index              (devuelve todos los users)                                  => no recibe parametros
>    GET     /:id                (devuelve un user especifico)                               => recibe id por params
>    PUT     /update/:id         (actualiza la informacion de un user)                       => recibe id por params y objeto con todas las propiedades a actualizar
>    DELETE  /delete/:id         (borra un user especifico)                                  => recibe id por params


/applicant
>    POST    /create             (crea un nuevo applicant)                                   => recibe objeto applicant (mirar en /prisma/seed.ts para los modelos)
>    GET     /index              (devuelve todos los applicants)                             => no recibe parametros
>    GET     /:id                (devuelve un applicant especifico)                          => recibe id por params
>    PUT     /update/:id         (actualiza la informacion de un applicant)                  => recibe id por params y objeto con todas las propiedades a actualizar
>    DELETE  /delete/:id         (borra un applicant especifico)                             => recibe id por params


/company
>    POST    /create             (crea una nueva company)                                    => recibe objeto company (mirar en /prisma/seed.ts para los modelos)
>    GET     /index              (devuelve todas las company)                                => no recibe parametros
>    GET     /:id                (devuelve una company especifica)                           => recibe id por params
>    GET     /posts/:id          (devuelve todos los posts de una company)                   => recibe id por params
-    PUT     /update/:id         (actualiza la informacion de una company)                   => recibe id por params y objeto con todas las propiedades a actualizar
>    DELETE  /delete/:id         (borra una company especifica)                              => recibe id por params


/posts
>    POST    /create             (crea un nuevo post)                                        => recibe objeto post (mirar en /prisma/seed.ts para los modelos)
*    POST    /filter             (devuelve todos los posts que coinciden con los filtros)    => recibe objeto filtros (mirar en /prisma/seed.ts para los modelos)
>    GET     /index              (devuelve todos los posts)                                  => no recibe parametros
>    GET     /:id                (devuelve un post especifico)                               => recibe id del post por params
>    DELETE  /delete/:id         (borra un post especifico)                                  => recibe id por params


/experience
>    POST    /create/:id             (crea una nueva experience y la asocia a un applicant)      => recibe objeto experience (mirar en /prisma/seed.ts para los modelos)
>    UPDATE  /update/:id         (actualiza la informacion de un experience)                 => recibe id por params
>    DELETE  /delete/:id         (borra una experience especifica)                           => recibe id por params


/education
>    POST    /create/:id             (crea una nueva education y la asocia a un applicant)       => recibe objeto education (mirar en /prisma/seed.ts para los modelos)
>    UPDATE  /update/:id         (actualiza la informacion de un education)                  => recibe id por params
>    DELETE  /delete/:id         (borra una education especifica)                            => recibe id por params


/languages
>    POST    /create/:id             (crea una nueva languages y la asocia a un applicant)       => recibe objeto languages (mirar en /prisma/seed.ts para los modelos)
>    UPDATE  /update/:id         (actualiza la informacion de un languages)                  => recibe id por params
>    DELETE  /delete/:id         (borra una languages especifica)                            => recibe id por params


/review
-    POST    /create             (crea una nueva review para una compañia especifica)        => recibe objeto review (mirar en /prisma/seed.ts para los modelos)


/category
-    POST    /create             (crea una category)                                         => recibe objeto category (mirar en /prisma/seed.ts para los modelos)
-    GET     /index              (devuelve todas las categorias existentes)                  => no recibe parametros
-    UPDATE  /update/:id         (actualiza una category)                                    => recibe id por params
-    DELETE  /delete/:id         (borra una category especifica)                             => recibe id por params


/tags
-    POST    /create             (crea una tags)                                             => recibe objeto tags (mirar en /prisma/seed.ts para los modelos)
-    GET     /index              (devuelve todas las tags existentes)                        => no recibe parametros
-    UPDATE  /update/:id         (actualiza una tags)                                        => recibe id por params
-    DELETE  /delete/:id         (borra una tags especifica)                                 => recibe id por params


/notification
-    POST    /create             (crea una notification)                                     => recibe objeto notification (mirar en /prisma/seed.ts para los modelos)
-    GET     /index              (devuelve todas las notification existentes)                => no recibe parametros
-    GET     /:id                (devuelve una notification especifica)                      => recibe id por params
-    UPDATE  /update/:id         (actualiza una notification)                                => recibe id por params y objeto 
-    DELETE  /delete/:id         (borra una notification especifica)                         => recibe id por params con todas las propiedades a actualizar


/notification/types
-    POST    /create             (crea un notification-type)                                 => recibe objeto notification (mirar en /prisma/seed.ts para los modelos)
-    GET     /index              (devuelve todos los notification-types existentes)          => no recibe parametros
-    UPDATE  /update/:id         (actualiza un notification-type)                            => recibe id por params y objeto 
-    DELETE  /delete/:id         (borra un notification-type especifico)                     => recibe id por params con todas las propiedades a actualizar


/news
-    POST    /create             (crea una news)                                             => recibe objeto news (mirar en /prisma/seed.ts para los modelos)
-    GET     /index              (devuelve todas las news existentes)                        => no recibe parametros
-    GET     /:id                (devuelve una news especifica)                              => recibe id por params
-    UPDATE  /update/:id         (actualiza una news)                                        => recibe id por params y objeto con todas las propiedades a actualizar
-    DELETE  /delete/:id         (borra una news especifica)                                 => recibe id por params



Esas son las rutas que hay gente, si necesitan cualquier otra avisen y los de back se las hacemos al toque :D