// models/User.js

const mongoose = require('mongoose');

// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
});

// Exporter le modèle
module.exports =Contact = mongoose.model('User', userSchema);
