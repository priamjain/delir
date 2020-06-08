var express = require("express"),
app = express(),
mongoose = require("mongoose"),
seedDB =  require("./data"),
Orders = require("./models/data")
mongoose.connect('mongodb://localhost/delir',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
seedDB();


app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.redirect("/orders");
});

app.get("/orders",function(req,res){
	Orders.find({},function(err,orders){
		if(err){
			console.log(err);
		}
		else{
			res.render("searchOrders/searchOrders",{orders:orders});
		}
	});

});

app.get("/orders/new",function(req,res){
	res.render("actionPage/actionPage");
});

app.get("/login",function(req,res){
	res.render("loginPage/loginPage");
});

app.get("/searchLocation",function(req,res){
	res.render("searchLocation/searchLocation");
});



app.listen(3000,function(){
	console.log("Server Started");
});