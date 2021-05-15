const mongoose = require('mongoose');
const Schema = mongoose.Schema;
class Order {
	initSchema() {
		const schema = new Schema({
			clientName: {
				type: String,
				required: true,
			},
			clientPhoneNumber: {
				type: String,
				required: true,
			},
			products: [
				{
					productName: String,
					price: Number,
				},
			],
			total: {
				type: Number,
				required: true,
			},
			createdAt: {
				type: Date,
				required: true,
				default: Date.now,
			},
			completedAt: {
				type: Date,
			},
		});
		mongoose.model('Order', schema);
	}

	getInstance() {
		this.initSchema();
		return mongoose.model('Order');
	}
}

module.exports = Order;
