# 📦 Backend Node.js API avec Express & MongoDB
Ce projet est une API RESTful construite avec **Node.js**, **Express.js** et **MongoDB**, utilisant **Mongoose** pour la gestion de la base de données. Il fournit une structure modulaire, propre et extensible adaptée à des projets en production.

## 🚀 Fonctionnalités

- Authentification par JWT
- Gestion des utilisateurs (inscription, connexion)
- Architecture MVC modulaire
- Sécurité de base (hash du mot de passe avec bcrypt)
- Middleware d’authentification
- Support JSON & CORS

## 🧾 Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)


## 📦 Installation

```bash
# 1. Cloner le projet
git clone https://github.com/ton-utilisateur/ton-projet.git

# 2. Accéder au dossier
cd ton-projet/backend

# 3. Installer les dépendances
npm install

# 4. Créer un fichier .env
touch .env
````

## 🛠️ Configuration du fichier `.env`

- MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/mydb
- JWT_SECRET=tonSuperSecretJWT
- PORT=5000

## 🚀Lancer le serveur
- Commande pour lancer le serveur : ```npm run dev```
- Le serveur tournera sur :  http://localhost:5000


## 📝 Licence

Ce projet est open source. Tu peux l’utiliser, le modifier et le distribuer librement.


## 👨‍💻 Auteure

Développé avec Essi Chainer KOMISSA ZOTSU

N'hésite pas à ⭐ le dépôt si ce projet t'a aidé !
