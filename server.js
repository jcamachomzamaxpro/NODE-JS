// Importacion del modulo global http
const http = require("http");


/* function requestListener(req, res) {

}
 */
// requestListener
// creacion de servidor web
// habitualmente el oyente de request es un arrow function
// Guardamos el server retornado por createServer(), en una constante
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(4000);