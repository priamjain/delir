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

$('#cardmodal').on('show.bs.modal', function (event) {
  var card = $(event.relatedTarget); // Button that triggered the modal
  var modal = $(this);
  console.log(card.data('title'));
  modal.find('.modal-title').text(card.data('title'));
  modal.find('.modal-body #card-description').text(card.data('description'));
  modal.find('.modal-body #card-shoparea').text(card.data('shoparea'));
  modal.find('.modal-body #card-desarea').text(card.data('desarea'));

})



