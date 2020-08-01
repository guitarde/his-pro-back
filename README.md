# Proyecto final RS-F
Este repositorio consta con el Back-end del proyecto final realizado para el Bootcamp impartido por Geekhubs para Ribera Salud. 

Se trata de una aplicación pensada para el sector sanitario con la que se pueden gestionar una serie de usuarios de tipo pacientes o profesionales. Incluye las operaciones básicas de un CRUD, y poder borrar todos los profesionales de tipo médicos.

## Tecnologías
El proyecto ha sido realizado con [NestJS](https://docs.nestjs.com/cli/overview).

Para la persistencia de los datos se uso [MongoDB Cloud](https://cloud.mongodb.com/)

### Pre-requisitos
Para la correcta ejecución del proyecto en local es necesario tener instalado **Node.js**, el cual se puede obtener desde su [página oficial](https://nodejs.org/es/).

Se necesita la parte frontend [HIS-PRO](https://github.com/guitarde/his-pro.git) y en el cual se encuentra la guía correspondiente

El último requisito para poder ejecutar el proyecto es instalar los paquetes necesarios en el repositorio descargado o clonado. Para ello, desde la carpeta donde se encuentra, se ejecuta:

```
npm install
```

### Ejecución

La base de datos está de manera remota, gracias al servicio de MongoDB Cloud

Para ejecutar el proyecto se utiliza con el comando de **angular**: 
```
# watch mode
$ npm run start:dev
```

Una vez finalizado el paso anterior y haber levantado la parte Front, ya está listo para ser consultado en la dirección  `http://localhost:4200/`.
