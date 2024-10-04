import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Set the default icon for Leaflet markers
const DefaultIcon = L.icon({
  iconUrl: '/media/Images/location-pin.png',
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

// Set the default icon for all markers
L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
  // State to check if the component is mounted
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Set the isBrowser state to true when the component mounts
    setIsBrowser(true);
  }, []);

  // Coordinates for 150 Kampong Ampat
  const kampongAmpatCoords: [number, number] = [1.334201, 103.887827];

  // Only render the map if in the browser
  if (!isBrowser) {
    return null; // or a loading spinner
  }

  return (
    <MapContainer center={kampongAmpatCoords} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={kampongAmpatCoords}>
        <Popup>
          150 Kampong Ampat <br /> Singapore
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
