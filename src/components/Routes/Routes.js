import React, {Component} from 'react'
import {Route} from '../Route/Route'
import './Routes.css'

class Routes extends Component {
  render() {
    const {routes, selectedRoute, removeFromRoute} = this.props

    return <div>
      <h2>Routes</h2>
      <ul className="Routes">
        {
          Object.values(routes).map((route, index) => <Route
            routeIndex={index}
            key={`route-${index}`}
            deliveries={route}
            selected={selectedRoute === index}
            removeFromRoute={removeFromRoute(index)}
          />)
        }
      </ul>
    </div>
  }
}

export {Routes}