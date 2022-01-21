Buenas gente! Para inicializar el proyecto deben hacer las siguientes acciones y ejecutar los siguientes comandos:

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


Con eso ya deberia andar todo, ante cualquier duda me contactan.
Espero que les sirve esto para ya poder trabajar mejor