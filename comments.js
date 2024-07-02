// create web server

const http = require('http');

// Crea un servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Define el puerto y la IP
const port = 3000;
const hostname = '127.0.0.1';

// El servidor escucha en el puerto especificado
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
