// Menu items and checkbox
const menuItems = document.querySelectorAll('.menuitem');
const checkbox = document.querySelector('#mobileicon');

// Add event listeners to menu items
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', () => {
        // If checkbox is checked, uncheck it
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    })
}

/* ----- Billede slider til forsiden ------ */

var root = document.querySelector('.SimpleSlider');
var slides = root.querySelectorAll(':not(:first-child)');
for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('is-hidden');
}
root.addEventListener('transitionend', function() {
    root.insertBefore(root.querySelector(':first-child.is-hidden'),null);
});
setInterval(function() {
    root.querySelector(':first-child').classList.add('is-hidden');
    root.querySelector(':nth-child(2)').classList.remove('is-hidden');
}, 4000)


/* ----- video sektion ------ */
var video = document.getElementById("myVideo");
document.addEventListener("scroll", function myFunction(){

    if (video.getBoundingClientRect().bottom < 200 || video.getBoundingClientRect().top > 200 )
    video.pause();

    else video.play();

});

// Mapbox //
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhcmFiaXJrIiwiYSI6ImNsMm9kamUzcTFnMTYzY3BrMnVyc3M5OWcifQ.gP2fz0EKnXojSyk3MKEGpA';
            
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/clarabirk/cl2odc2cm000515l2ogjqh9pi',
  center: [10.2202, 56.1544],// starting position
  zoom: 10
  });

  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.210441, 56.166637]
      },
      properties: {
        title: 'The Kitchen',
        description: 'Universitetsbyen 14'
      }
    }]
  };
  // add markers to map
  geojson.features.forEach(function(marker) {
  
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
  });
