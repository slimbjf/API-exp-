// server.js

// Importer les modules nécessaires
const express = require('express');
require('dotenv').config();

// Initialiser l'application Express
const app = express();

const connectDB = require('./config/connectDB')
connectDB()

// Middleware pour analyser les requêtes JSON
app.use(express.json());

app.use('/api/user', require('./routes/contact'))

// Port
const PORT = process.env.PORT || 5000;

// Routes (elles seront définies plus tard)
app.get('/', (req, res) => res.send('API is running!'));

// Lancer le serveur
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
