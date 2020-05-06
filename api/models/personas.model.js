'use strict';

const mongoose = require('mongoose');

const schema_persona = new mongoose.Schema({
    user_type: { type: String, required: false, unique: false },
    date: { type: String, required: true, unique: false },
    tarea: { type: String, required: true, unique: false },
    user_address: { type: String, required: true, unique: false },
    user_email: { type: String, required: true, unique: false },
    user_id_type: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }


});

module.exports = mongoose.model('Persona', schema_persona, 'personas');