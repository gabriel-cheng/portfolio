const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const router = require('./router/index.router');
const path = require('path');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(router);

module.exports = app;
