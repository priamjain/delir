var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
	title:String,
	description:String,
	shoplat:String,
	shoplng:String,
	shoparea:String,
	deslat:String,
	deslng:String,
	desarea:String
});

module.exports = mongoose.model("order",orderSchema);