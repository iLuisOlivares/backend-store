const express = require('express');
const { logError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const routerControl = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {

  res.send("Pagina principal de API REST (representational state transfer");

});

routerControl(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Escuchando el puerto ' + port);
})
