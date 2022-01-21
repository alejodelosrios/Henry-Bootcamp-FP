Buenas gente! Aca vopy a ir poniendo los instructivos o info que considere importante que tengan todos a mano. 


BASE DE DATOS

Para inicializar el proyecto deben hacer las siguientes acciones y ejecutar los siguientes comandos:

1 - ejecutar npm install (ubicados en /api)

2 - crear en su computadora una base de datos (con el nombre que quieran o sino le ponen el mismo que yo: 'prismaTest'))

3 - crear un archivo .env en /api y adentro colocar el siguiente fragmento:
DATABASE_URL="postgresql://postgres:bubadex1995@localhost:5432/prismaTest?schema=public"

4 - reemplazar por sus propias configuraciones en la variable DATABASE_URL

5 - ejecutar 'npx prisma generate' para asegurarse de que prisma reconoce su archivo .env 

6 - ejecutar 'npx prisma migrate dev --name init' para crear todos los modelos de la base de datos y sus relaciones

7 - abrir el archivo seed.ts ubicado dentro de la carpeta prisma y configurar cuanta informacion random quieren en la base de datos

8 - ejecutar 'npx prisma db seed' para crear todos los users, roles, companias y posts que hayan configurado

9 - ejecutar 'npm run devStart' para iniciar el servidor!

Si llegan a necesitar resetear la DB entonces ejecutan el siguiente comando:
'npx prisma migrate reset'


Con eso ya deberia andar todo, ante cualquier duda me contactan.
Espero que les sirve esto para ya poder trabajar mejor


RUTAS PARA HACER REQUESTS AL BACK

La direccion base para las peticiones es 'http://localhost:3001/api/v1', a eso luego le agregan lo que necesiten.

Ejemplo de como concatenar las rutas usando el create de role: 'http://localhost:3001/api/v1/role/create'

Las rutas son las siguientes:

/role
POST    /create             (crea un nuevo rol)                                     => recibe 1 arreglo de 1 o mas objetos 
                                                                                       con propiedad 'name'

/user
GET     /index              (devuelve todos los users)                              => no recibe parametros
GET     /:email             (devuelve un user especifico)                           => recibe email por params en el link
POST    /create             (crea un nuevo user)                                    => recibe objeto user (mirar en 
                                                                                       /prisma/seed.ts para los modelos)

/company
GET     /index              (devuelve todas las compañias)                          => no recibe parametros
GET     /:id                (devuelve una compañia especifica)                      => recibe id de la compañia por params
GET     /posts/:id          (devuelve todos los posts de una compañia)              => recibe id de la compañia por params
POST    /create             (crea una nueva compañia)                               => recibe objeto company (mirar en 
                                                                                       /prisma/seed.ts para los modelos)
POST    /createReview/:id   (crea una nueva review para una compañia especifica)    => recibe id de la compañia por params 
                                                                                       y objeto con propiedad review que adentro tiene otro objeto que posee propiedades score y description

/posts
GET     /index              (devuelve todos los posts)                              => no recibe parametros
GET     /:id                (devuelve un post especifico)                           => recibe id del post por params
POST    /create             (crea un nuevo post)                                    => recibe objeto post (mirar en 
                                                                                       /prisma/seed.ts para los modelos)

/filters
GET     /                   (devuelve todos los posts que coinciden con los filtros)=> recibe objeto filtros detallado debajo


objetoFiltros = {
    inputName:"", // -> full stack* (genérico)
    modality: "", // -> on-site/remote/hybrid (solo habrá estas 3 opciones)
    contractType: "", // -> fullTime/partTime/temporary/perHour (solo habrá estas 4 opciones)
    location:
        {
            country:"", // Perú/Argentina (genérico)
            county:"",  // Cuzco/Caba (genérico)
        },
    score: "1", // -> "1"/"2"/"3"/"4"/"5" (solo habrá estas 5 opciones)
    categories: "", // -> observar objeto categories en /prisma/seed.ts
    orderBy: "", // -> scoreHightToLow/ (por el momento solo se ha pensado 1 ordenamiento)
}


Los filtros aun no funcionan y estan en progreso

Esas son las rutas que hay gente, si necesitan cualquier otra avisen y los de back se las hacemos al toque :D