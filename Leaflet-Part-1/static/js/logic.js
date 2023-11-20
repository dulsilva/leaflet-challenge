// create map and set the longitude and latitude
let myMap = L.map("map", {
    center: [125.051,5.5872,77.985]

  });

// adding an endpoint to a variable to use in our code throughout
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

// Perform a GET request to the query URL
//issue with "{" placement in line 12
d3.json(url).then(function (data){}
    // Console log the data retrieved 
    console.log(data);
  
    
    // Loop through the earthquake data and add markers to the map
for (let i = 0; i < data.features.length; i++) {
    let feature = data.features[i];
    let location = feature.geometry.coordinates;
    if (location) {
      let circle = L.circle([location[1], location[0]], {
        color: "blue",
        fillOpacity: 0.50,
        fillColor: getColor(location[2]), 
        radius: markerSize(feature.properties.mag)
      }).bindPopup(`<h1>${feature.properties.place}</h1> <hr> <h3>Magnitude: ${feature.properties.mag}</h3>`);
      markers.push(circle);
    }
  }

