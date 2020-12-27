import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
        
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%',border:'1px solid black',float: 'right', marginTop: '72px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBo7t9ZxMRjXWSomnmasLI3UbMARygDfuc" }}
           center={{lat:this.props.lat,lng:this.props.lng}}
        //  defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.locate}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;