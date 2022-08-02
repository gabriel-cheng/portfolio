const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Rotas
(function() {
    app.get('/projects', (require, response) => {
        response.render('projects');
    });

    app.get('/about', (require, response) => {
        response.render('about');
    });

    app.get('/work', (require, response) => {
        response.render('work');
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