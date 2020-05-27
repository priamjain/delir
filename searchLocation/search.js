mapboxgl.accessToken = 'pk.eyJ1IjoicHJpYW1qYWluIiwiYSI6ImNrYXA3dWplcjBlczkycXFlYnNtcnJtM3AifQ.5HWS6U1o-eih803IpOMcjA';
var cntr = [77,28];
var sbt = document.querySelector("#a");
var ok = document.querySelector("#ok");
var area = document.querySelector("input");

navigator.geolocation.getCurrentPosition(success);
var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: cntr, // starting position
      zoom: 10 // starting zoom
    });

// Add geolocate control to the map.


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


sbt.addEventListener("mouseenter", function(){
  crd = geocoder["mapMarker"]["_lngLat"];
  console.log("actionPage.html?lat="+crd["lat"]+"&lng="+crd["lng"]+"&area="+JSON.parse(geocoder["lastSelected"])["text_en-GB"]);
  sbt.setAttribute("href", "actionPage.html?lat="+crd["lat"]+"&lng="+crd["lng"]+"&area="+JSON.parse(geocoder["lastSelected"])["text_en-GB"]);
});