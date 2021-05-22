const Controller = require('./Controller');
const OrderService = require('../services/OrderService');
const Order = require('../models/Order');

const orderService = new OrderService(new Order().getInstance());

class OrderController extends Controller {
	constructor(service) {
		super(service);
	}
	async getAll(req, res) {
		const unsortedData = await this.service.getAll(req.query);
		const sorted = unsortedData.data.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);

		return res.status(200).send({ ...unsortedData, data: sorted });
	}
}

module.exports = new OrderController(orderService);
