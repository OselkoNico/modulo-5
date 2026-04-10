const express = require('express');
const app = express();
const port = 3000;
const logMessage = require('./middleware/logs');

app.use((req, res, next) => {
    res.set({'Set-Cookie': 'Test cookie'});
    next();
})

app.get('/otra-ruta', (req, res) => {
    res.status(200).send('Mensaje desde otra ruta');
})

app.get('/:id', (req, res) => {
    if(req.params.id !== 'abc'){
        return res.status(401).send('Acceso no autorizado.');
    }
    res.status(200).send('Hola mundo!');
})
app.listen(port, () => {
    console.log(`Servidor esuchando en http://localhost:${port}`);
})