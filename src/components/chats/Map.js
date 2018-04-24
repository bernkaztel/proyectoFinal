import React, { Component } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

class Map extends Component {
    state = { lat: "19.4203074", lng:"-99.1653082"};

    componentDidMount() {
        // HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=> {
           this.setState({
              lat: position.coords.latitude,
              lng: position.coords.longitude
             });
          });
        } 

      }

    render(){
        return (
            <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 19.4203074, lng: -99.1653082 }}
            center = {{lat: this.state.lat, lng: this.state.lng}}
            >
            <Marker
              position={{ lat: this.state.lat, lng: this.state.lng }}
            />
          </GoogleMap>
        )
    }
}
export default withScriptjs(withGoogleMap(Map));