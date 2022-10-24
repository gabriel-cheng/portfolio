const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const enviar = require('./public/scripts/send-email.js');
const bodyParser = require('body-parser');

const dado = {
    email: '',
    telefone: '',
    mensagem: ''
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Rotas
(function() {
    app.get('/to-view-project', (require, response) => {
        response.render('maintenance');
    });

    app.post('/congratulations', (require, response) => {
        response.render('congratulations', enviar.send(
            require.body.name,
            require.body.email,
            require.body.phone,
            require.body.message
        ));
    });

    app.get('/sendmail', (require, response) => {
        response.render('sendmail');
    });

    app.get('/projects', (require, response) => {
        response.render('projects');
    });

    app.get('/about', (require, response) => {
        response.render('about');
    });

    app.get('/contact-form', (require, response) => {
        response.render('contact-form');
    });

    app.get('/', (require, response) => {
        response.render('index');
    });
})();

// Portas
(function() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Access: http://localhost:${port}`);
    });
})();