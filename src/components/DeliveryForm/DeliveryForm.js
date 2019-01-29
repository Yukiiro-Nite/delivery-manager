import React, {Component} from 'react'
import {getFormData} from '../../utils'
import './DeliveryForm.css'

class DeliveryForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const data = getFormData(event)
    this.props.addDelivery(data)
  }
  render() {
    return (
      <form className="DeliveryForm" onSubmit={this.handleSubmit}>
        <h2>Add New Delivery</h2>
        <label>
          <h3>Name</h3>
          <input name="name"/>
        </label>
        <label>
          <h3>Address</h3>
          <input name="address"/>
        </label>
        <label>
          <h3>Description</h3>
          <textarea name="description" />
        </label>
        <button>Add Delivery</button>
      </form>
    )
  }
}

export {DeliveryForm}