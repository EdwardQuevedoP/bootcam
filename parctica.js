const fs = require("fs")
const http = require('http');

const PORT = 3000;
// request
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split("?")[0]
    const edad = req.url.split("?")[1]
    const siNo = req.url.split("?")[2]
    if(edad>=18){
        res.end(nombre+ " "+ edad+" "+"es mayor de edad")
    } else {
        res.end(nombre+" "+edad+" "+"es menor de edad")
    }
    if(siNo=="si"){
        fs.writeFileSync("prueba.txt","hola mundo")
        console.log("funciona")
    }
    console.log(nombre)
    console.log(edad)
    console.log(siNo)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});