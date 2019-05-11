import React, {Component} from 'react'
import './Route.css'

class Route extends Component {
  render() {
    const {selected, deliveries, removeFromRoute, routeIndex} = this.props

    if(!deliveries || deliveries.length < 1 || !selected) {
      return <div className={`Route ${selected ? 'selected' : ''}`}>
        <h3>Route {routeIndex+1}</h3>
      </div>
    }

    const origin = deliveries[0].location
    const waypoints = deliveries
      .slice(1, deliveries.length-1)
      .map(delivery => delivery.location)
    const destination = deliveries[deliveries.length-1].location

    const parameters = `origin=${origin.lat},${origin.lng}&waypoints=${waypoints.map(location => `${location.lat},${location.lng}`).join('|')}&destination=${destination.lat},${destination.lng}`

    return <div className={`Route ${selected ? 'selected' : ''}`}>
      <h3>Route {routeIndex+1} - <a href={`https://www.google.com/maps/dir/?api=1&${parameters}`} style={{color: 'white'}}>
          Directions for this route
        </a>
      </h3>
      <ol>
        {
          deliveries.map((delivery, index) => (
            <li
              key={`${delivery.id}-${index}`}
            >
              {delivery.name}
              <button className="Route-remove" onClick={() => removeFromRoute(index)}>Remove</button>
            </li>
          ))
        }
      </ol>
    </div>
  }
}

export {Route}