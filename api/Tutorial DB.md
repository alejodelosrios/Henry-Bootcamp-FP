Para inicializar el proyecto deben hacer las siguientes acciones y ejecutar los siguientes comandos:

1 - Ejecutar npm install (ubicados en /api)


2 - Crear en su computadora una base de datos (con el nombre que quieran o sino le ponen el mismo que yo: 'prismaTest'))


3 - Crear un archivo .env en /api y adentro colocar el siguiente fragmento: DATABASE_URL="postgresql://postgres:bubadex1995@localhost:5432/prismaTest?schema=public"


4 - Reemplazar por sus propias configuraciones en la variable DATABASE_URL


5 - Ejecutar 'npx prisma generate' para asegurarse de que prisma reconoce su archivo .env 


6 - Ejecutar 'npx prisma migrate dev --name init' para crear todos los modelos de la base de datos y sus relaciones


7 - Abrir el archivo seed.ts ubicado dentro de la carpeta prisma y configurar cuanta informacion random quieren en la base de datos


8 - Ejecutar 'npx prisma db seed' para crear todos los users, roles, companias y posts que hayan configurado


9 - Ejecutar 'npm run devStart' para iniciar el servidor!


Si llegan a necesitar resetear la DB entonces ejecutan el siguiente comando:
'npx prisma migrate reset'


Con eso ya deberia andar todo, ante cualquier duda me contactan.
Espero que les sirve esto para ya poder trabajar mejor