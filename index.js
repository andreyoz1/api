import express from 'express';

const app = express(); //instancia de express

app.listen(3000, () => { //puerto 3000
  console.log('Server is running on port 3000'); //mensaje de inicio
});

//crear endpoints
app.get('/', 
    (req, res) => {    // ruta, peticion, respuesta
  res.send('Hello World!');
});