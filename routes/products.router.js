const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/product.schema');
const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products);
});


router.get('/filter', (req, res) => {

  res.send("esto es un filter");

});


router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error)
    }
  });

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {

    const body = req.body;
    const newProduct = await service.create(body);

    res.status(201).json({
      message: 'created',
      data: newProduct,
    });

  });

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateProduct = await service.update(id, body);
      res.json({
        message: 'updated',
        data: updateProduct,
      });
    } catch (error) {
      next(error)
    }

  });

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await service.delete(id);
    res.json({
      message: 'deleted',
      deleteProduct
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
