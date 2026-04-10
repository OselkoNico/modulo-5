const express = require('express');
const app = express();
const port = 3000;
const logMessage = require('./middleware/logs');

const dataExample = [
    {team: 'Real Madrid', city: 'Madrid'},
    {team: 'FC Barcelona', city: 'Barcelona'},
    {team: 'Real Betis', city: 'Sevilla'},
]

app.get('/respuesta-json', (req, res) => {
    res.status(200).json(dataExample)
})
app.listen(port, () => {
    console.log(`Servidor esuchando en http://localhost:${port}`);
})