const cors = require('cors');
const express = require('express');
const { logError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const routerControl = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

const whiteList = [
  'https://localhost:8080', 'https://google.com'
]
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

app.get('/', (req, res) => {

  res.send("Pagina principal de API REST (representational state transfer");

});


routerControl(app);
app.use(cors(options));

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Escuchando el puerto ' + port);
})
