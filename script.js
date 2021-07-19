mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVubnlib3kyMSIsImEiOiJja3I5cXNzZXoycXM1Mm5yemo2cHcxNWh6In0.fjDBXnp-JRlOPXTPRWxHPw';

navigator.geolocation.getCurrentPosition(successLocation,
errorLocation,  {
  enableHighAccuracy: true
})

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([0.00, 0.00])
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 50
  });
}
