const mongoose = require('mongoose');
const Schema = mongoose.Schema;
class Product {
	initSchema() {
		const schema = new Schema({
			name: {
				type: 'String',
				required: true,
			},
			image: {
				type: 'String',
			},
			description: {
				type: 'String',
				required: true,
			},
			price: {
				type: 'Number',
				required: true,
			},
		});
		mongoose.model('Product', schema);
	}

	getInstance() {
		this.initSchema();
		return mongoose.model('Product');
	}
}

module.exports = Product;
