import React, { Component } from 'react'
import { Deliveries } from './components/Deliveries/Deliveries'
import {DeliveryForm} from './components/DeliveryForm/DeliveryForm'
// import { Map } from './components/Map/Map'
// import { Routes } from './components/Routes/Routes'
import './App.css'
import { uniqueId } from './utils';

class App extends Component {
  state = {
    deliveries: {
      a: {
        id: 'a',
        name: `Person a Name's Flowers`,
        address: `123 That place`,
        description: `Get the flowers to them fast.`
      },
      b: {
        id: 'b',
        name: `Person b Name's Flowers`,
        address: `123 That place`,
        description: `Get the flowers to them fast.`
      }
    },
    routes: []
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
    }})
  }

  removeDelivery = (delivery) => {
    const {[delivery.id]:deliveryToRemove, ...deliveries} = this.state.deliveries
    this.setState({
      deliveries
    })
  }

  render() {
    const {deliveries} = this.state
    return (
      <div className="App">
        <DeliveryForm addDelivery={this.addDelivery}/>
        <Deliveries
          deliveries={deliveries}
          editDelivery={this.addDelivery}
          removeDelivery={this.removeDelivery}
        />
        {/* <Map />
        <Routes /> */}
      </div>
    )
  }
}

export default App
