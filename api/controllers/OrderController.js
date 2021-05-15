const Controller = require('./Controller');
const OrderService = require('../services/OrderService');
const Order = require('../models/Order');

const orderService = new OrderService(new Order().getInstance());

class OrderController extends Controller {
	constructor(service) {
		super(service);
	}
}

module.exports = new OrderController(orderService);
