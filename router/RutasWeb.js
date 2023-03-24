const express = require('express');
const router = express.Router();

router.get('/', (solicitud, respuesta) => {
    respuesta.render('index', {titulo: "Bienvenidos a ACME"})
})

router.get('/nosotros', (solicitud, respuesta) => {
    respuesta.render('nosotros', {titulo: "Nosotros"})
})

router.get('/nuestrosservicios', (solicitud, respuesta) => {
    respuesta.render('nuestrosservicios', {titulo: "Nuestros Servicios"})
})

router.get('/catalogo', (solicitud, respuesta) => {
    respuesta.render('catalogo', {titulo: "Catalogo"})
})

router.get('/contactenos', (solicitud, respuesta) => {
    respuesta.render('contactenos', {titulo: "Contactenos"})
})

module.exports = router;