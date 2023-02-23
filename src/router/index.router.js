const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

// router.get('/to-view-project', controller.toViewProject);

// router.post('/congratulations', controller.congratulations);

// router.get('/sendmail', controller.sendMail);

// router.get('/projects', controller.projects);

// router.get('/about', controller.about);

// router.get('/contact-form', controller.contact);

router.get('/', controller.index);

module.exports = router;
