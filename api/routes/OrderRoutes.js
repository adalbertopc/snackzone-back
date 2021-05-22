const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/orders', OrderController.getAll);
router.post('/orders', OrderController.insert);
router.put('/orders/:id', OrderController.update);
router.delete('/orders/:id', OrderController.delete);

module.exports = router;
