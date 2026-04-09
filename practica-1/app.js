const express = require('express');
const app = express();
const port = 3000;
const logMessage = require('./middleware/logs');

app.get('/', (req, res) => {
    res.send('Hola mundo!');
})
app.listen(port, () => {
    console.log(`Servidor esuchando en http://localhost:${port}`);
})