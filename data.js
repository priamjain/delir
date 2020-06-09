var mongoose = require("mongoose");
var orders = require("./models/data");

var data = [
{
	title:"Biscuits",
	description:"Atta",
	shoplat:"618236871",
	shoplng:"531625312",
	shoparea:"golden",
	deslat:"531625312",
	deslng:"618236871",
	desarea:"asr"
},
{
	title:"Biscuits1",
	description:"Atta",
	shoplat:"618236871",
	shoplng:"531625312",
	shoparea:"golden",
	deslat:"531625312",
	deslng:"618236871",
	desarea:"asr"
},
{
	title:"Biscuits2",
	description:"Atta",
	shoplat:"618236871",
	shoplng:"531625312",
	shoparea:"golden",
	deslat:"531625312",
	deslng:"618236871",
	desarea:"asr"
},
{
	title:"Biscuits3",
	description:"Atta",
	shoplat:"618236871",
	shoplng:"531625312",
	shoparea:"golden",
	deslat:"531625312",
	deslng:"618236871",
	desarea:"asr"
},
{
	title:"Biscuits4",
	description:"Atta",
	shoplat:"618236871",
	shoplng:"531625312",
	shoparea:"golden",
	deslat:"531625312",
	deslng:"618236871",
	desarea:"asr"
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