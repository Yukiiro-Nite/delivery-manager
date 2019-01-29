import React, {Component} from 'react'
import {Route} from '../Route/Route'

class Routes extends Component {
  render() {
    const {routes} = this.props.routes
    return <ul className="Routes">
      {
        routes.map((route, index) => <Route
          key={`route-${index}`}
          {...route}
        />)
      }
    </ul>
  }
}