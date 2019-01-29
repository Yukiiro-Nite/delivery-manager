import React, {Component} from 'react'
import './Delivery.css'

class Delivery extends Component {
  render() {
    const { address, name, description } = this.props
    return (
      <li className="Delivery">
        <h2 className="name">{name}</h2>
        <p className="address">{address}</p>
        <p className="description">{description}</p>
        <div className="actions">
          <button
            onClick={() => this.props.removeDelivery()}
          >
            Remove
          </button>
          <button
            onClick={() => this.props.editDelivery({name: 'edited', address: 'edited', description: 'edited'})}
          >
            Edit
          </button>
        </div>
      </li>
    )
  }
}

export {Delivery}