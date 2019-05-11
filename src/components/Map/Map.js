import React from 'react'
import {Map, InfoWindow, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react'
import secrets from '../../secrets.json'

class DeliveryMap extends React.Component {
  getCenter = deliveries => {
    const sums = deliveries.reduce((sum, delivery) => {
      sum.latSum += delivery.location.lat
      sum.lngSum += delivery.location.lng
      return sum
    }, {latSum: 0, lngSum: 0})
    
    return {
      lat: sums.latSum / deliveries.length,
      lng: sums.lngSum / deliveries.length
    }
  }

  render() {
    const {deliveries, google, addToRoute, currentRoute} = this.props
    const deliveryList = Object.values(deliveries)
    const center = this.getCenter(deliveryList)
    
    return (
      <Map
        google={google}
        style={{maxWidth: '600px', maxHeight: '600px'}}
        initialCenter={center}
        center={center}
      >
        {
          deliveryList.map((delivery) => <Marker
            key={delivery.id}
            name={delivery.name}
            title={delivery.description}
            position={delivery.location}
            onClick={() => addToRoute(delivery)}
          />)
        }
        {
          currentRoute && <Polyline
            path={currentRoute.map(delivery => delivery.location)}
            strokeColor="#580bb9"
            strokeOpacity={0.8}
            strokeWeight={2}
          />
        }
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: secrets.googleApiKey
})(DeliveryMap)