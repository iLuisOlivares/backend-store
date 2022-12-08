const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {


  res.send("Estas son categorias");

});

module.exports = router;
