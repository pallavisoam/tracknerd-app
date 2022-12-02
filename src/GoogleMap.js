import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const GoogleMap = () => {
    const mapStyles = {
        width: '50%',
        height: '50%',
        margin: '0rem auto'
    }
    return (
        <div>
            {' '}
            <Map google={window.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176 }}>
                <Marker position={{ lat: 48.0, lng: -122.0 }} />
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCVRw8XL-QNuk9IB46_3bpm0dLKRHnOACI'
})(GoogleMap)

//AIzaSyCVRw8XL-QNuk9IB46_3bpm0dLKRHnOACI
