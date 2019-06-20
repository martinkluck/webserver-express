const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type': 'application/json'});
    // res.write('Hola Mundo');
    let salida = {
        nombre: 'Martin',
        edad: 28,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuxhando en localhost:8080');