/*Ce fichier contient le modèle de données pour les utilisateurs. Il définit la structure des données et les types de données pour chaque champ.
Il utilise Mongoose pour interagir avec MongoDB et définit un schéma pour les utilisateurs.*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);