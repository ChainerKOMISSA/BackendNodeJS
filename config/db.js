const mongoose = require('mongoose');

/*
  Ce fichier est responsable de la connexion à la base de données MongoDB.
  Il utilise Mongoose pour établir la connexion et gère les erreurs potentielles.

  MONGO_URI est défini dans le fichier .env à la racine du projet. 
  Il te permet de te connecter à ta base de données MongoDB.

  Tu peux avoir ton lien de connexion MongoDB en te rendant sur le site de MongoDB Atlas ou en 
  utilisant une instance locale de MongoDB.
*/
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connecté à MongoDB');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB :', err.message);
    process.exit(1); // Arrête le serveur si la connexion échoue
  }
};

module.exports = connectDB;
