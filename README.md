# Star Wars Challenge

![cover](/client/public/cover_readme.png)

Puedes acceder al sitio deployado en el siguiente: [Link](https://starwarschallenge-front.onrender.com/)

## Autor

- [Elam Cano](https://www.linkedin.com/in/elam-cano-bb0419239/)

## Tecnologías utilizadas

NextJs, TypeScript, TailWindCSS, Express, MongoDB, Mongo Compass, Mongo Atlas, Render, Axios, Cors, Dotenv, TS-Node, Nodemon.

---

## Swapi

Se utilizó la API de [SWAPI](https://swapi.dev/) para recopilar y presentar la información detallada sobre películas, personajes, naves estelares y planetas, proporcionando una experiencia completa de exploración de datos.

## Estructura del proyecto

En cuanto a la estructura del proyecto, se implementó un monorepositorio que organiza la aplicación en dos secciones principales: un cliente desarrollado con Next.js ubicado en la carpeta `client` y un servidor construido con Node.js y Express en la carpeta `server`.
La página funciona como una SPA de estilo "scroll de sábana", donde la barra de navegación permite acceder a las distintas secciones. Al hacer clic en cualquier card, el usuario es redirigido a una ruta dinámica que carga una nueva página detallada para el elemento seleccionado.

## Base de Datos

En primer lugar, se utilizó `MongoDB` junto con Mongoose y MongoDB Compass para gestionar y visualizar el almacenamiento de datos de forma local. Posteriormente, se migró la base de datos a la nube, utilizando MongoDB Atlas con infraestructura de hosting en AWS para mejorar la escalabilidad y el acceso remoto de los datos.

## Endpoints (People, Starships, Films, Planets)

Para la creación de los cuatro endpoints requeridos, se utilizó Express, implementado en TypeScript junto con los compiladores necesarios para su ejecución en un entorno Node.js. Además de los endpoints que obtienen todos los registros, como en el caso de los personajes, se desarrollaron endpoints adicionales para acceder a los detalles individuales de cada recurso.

## Paginado y Search

Se implementó un sistema de paginación personalizado que muestra, de forma predeterminada, 8 tarjetas. Si el número de tarjetas supera esta cantidad, el paginador se activa, indicando la longitud total de los recursos disponibles. Además, se desarrolló una funcionalidad de búsqueda para filtrar por nombre, la cual funciona en sincronía con la paginación sin generar conflictos.

## Diseño y responsive

Aunque el diseño no se desarrolló de forma exhaustiva en los detalles, la página es completamente responsive e incorpora elementos de color y diseño personalizados para cada sección.

## Deploy

Como se mencionó previamente, la base de datos se alojó en MongoDB Atlas. Para el despliegue tanto del servidor backend como del cliente frontend, se utilizó la plataforma Render.
