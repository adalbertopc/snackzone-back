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
					productId: String,
					productName: String,
					qty: Number,
					price: Number,
					total: Number,
				},
			],
			total: {
				type: Number,
				required: true,
			},
			isCompleted: {
				type: Boolean,
				required: true,
				default: false,
			},
			createdAt: {
				type: Date,
				required: true,
				default: Date.now,
			},
			completedAt: {
				type: Date,
				default: null,
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
