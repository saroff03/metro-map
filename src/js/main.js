// Client browser's width
const width = window.innerWidth;

// First Row Stations
const airport = L.circleMarker([72.11, 8.33], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const callertonParkway = L.circleMarker([72.11, 11.53], {
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
  opacity: 0,          
  fillOpacity: 0       
});

const stations = [airport, callertonParkway, bankFoot, kingstonPark, fawdon, wansbeckRoad, regentCentre, longbenton, fourLaneEnds, benton, palmersville, northumberlandPark, shiremoor, monkseaton, westMonkseaton];

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
    
      stations.forEach(station => {
        station.addTo(map);
      });

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

async function airportData() {
  const urls = [
    { platform: 1, url: "https://metro-rti.nexus.org.uk/api/times/APT/1" },
    { platform: 2, url: "https://metro-rti.nexus.org.uk/api/times/APT/2" }
  ];

  let popupContent = `<strong class="center">Airport Station</strong>`;

  try {
    for (const entry of urls) {
      const response = await fetch(entry.url);
      if (!response.ok) throw new Error(`Error fetching platform ${entry.platform}: ${response.status}`);
      const trains = await response.json();

      popupContent += `<hr><strong class="center">Platform ${entry.platform}</strong>`;

      if (trains.length === 0) {
        popupContent += `<em>No upcoming trains.</em>`;
      } else {
        trains.slice(0, 3).forEach(train => {
          const lineColor = train.line === "GREEN" ? "#3db94d" : "#000000";
          popupContent += `
            <div style="margin-top: 6px;">
              <table>
                <tr>
                  <th>Train</th>
                  <th>Due in</th>
                  <th>Destination</th>
                  <th>Line</th>
                </tr>
                <tr>
                  <td> ${train.trn}</td>
                  <td> ${train.dueIn} min</td>
                  <td> ${train.destination}</td>
                  <td style="color:${lineColor}"> ${train.line}</td>
                </tr>
              </table>
            </div>
          `;
        });
      }
    }

    airport.bindPopup(popupContent);

  } catch (error) {
    console.error("Error loading Bank Foot data:", error);
  }
};


airportData();

