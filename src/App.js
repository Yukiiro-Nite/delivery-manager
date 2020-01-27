import React, { Component } from 'react'
import { Deliveries } from './components/Deliveries/Deliveries'
import DeliveryForm from './components/DeliveryForm/DeliveryForm'
import DeliveryMap from './components/Map/Map'
import { Routes } from './components/Routes/Routes'
import './App.css'
import { uniqueId } from './utils'
import setupSocketAuth from './socket-auth'
import io from 'socket.io-client'

const socket = io()
setupSocketAuth(socket)

class App extends Component {
  constructor() {
    super()
    let currentState
    try {
      currentState = JSON.parse(
        document.cookie
          .split('; ')
          .find(str => str.indexOf('app-state') === 0)
          .split('=')[1]
      )
    } catch (error) {
      console.log('Error parsing app-state from cookies: ', error)
    }
    this.state = currentState || {
      deliveries: {},
      routes: {},
      selectedRoute: 0
    }
  }

  save = () => {
    document.cookie = 'app-state='+JSON.stringify(this.state)
  }

  addDelivery = (delivery) => {
    const id = delivery.id
      ? delivery.id
      : uniqueId()
    this.setState({deliveries: {
      ...this.state.deliveries,
      [id]: {
        id,
        ...delivery
      }
    }}, this.save)
  }

  removeDelivery = (delivery) => {
    const {[delivery.id]:deliveryToRemove, ...deliveries} = this.state.deliveries
    this.setState({
      deliveries
    }, this.save)
  }

  addToRoute = (delivery) => {
    this.setState({routes: {
      ...this.routes,
      [this.state.selectedRoute]: [].concat(
        (this.state.routes[this.state.selectedRoute] || []),
        delivery
      )
    }}, this.save)
  }

  selectRoute = (index) => {
    this.setState({selectedRoute: index}, this.save)
  }

  removeFromRoute = (routeIndex) => (deliveryIndex) => {
    const {[routeIndex]: routeToUpdate, routes} = this.state.routes
    const newRoute = [].concat(routeToUpdate.slice(0, deliveryIndex), routeToUpdate.slice(deliveryIndex+1))
    this.setState({
      routes: {
        ...routes,
        [routeIndex]: newRoute
      }
    }, this.save)
  }

  render() {
    const {deliveries, routes, selectedRoute} = this.state
    
    return (
      <div className="App">
        <DeliveryForm addDelivery={this.addDelivery}/>
        <Deliveries
          deliveries={deliveries}
          editDelivery={this.addDelivery}
          removeDelivery={this.removeDelivery}
        />
        <Routes
          deliveries={deliveries}
          routes={routes}
          selectedRoute={selectedRoute}
          removeFromRoute={this.removeFromRoute}
        />
        <DeliveryMap
          deliveries={deliveries}
          addToRoute={this.addToRoute}
          currentRoute={routes[selectedRoute]}
        />
      </div>
    )
  }
}

export default App
