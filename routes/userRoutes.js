/*Ce fichier contient les routes pour l'authentification des utilisateurs.
Il utilise le routeur Express pour définir les routes nécessaires 
pour l'enregistrement et la connexion des utilisateurs.
*/

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;