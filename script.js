// mapbox token to link to my mapbox account 
mapboxgl.accessToken = 'pk.eyJ1IjoibmFkaW5lY29uc3VuamkiLCJhIjoiY21rZWU1djI4MDV6NTNkb29meTJzMW81dSJ9.t6RLssyQkfZODRIMy_ToNQ';

// map container will use my map style 
const map = new mapboxgl.Map({
	container: 'my-map', // map container ID
	style: 'mapbox://styles/nadineconsunji/cmkyjcxru008t01s7c1xvf9fr', // style URL
	center: [-79.40, 43.66], // starting position [lng, lat] to start centred around Toronto 
	zoom: 12, // starting zoom
});

map.on('load', () => {
  
});

// Once map finishes loading, trigger the following functions 
map.on('load', () => {
    // resize map accordingly if browser size is changed/minimised 
    map.resize();

// 1. Add data sources 
	// Outdoor bike parking - GeoJSON file (added via URL for organisation)
    map.addSource('outdoor-bike-parking', { // ID created
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/nadineconsunji/GGR472_Lab2/main/OutdoorBicycleParking.geojson' //CHANGE THIS RIGHT HERE!!!
    });

	// Bike lanes - GeoJSON file (added via URL for organisation)
    map.addSource('bike-lanes', { 
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/nadineconsunji/GGR472_Lab2/main/BikeRoutes.geojson' //CHANGE THIS RIGHT HERE!!! 
    });

// 2. Visualise data layers/load them into the map 
	// Outdoor bike parking illustrated through points 
    map.addLayer({
        'id': 'outdoor-bike-parking-ppt', // ID created
        'type': 'circle',
        'source': 'outdoor-bike-parking',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#c90000'
        }
    });

	// Bike lanes illustrated through lines 
    map.addLayer({
        id: 'bike-lanes-line',
        type: 'line',
        source: 'bike-lanes',
        paint: {
            'line-width': 2, 
            'line-color': '#007cbf'
        }
    });

});