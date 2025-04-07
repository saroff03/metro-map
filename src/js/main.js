// Client browser's width
const width = window.innerWidth;

// First Row Stations
const airport = L.circleMarker([72.11, 8.33], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const callertonPark = L.circleMarker([72.11, 11.53], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const bankFoot = L.circleMarker([72.11, 14.73], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const kingstonPark = L.circleMarker([72.11, 17.92], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const fawdon = L.circleMarker([72.11, 21.16], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const wansbeckRoad = L.circleMarker([72.11, 24.46], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const regentCentre = L.circleMarker([72.11, 27.66], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const longbenton = L.circleMarker([72.15, 35.76], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const fourLaneEnds = L.circleMarker([72.15, 42.31], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const benton = L.circleMarker([72.15, 48.80], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const palmersville = L.circleMarker([72.15, 55.28], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const northumberlandPark = L.circleMarker([72.15, 61.75], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const shiremoor = L.circleMarker([72.15, 68.23], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const westMonkseaton = L.circleMarker([72.15, 74.74], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const monkseaton = L.circleMarker([72.15, 81.10], {
  radius: 5,
  opacity: 1,          
  fillOpacity: 0       
});


// Align map according to client's browser width
function mapPositionTwo() {
  if (width >= 1281) {
    var map = L.map('map', {
      center: [67, 50],
      zoom: 4,
      zoomSnap: 0,
      maxZoom: 5,
      minZoom: 4
    });
    
    var imageUrl = 'images/map.svg',
    imageBounds = [[0, 0], [100, 100]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    // Function to show coordinates on mouse click 
    map.on('click', function(e){
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
      });
    
    monkseaton.addTo(map);
    monkseaton.bindPopup(`
      <strong>Airport Station</strong><br>
      Status: On time<br>
      Next train: 2 mins
    `);

  } else {
    var map = L.map('map', {
      center: [0, 0],
      zoom: 5
    });
    
    var imageUrl = 'images/map.svg',
    imageBounds = [[0, 0], [100, 100]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
  }
};

mapPositionTwo();

