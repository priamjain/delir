var myloc = document.querySelector("#myloc");

myloc.addEventListener("click", function(){
	navigator.geolocation.getCurrentPosition(success, error);
});

function success(position){
	const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude+" "+longitude);
};
function error(){
	console.log("Unable");
};

// var cards = document.querySelectorAll(".card");
// for(var i=0;i<cards.length;i++)
// {
// 	cards[i].addEventListener("click", function(){

// 		this.classList.toggle('col-6');
// 		console.log(this.children[0].children[3].classList.toggle('d-none'));

// 	});
// };



