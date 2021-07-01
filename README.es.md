<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Proyecto Individual - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## __Descripción:__

Aplicación en la cual se puede ver información de distintos países utilizando la api [restcountries](https://restcountries.eu/) y a partir de ella poder:

- Buscar y ver países
- Crear actividades turísticas
- Filtrarlos por continente y actividades asociadas
- Ordenarlos alfabéticamente y por población

### __Endpoint que se utilizó:__

- GET https://restcountries.eu/rest/v2/all

#### __Tecnologías utilizadas:__

- React
- Redux
- Express
- Sequelize - PostgreSQL

### __Frontend:__

Se desarrolló una aplicación con React/Redux que contiene las siguientes pantallas/rutas.

- __Pagina inicial__: landing con un botón para ir al home  el título de la app.
- __Ruta principal__: display de países, botones para filtro, paginación y navegación, barra de búsqueda.
- __Ruta de detalle de país__: muestra información más específica del país y las actividades asociadas a él.
- __Ruta de creación de actividad turística__: formulario para agregar actividades a países.

### __Base de datos:__

Se utilizó PostgreSQL con Sequelize y se modelaron las entidades en una hoja de papel.

### __Backend server:__

Se desarrolló un servidor en Node/Express con las siguientes rutas:

- __GET /countries__: para el display de todos los países.
- __GET /countries/{idPais}__: para la página de detalle de cada país.
- __GET /countries?name="..."__: para la barra de búsqueda.
- __POST /activity__: para guardar la actividad del formulario.

### __Formato de estilos:__

CSS Modules

### __Testing:__

- Se testeó una ruta del backend y un modelo de la base de datos.
