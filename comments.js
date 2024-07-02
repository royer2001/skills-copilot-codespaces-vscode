// create web server



const express = require('express');
const app = express();
const port = 3000;

// Define una ruta para la página principal
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// El servidor escucha en el puerto especificado
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
