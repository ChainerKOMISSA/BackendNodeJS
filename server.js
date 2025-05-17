/*Ce fichier lance réellement le serveur : il importe app.js, connecte la base de données, puis démarre le serveur sur le port défini.*/

const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB(); // Connexion à MongoDB

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});