/*Ce fichier est un middleware d'authentification qui vérifie la présence d'un token JWT dans l'en-tête de la requête.
Il extrait le token de l'en-tête, le vérifie et, si valide, ajoute les informations de l'utilisateur à la requête avant de passer au prochain middleware ou routeur.
*/

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Non autorisé' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalide' });
  }
};