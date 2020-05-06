'use strict';

const express = require('express');
const router = express.Router();
const Persona = require('../models/personas.model');

router.post('/registrar-persona', (req, res) => {
    let body = req.body;
    let nueva_persona = new Persona({
        user_type: 'Usuario Normal',
        date: body.date,
        tarea: body.tarea,
        user_address: body.user_address,
        user_email: body.user_email,
        user_id_type: body.user_id_type,
        estado: 'activo'
    });

    nueva_persona.save((err, personaDB) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudo registar a la persona, ocurrió el siguiente error:',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Los datos se enviaron de forma exitosa',
                personaDB
            });
        }
    });

});

router.get('/listar-personas', (req, res) => {
    Persona.find((err, lista_personas) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudieron registrar las personas:',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Las personas se listaron adecuadamente',
                lista_personas
            });
        }
    });
});

module.exports = router;


