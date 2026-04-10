const express = require('express');
const app = express();
const port = 3000;

app.get('/respuesta-archivo', (req, res) => {
    res.status(200).sendFile(__dirname + '/Resources/example.pdf');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})