
var params = new URLSearchParams(window.location.search)
var searchbtns = document.querySelectorAll("form div a");
var variables={};
var arr=[];

for (const param of params) {
	if(param)
	{
		console.log(param);
		variables[param[0]] = param[1];
	};
};
console.log(variables);
searchbtns.forEach(function(btn){
	btn.addEventListener("click",function(){
		variables.q=btn.id;
		console.log(variables);

		var string ="../searchLocation/search.html?";
		for(var key in variables){
			string = string + key +"="+variables[key]+"&";
		}
		console.log(string);

		// string =string + arr[0] +"="+crd["lat"]+"&" +arr[1]+"="+crd["lng"]+"&"+arr[2]+"="+JSON.parse(geocoder["lastSelected"])["text_en-GB"];
				btn.setAttribute("href", string);
	});
});



var shoploc = document.querySelector("#shoploc");
if(variables.shoparea)
{
	shoploc.setAttribute("placeholder", variables.shoparea);
}
else {
	shoploc.setAttribute("placeholder", "Set shop location");
}
var desloc = document.querySelector("#desloc");
if(variables.desarea)
{
	desloc.setAttribute("placeholder", variables.desarea);
}
else {
	desloc.setAttribute("placeholder", "Set shop location");
}


