'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');


//Rotas de Crud
router.post('/', controller.post );

router.put('/:id', controller.put);

router.delete('/', controller.delete);

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tags', controller.getByTag);
//

module.exports = router;