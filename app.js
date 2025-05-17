/*Ce fichier initialise l’application Express, configure les middlewares (cors, express.json) 
et monte les routes de l’application.*/

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

module.exports = app;
