const enviar = require('../public/scripts/send-email.js');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    contact: (req, res) => {
        res.render('contact-form');
    },
    about: (req, res) => {
        res.render('about');
    },
    projects: (req, res) => {
        res.render('projects');
    },
    sendMail: (req, res) => {
        res.render('sendmail');
    },
    congratulations: (req, res) => {
        res.render('congratulations', enviar.send(
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.message
        ));
    },
    toViewProject: (req, res) => {
        res.render('maintenance');
    }
};
