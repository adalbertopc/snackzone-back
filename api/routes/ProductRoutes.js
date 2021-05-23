const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/products', ProductController.getAll);
router.post('/products', verifyToken, ProductController.insert);
router.put('/products/:id', verifyToken, ProductController.update);
router.delete('/products/:id', verifyToken, ProductController.delete);

module.exports = router;
