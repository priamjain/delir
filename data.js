var mongoose = require("mongoose");
var orders = require("./models/data");

var data = [
{
	title:"ababa",
	subtitle:"sub",
	description:"very nice 3"
},
{
	title:"ab",
	subtitle:"sub",
	description:"very nice 2"
},
{
	title:"abab",
	subtitle:"sub",
	description:"very nice 1"
},
{
	title:"aba",
	subtitle:"sub",
	description:"very nice 1"
},
{
	title:"a",
	subtitle:"sub",
	description:"very nice 1"
},
{
	title:"aaaabab",
	subtitle:"sub",
	description:"very nice 1"
},
{
	title:"atb",
	subtitle:"sub",
	description:"very nice 1"
}
];

function seedDB(){
	orders.remove({},function(err,succ){
		if(err){
			console.log(err);
		}
		else{
			console.log("removed");
			data.forEach(function(seed){
				orders.create(seed,function(err,order){
					if(err){
						console.log(err);
					}
					else{
						console.log(order);
					};
				});
			});
		}
	});

	
};

module.exports = seedDB;