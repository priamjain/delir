var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
	title:String,
	subtitle:String,
	description:String
});

module.exports = mongoose.model("order",orderSchema);