<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

<a href="https://github.com/rodriguezjulianf/Countries-Single-Page-Application/blob/main/README.es.md">Español</a>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## __Description:__

Single Page Application where you can see information for every country, using the API [restcountries](https://restcountries.eu/) it can do:

- Search and see countries
- Create touristic activities
- Filter by continent and associated activities
- Order alphabetically and by population

### __Endpoint used:__

- GET https://restcountries.eu/rest/v2/all

#### __Tech used:__

- React
- Redux
- Express
- Sequelize - PostgreSQL

### __Frontend:__

Developed with React/Redux, including these routes:

- __Landing page__: landing with home button and page title.
- __Home page__: countries display, buttons for filtering, sorting and navigating, search bar.
- __Country detail page__: displays specific country information and associated activities.
- __Activity creation page__: form where you can create touristic activities.

### __Database:__

PostgreSQL was used for tables and Sequelize for model creation.

### __Backend server:__

Server developed with Node/Express including the following routes:

- __GET /countries__: for displaying all the countries.
- __GET /countries/{idPais}__: for fetching a single country data.
- __GET /countries?name="..."__: for the search bar.
- __POST /activity__: for saving the form data.

### __Styling:__

CSS Modules were used.

### __Testing:__

- One backend route tested and one sequelize model tested.
