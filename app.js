const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(exoress.static('public'));

app.get("/", function(req, res) {
    res.send(path.join(__dirname+'/index.html'));
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});