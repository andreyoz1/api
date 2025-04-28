import express from 'express';
import fs from 'fs'; //modulo de fs para leer y escribir archivos
import bodyParser from 'body-parser'; //modulo para parsear el body de las peticiones

const app = express(); //instancia de express

app.listen(3000, () => { //puerto 3000
  console.log('Server is running on port 3000'); //mensaje de inicio
});

//crear endpoints
app.get('/', 
    (req, res) => {    // ruta, peticion, respuesta
  res.send('Hello World!');
});

app.post(
    "/create-user",
    (req, res) => { //ruta, peticion, respuesta
    //todo lo que tengo que hacer para crear el usuario
    // valido el JWT
    //verifico los datos de la req
    //Envio los datos a la DB
    //Envio un mensaje de exito o error
    res.send('User created!'); //respuesta al cliente
    }
);