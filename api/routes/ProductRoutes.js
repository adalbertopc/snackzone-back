const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/products', ProductController.getAll);
router.post('/products', ProductController.insert);

module.exports = router;
