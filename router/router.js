const express = require('express');
const router = express.Router();
const enviar = require('../public/scripts/send-email.js');

router.get('/to-view-project', (require, response) => {
    response.render('maintenance');
});

router.post('/congratulations', (require, response) => {
    response.render('congratulations', enviar.send(
        require.body.name,
        require.body.email,
        require.body.phone,
        require.body.message
    ));
});

router.get('/sendmail', (require, response) => {
    response.render('sendmail');
});

router.get('/projects', (require, response) => {
    response.render('projects');
});

router.get('/about', (require, response) => {
    response.render('about');
});

router.get('/contact-form', (require, response) => {
    response.render('contact-form');
});

router.get('/', (require, response) => {
    response.render('index');
});

module.exports = router;