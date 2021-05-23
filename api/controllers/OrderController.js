const Controller = require('./Controller');
const OrderService = require('../services/OrderService');
const Order = require('../models/Order');

const orderService = new OrderService(new Order().getInstance());

const { notifyOrder } = require('../../utils/sockets');

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

	async insert(req, res) {
		const response = await this.service.insert(req.body);
		if (response.error) return res.status(response.statusCode).send(response);
		notifyOrder(response.item);
		return res.status(201).send(response);
	}
}

module.exports = new OrderController(orderService);
