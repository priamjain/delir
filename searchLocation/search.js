mapboxgl.accessToken = 'pk.eyJ1IjoicHJpYW1qYWluIiwiYSI6ImNrYXA3dWplcjBlczkycXFlYnNtcnJtM3AifQ.5HWS6U1o-eih803IpOMcjA';
var cntr = [77,28];
var sbt = document.querySelector("#a");
var variables = {};
// var ok = document.querySelector("#ok");
// var area = document.querySelector("input");
var arr = [];
var params = new URLSearchParams(window.location.search)
for (const param of params) {
  if(param)
  {
    variables[param[0]] = param[1];
  };
};
navigator.geolocation.getCurrentPosition(success);
var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: cntr, // starting position
      zoom: 10 // starting zoom
    });

// Add geolocate control to the map.

if(variables.q == "shopsearch")
{
  arr[0]="shoplat";
  arr[1]="shoplng";
  arr[2]="shoparea"
}
else{
  arr[0]="deslat";
  arr[1]="deslng";
  arr[2]="desarea";
}

// var marker = new mapboxgl.Marker({
//   draggable: true
// })


var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  countries: 'in',
  marker: {
// color: 'orange',
draggable:true
},
mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
function success(pos) {
  var crd = pos.coords;
  cntr[1] =crd.latitude;
  cntr[0]= crd.longitude;
  console.log(cntr);
  map.flyTo({
    center: cntr,
    zoom: 12,
    bearing: 0,
    essential: true
  });
};


sbt.addEventListener("click", function(){
  crd = geocoder["mapMarker"]["_lngLat"];
  var string ="../actionPage/actionPage.html?";
  for(var key in variables){
    string = string + key +"="+variables[key]+"&";
  }
  string =string + arr[0] +"="+crd["lat"]+"&" +arr[1]+"="+crd["lng"]+"&"+arr[2]+"="+JSON.parse(geocoder["lastSelected"])["text_en-GB"];
  console.log(string);
    sbt.setAttribute("href", string);
  });