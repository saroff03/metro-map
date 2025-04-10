// Client browser's width
const width = window.innerWidth;

// Station Markers
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
const southGosforth1 = L.circleMarker([71.60, 30], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const southGosforth2 = L.circleMarker([71.62, 30.58], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const whitleyBay = L.circleMarker([71.45, 86.67], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const ilfordRoad1 = L.circleMarker([71.03, 31.04], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const ilfordRoad2 = L.circleMarker([71.03, 31.75], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const westJesmond1 = L.circleMarker([70.38, 32.08], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const westJesmond2 = L.circleMarker([70.38, 32.90], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const cullercoats = L.circleMarker([70.30, 86.64], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const jesmond1 = L.circleMarker([69.75, 33.23], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const jesmond2 = L.circleMarker([69.75, 33.80], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const haymarket1 = L.circleMarker([69.18, 34.21], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const haymarket2 = L.circleMarker([69.18, 34.80], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const tynemouth = L.circleMarker([69.08, 86.67], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const stJames = L.circleMarker([68.31, 33.17], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const manors = L.circleMarker([68.31, 44.43], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const byker = L.circleMarker([68.31, 48.92], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const chillinghamRoad = L.circleMarker([68.31, 53.43], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const walkergate = L.circleMarker([68.31, 57.97], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const wallsend = L.circleMarker([68.31, 62.53], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const hadrianRoad = L.circleMarker([68.31, 66.98], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const howdon = L.circleMarker([68.31, 71.50], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const percyMain = L.circleMarker([68.31, 76.02], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const meadowWell = L.circleMarker([68.31, 80.56], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const northShields = L.circleMarker([68.31, 85.06], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const central1 = L.circleMarker([67.47, 36.73], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const central2 = L.circleMarker([67.47, 37.46], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const gateshead1 = L.circleMarker([65.94, 42.18], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const gateshead2 = L.circleMarker([65.67, 42.19], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const gatesheadStadium1 = L.circleMarker([65.94, 47.07], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const gatesheadStadium2 = L.circleMarker([65.67, 47.06], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const felling1 = L.circleMarker([65.94, 51.54], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const felling2 = L.circleMarker([65.67, 51.54], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const heworth1 = L.circleMarker([65.94, 56.55], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const heworth2 = L.circleMarker([65.63, 56.55], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const pelaw1 = L.circleMarker([65.94, 60.77], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const pelaw2 = L.circleMarker([65.65, 60.82], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const hebburn = L.circleMarker([65.92, 65.12], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const jarrow = L.circleMarker([65.92, 68.46], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const bede = L.circleMarker([65.92, 71.80], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const simonside = L.circleMarker([65.92, 75.05], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const tyneDock = L.circleMarker([65.92, 78.39], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const chichester = L.circleMarker([65.92, 81.78], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const southShields = L.circleMarker([65.92, 85.07], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const fellgate = L.circleMarker([64.12, 66.31], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const brockleyWhins = L.circleMarker([64.12, 72.55], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const eastBoldon = L.circleMarker([64.12, 77.92], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const seaburn = L.circleMarker([63.54, 86.57], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const stadiumOfLight = L.circleMarker([62.75, 86.61], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const stPeters = L.circleMarker([61.84, 86.61], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const sunderland = L.circleMarker([59.99, 86.61], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const southHylton = L.circleMarker([58.87, 68.15], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const pallion = L.circleMarker([58.87, 72.46], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const millfield = L.circleMarker([58.87, 76.70], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const unviersity = L.circleMarker([58.87, 81.03], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const parkLane = L.circleMarker([58.87, 85.2], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const monument1 = L.circleMarker([68.34, 35.55], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});
const monument2 = L.circleMarker([68.35, 36.16], {
  radius: 5,
  opacity: 0,          
  fillOpacity: 0       
});

const stations = [airport, callertonParkway, bankFoot, kingstonPark, fawdon, wansbeckRoad, regentCentre, longbenton, fourLaneEnds, benton, palmersville, northumberlandPark, shiremoor, monkseaton, westMonkseaton, southGosforth1, southGosforth2, whitleyBay, ilfordRoad1, ilfordRoad2, westJesmond1, westJesmond2, cullercoats, jesmond1, jesmond2, haymarket1, haymarket2, tynemouth, stJames, manors, byker, chillinghamRoad, walkergate, wallsend, hadrianRoad, howdon, percyMain, meadowWell, northShields, central1, central2, gateshead1, gateshead2, gatesheadStadium1, gatesheadStadium2, felling1, felling2, heworth1, heworth2, pelaw1, pelaw2, hebburn, jarrow, bede, simonside, tyneDock, chichester,southShields, fellgate, brockleyWhins, eastBoldon, seaburn, stadiumOfLight, stPeters, sunderland, southHylton, pallion, millfield, unviersity, parkLane, monument1, monument2];

const stationList = [
  {
    code: "APT",
    name: "Airport",
    marker: airport
  },
  {
    code: "BFT",
    name: "Bank Foot",
    marker: bankFoot
  },
  {
    code: "MSN",
    name: "Monkseaton",
    marker: monkseaton
  },
  {
    code: "BDE",
    name: "Bede",
    marker: bede 
  },
  {
    code: "BTN",
    name: "Benton",
    marker: benton
  },
  {
    code: "BYW",
    name: "Brockley Whins",
    marker: brockleyWhins
  },
  {
    code: "BYK",
    name: "Byker",
    marker: byker
  },
  {
    code: "CAL",
    name: "Callerton Parkway",
    marker: callertonParkway
  },
  {
    code: "CEN",
    name: "Central",
    marker: central1,
    marker2: central2
  },
  {
    code: "CHI",
    name: "Chichester",
    marker: chichester
  },
  {
    code: "CRD",
    name: "Chillingham Road",
    marker: chillinghamRoad
  },
  {
    code: "CUL",
    name: "Cullercoats",
    marker: cullercoats
  },
  {
    code: "EBO",
    name: "East Boldon",
    marker: eastBoldon
  },
  {
    code: "FAW",
    name: "Fawdon",
    marker: fawdon
  },
  {
    code: "FGT",
    name: "Fellgate",
    marker: fellgate
  },
  {
    code: "FEL",
    name: "Felling",
    marker: felling1,
    marker2: felling2
  },
  {
    code: "FLE",
    name: "Four Lane Ends",
    marker: fourLaneEnds
  },
  {
    code: "GHD",
    name: "Gateshead",
    marker: gateshead1,
    marker2: gateshead2
  },
  {
    code: "GST",
    name: "Gateshead Stadium",
    marker: gatesheadStadium1,
    marker2: gatesheadStadium2
  },
  {
    code: "HDR",
    name: "Hadrian Road",
    marker: hadrianRoad
  },
  {
    code: "HAY",
    name: "Haymarket",
    marker: haymarket1,
    marker2: haymarket2
  },
  {
    code: "HEB",
    name: "Hebburn",
    marker: hebburn
  },
  {
    code: "HTH",
    name: "Heworth",
    marker: heworth1,
    marker2: heworth2
  },
  {
    code: "HOW",
    name: "Howdon",
    marker: howdon
  },
  {
    code: "ILF",
    name: "Ilford Road",
    marker: ilfordRoad1,
    marker2: ilfordRoad2
  },
  {
    code: "JAR",
    name: "Jarrow",
    marker: jarrow
  },
  {
    code: "JES",
    name: "Jesmond",
    marker: jesmond1,
    marker2: jesmond2
  },
  {
    code: "KSP",
    name: "Kingston Park",
    marker: kingstonPark
  },
  {
    code: "LBN",
    name: "Longbenton",
    marker: longbenton
  },
  {
    code: "MAN",
    name: "Manors",
    marker: manors
  },
  {
    code: "MLF",
    name: "Millfield",
    marker: millfield
  },
  {
    code: "MWL",
    name: "Meadow Well",
    marker: meadowWell 
  },
  {
    code: "NSH",
    name: "North Shields",
    marker: northShields
  },
  {
    code: "NPK",
    name: "Northumberland Park",
    marker: northumberlandPark
  },
  {
    code: "PAL",
    name: "Pallion",
    marker: pallion
  },
  {
    code: "PMV",
    name: "Palmersville",
    marker: palmersville
  },
  {
    code: "PLI",
    name: "Park Lane",
    marker: parkLane
  },
  {
    code: "PLW",
    name: "Pelaw",
    marker: pelaw1,
    marker2: pelaw2
  },
  {
    code: "PCM",
    name: "Percy Main",
    marker: percyMain
  },
  {
    code: "RGC",
    name: "Regent Centre",
    marker: regentCentre
  },
  {
    code: "SBN",
    name: "Seaburn",
    marker: seaburn
  },
  {
    code: "SMR",
    name: "Shiremoor",
    marker: shiremoor
  },
  {
    code: "SMD",
    name: "Simonside",
    marker: simonside
  },
  {
    code: "SGF",
    name: "South Gosforth",
    marker: southGosforth1,
    marker2: southGosforth2
  },
  {
    code: "SHL",
    name: "South Hylton",
    marker: southHylton
  },
  {
    code: "SSS",
    name: "South Shields",
    marker: southShields
  },
  {
    code: "SJM",
    name: "St James",
    marker: stJames
  },
  {
    code: "MSP",
    name: "St Peter's",
    marker: stPeters
  },
  {
    code: "SFC",
    name: "Stadium of Light",
    marker: stadiumOfLight
  },
  {
    code: "SUN",
    name: "Sunderland",
    marker: sunderland 
  },
  {
    code: "TDK",
    name: "Tyne Dock",
    marker: tyneDock
  },
  {
    code: "TYN",
    name: "Tynemouth",
    marker: tynemouth
  },
  {
    code: "UNI",
    name: "University",
    marker: unviersity
  },
  {
    code: "WKG",
    name: "Walkergate",
    marker: walkergate
  },
  {
    code: "WSD",
    name: "Wallsend",
    marker: wallsend
  },
  {
    code: "WJS",
    name: "West Jesmond",
    marker: westJesmond1,
    marker2: westJesmond2
  },
  {
    code: "WBR",
    name: "Wansbeck Road",
    marker: wansbeckRoad
  },
  {
    code: "WMN",
    name: "West Monkseaton",
    marker: westMonkseaton
  },
  {
    code: "WTL",
    name: "Whitley Bay",
    marker: whitleyBay
  }
];


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
    stations.forEach(station => {
    station.addTo(map);
    });
  } 
  
  else if ((width >= 1025) && (width <= 1280)) {
    var map = L.map('map', {
      center: [67, 50],
      zoom: 4,
      zoomSnap: 0,
      maxZoom: 5,
      minZoom: 3.5
    });
    
    var imageUrl = 'images/map.svg',
    imageBounds = [[0, 0], [100, 100]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    stations.forEach(station => {
    station.addTo(map);
    })
  }

  else if ((width >= 768) && (width <= 1024)) {
    var map = L.map('map', {
      center: [67, 50],
      zoom: 2,
      zoomSnap: 0,
      maxZoom: 5,
      minZoom: 3.5
    });
    
    var imageUrl = 'images/map.svg',
    imageBounds = [[0, 0], [100, 100]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    stations.forEach(station => {
    station.addTo(map);
    })
  }

  else if ((width >= 481) && (width <= 767)) {
    var map = L.map('map', {
      center: [67, 50],
      zoom: 3,
      zoomSnap: 0,
      maxZoom: 5,
      minZoom: 3
    });
    
    var imageUrl = 'images/map.svg',
    imageBounds = [[0, 0], [100, 100]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    stations.forEach(station => {
    station.addTo(map);
    })
  }

  else if ((width >= 320) && (width <= 480)) {
    var map = L.map('map', {
      center: [67, 50],
      zoom: 3,
      zoomSnap: 1,
      maxZoom: 5,
      minZoom: 2
    });
    
    var imageUrl = 'images/map.svg',
    imageBounds = [[0, 0], [100, 100]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    stations.forEach(station => {
    station.addTo(map);
    })
  }

  else {
    alert("Error loading map. Browser width currently not supported.")
  }
};

mapPositionTwo();

// Get station/platform data for Monument Station
async function monumentData() {
  const urls = [
    { platform: 1, url: "https://metro-rti.nexus.org.uk/api/times/MTS/1" },
    { platform: 2, url: "https://metro-rti.nexus.org.uk/api/times/MTS/2" },
    { platform: "3/4", url: "https://metro-rti.nexus.org.uk/api/times/MTW/1" },
  ];

  let popupContent = `<strong class="center">Monument Station</strong>`;

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
          const lineColor = train.line === "GREEN" ? "#3db94d" : "#fab217";
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
                  <td style="background-color:${lineColor}"> ${train.line}</td>
                </tr>
              </table>
            </div>
          `;
        });
      }
    }

    monument1.bindPopup(popupContent);
    monument2.bindPopup(popupContent);

  } catch (error) {
    console.error("Error loading Monument Station data:", error);
  }
};

// monumentData();

// Function to load data for all stations
async function loadAllStationData() {
  for (const station of stationList) {
    const urls = [
      { platform: 1, url: `https://metro-rti.nexus.org.uk/api/times/${station.code}/1` },
      { platform: 2, url: `https://metro-rti.nexus.org.uk/api/times/${station.code}/2` }
    ];

    let popupContent = `<strong class="center">${station.name} Station</strong>`;

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
            const lineColor = train.line === "GREEN" ? "#3db94d" : "#fab217";
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
                  <td style="background-color:${lineColor}"> ${train.line}</td>
                </tr>
              </table>
            </div>
            `;
          });
        }
      }

      // Bind the popup to the station's marker
      station.marker.bindPopup(popupContent);
      station.marker2.bindPopup(popupContent);

    } catch (error) {
      console.error(`Error loading data for ${station.name}:`, error);
    }
  }
};

// loadAllStationData();


