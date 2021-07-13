const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001
const express = require('express')
const path = require('path')


if(process.env.NODE_ENV === 'production'){
  //serve static content
  server.use(express.static(path.join(__dirname, 'client/build')))
}

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
