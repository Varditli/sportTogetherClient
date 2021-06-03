
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './currentLocation';
import Geocode from "react-geocode";
import trainings from "../HomePage"
// const [trainings, setTrainings] = useState([]);


// const address = "Herzl Street 50, Ramat Gan"
// const markerList = [
//   { lat: 59.2967322, lng: 18.0009393},
//   { lat: 59.2980245, lng: 17.9971503},
//   { lat: 59.2981078, lng: 17.9980875 },
//   { lat: 59.2987638, lng: 17.9917639}
// ]
Geocode.setRegion("il");
Geocode.setLanguage("he");
Geocode.enableDebug();
Geocode.setApiKey("AIzaSyAd7JflAOBezbp22Ur_svbRKdZ_8C0bmQ8");
const addresses = [
  {
    location: "Herzl Street 50, רמת גן"
},
{
  location: "Herzl Street 100, רמת גן"
}
]
const address = 
Geocode.fromAddress(addresses[0]).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log("lat= "+ lat," lng= " + lng);
    return (lat,lng);
    
  },
  (error) => {
    console.error("the error is:" + error);
  }
);



export class MapContainer extends Component {
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
      

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
          {/* <Map

google={this.props.google}

zoom={14}

center={{

    lat: 47.444,

    lng: -122.176

}}>

<Marker key="marker_1"

    position={{

        lat: 47.444,

        lng: -122.176

    }}

/>

</Map> */}
        
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >   
         
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
        </InfoWindow>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      </div>
    );
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAd7JflAOBezbp22Ur_svbRKdZ_8C0bmQ8'
})(MapContainer);