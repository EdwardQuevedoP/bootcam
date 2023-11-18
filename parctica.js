
const http = require('http');
const {Pool} = require("pg")

const PORT = 3001;
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
  )
`;

// let users = [
//   { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
//   { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
//   { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" }
// ];

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  
  // Manejar solo solicitudes GET
  if (req.method === 'GET') {
    const pool = new Pool({
      user: 'postgres',  // Replace with your PostgreSQL username
      host: 'localhost', // Replace with your PostgreSQL host
      database: 'midatabase', // Replace with your PostgreSQL database name
      password: 'micontrasena', // Replace with your PostgreSQL password
      port: 5432, // Replace with your PostgreSQL port if different
    });
    let id = req.url.split("?")[1];
    let name = req.url.split("?")[2];
    let email = req.url.split("?")[3];
    console.log(id)
   console.log(name)
   console.log(email)

    // const user = users.find(user => user.name === name);
    const insertar = `INSERT INTO users (id, username, email) VALUES(${id}, '${name}', '${email}')`
    const modificar = `UPDATE users SET username = '${name}' WHERE id = ${id} `
    const eliminar = `DELETE FROM users WHERE id=${id}`
    

    pool.query(traertodo,(err, res) => {
      if (err) {      
      console.error('Error creating table:', err);
      } else {
        console.log('RESPUESTA')
        console.log(res.rows);
      }
      // Close the pool to end the connection 
        
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('se han guardado tus datos perr@');
    // if (user) {
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   res.end(JSON.stringify(user));
    // } else {
    //   res.writeHead(404, { 'Content-Type': 'text/plain' });
    //   res.end('User not found\n');
    // }
  }
//   } else {
//     // Responder a otras solicitudes con un mensaje de error
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found\n');
//   }
});       

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Create a new Pool instance with your PostgreSQL connection details
// const pool = new Pool({
//   user: 'postgres',  // Replace with your PostgreSQL username
//   host: 'localhost', // Replace with your PostgreSQL host
//   database: 'basemiaytuya', // Replace with your PostgreSQL database name
//   password: 'clave1', // Replace with your PostgreSQL password
//   port: 5432, // Replace with your PostgreSQL port if different
// });

// Example query to create a table

const query = 'SELECT 122+5 AS noooooooo'
const traer1 = 'SELECT *FROM users WHERE id>=4'
const traer2 = "SELECT *FROM users WHERE username='joaquin'"
const traer3= "SELECT *FROM users WHERE email='mrbarbas@deboravenados.com'"
const traer4 = 'SELECT *FROM users WHERE id<=4'
const traertodo = 'SELECT *FROM users'
const eliminar = "DELETE FROM users"
const modificar = "UPDATE users SET username = 'ELCACAS' WHERE id = 6 "
const insertar = "INSERT INTO users (id, username, email) VALUES(6,'robledo', 'elchagocome@galletas.com'),(7,'elvikingo', 'mrbarbas@deboravenados.com'),(1,'Tango', 'tango@deboravenados.com'),(2,'carlitos', 'carlos@deboravenados.com')"


// Execute the query to create the table


   /*pool.query(traertodo,(err, res) => {
           if (err) {      
     console.error('Error creating table:', err);
           } else {
             console.log(res.rows);
           }
           // Close the pool to end the connection
           pool.end();
   });*/