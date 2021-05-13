import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// API KEY = AIzaSyAd7JflAOBezbp22Ur_svbRKdZ_8C0bmQ8

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAd7JflAOBezbp22Ur_svbRKdZ_8C0bmQ8Y&callback=initMap';
// script.async = true;

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd7JflAOBezbp22Ur_svbRKdZ_8C0bmQ8&callback=initMap"
type="text/javascript"></script> 

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
      

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)