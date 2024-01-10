import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
//import cafeData from "../data/locations.json";
import React, { useState, useEffect } from "react";

import { Icon } from "leaflet";
//import useFetchData from "./useFetchData";

const Map = () => {

  const [hostels, setHostels] = useState([]);

  const icon = new Icon({
    iconUrl: "/markerIcon.svg",
    iconSize: [30, 30],
    
  });

  // const initialMarker =  [55.86639, -4.24919]
  const initialMarker =  {}
  const [activeHostel, setActiveHostel] = useState(initialMarker);
  const position = [57.329341, -4.471393];

//   const markerClicked = (position) => {   
//     setActiveHostel(position)
// }

const markerClicked = (hostel) => {   
  setActiveHostel(hostel);
}




useEffect(() => {
  fetch('http://localhost:3000/hostels')
    .then(response => response.json())
    .then(data => setHostels(data))
    .catch(error => console.error('Error fetching data:', error));
}, []); // Empty dependency array to run once on mount


return (
    <>
      <MapContainer
        center={position}
        zoom={9}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

{hostels && hostels.map((hostel) => (
  <Marker
    key={hostel.id}
    position={[hostel.location.lat, hostel.location.long]}
    icon={icon}
    eventHandlers={{ click: () => markerClicked(hostel) }}
  >
    <Popup>
      Here is the location of the {hostel.name} hostel. <br />
      {hostel.description} <br />
      
    </Popup>
  </Marker>
))}


      </MapContainer>
       {/* <div className="info">The cafe you have currently selected is located at latitude:{activeCafe[0]} longitude:{activeCafe[1]}.</div>  */}
       <div className="info">The hostel you have currently selected is {activeHostel.name} {activeHostel.desc}.</div>
    </>
  );
};
export default Map;

