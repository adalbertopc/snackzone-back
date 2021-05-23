const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/orders', verifyToken, OrderController.getAll);
router.post('/orders', OrderController.insert);
router.put('/orders/:id', verifyToken, OrderController.update);
router.delete('/orders/:id', verifyToken, OrderController.delete);

module.exports = router;
