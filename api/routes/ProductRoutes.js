const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/products', ProductController.getAll);
router.post('/products', ProductController.insert);
router.put('/products', ProductController.update);
router.delete('/products', ProductController.delete);

module.exports = router;
