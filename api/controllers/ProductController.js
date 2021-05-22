const Controller = require('./Controller');
const ProductService = require('../services/ProductService');
const Product = require('../models/Product');

const productService = new ProductService(new Product().getInstance());

class ProductController extends Controller {
	constructor(service) {
		super(service);
	}

	async getAll(req, res) {
		const unsortedData = await this.service.getAll(req.query);
		const sorted = unsortedData.data.sort((a, b) => a.name.localeCompare(b.name));

		return res.status(200).send({ ...unsortedData, data: sorted });
	}
}

module.exports = new ProductController(productService);
