const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile("index.html");
});

app.get('/main.css', (req, res) => {
    res.sendFile("main.css");
});

app.get('/index.js', (req, res) => {
    res.sendFile("index.js");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});