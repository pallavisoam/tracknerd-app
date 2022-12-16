import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const GoogleMap = ({ locArr }) => {
    const mapStyles = {
        width: '50%',
        height: '50%',
        margin: '0rem auto'
    }
    return (
        <div>
            <Map
                google={window.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: 12.8926883,
                    lng: 77.566895
                }}
            >
                {locArr.map((loc) => {
                    return (
                        <Marker
                            position={{
                                lat: loc.latitude,
                                lng: loc.longitude
                            }}
                        />
                    )
                })}
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCVRw8XL-QNuk9IB46_3bpm0dLKRHnOACI'
})(GoogleMap)

//AIzaSyCVRw8XL-QNuk9IB46_3bpm0dLKRHnOACI
