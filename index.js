const express = require('express');
const routerControl = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {

  res.send("Pagina principal de API REST (representational state transfer");

});

routerControl(app);

app.listen(port, () => {
  console.log('Escuchando el puerto' + port);
})
