const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = require('./router/router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Rotas
(function() {
    app.get('/to-view-project', router);

    app.post('/congratulations', router);

    app.get('/sendmail', router);

    app.get('/projects', router);

    app.get('/about', router);

    app.get('/contact-form', router);

    app.get('/', router);
})();

// Portas
(function() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Access: http://localhost:${port}`);
    });
})();