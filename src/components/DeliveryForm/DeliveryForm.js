import React, {Component} from 'react'
import {getFormData} from '../../utils'
import Autocomplete from 'react-google-autocomplete'
import {GoogleApiWrapper} from 'google-maps-react'
import secrets from '../../secrets.json'
import './DeliveryForm.css'

class DeliveryForm extends Component {
  constructor() {
    super()
    this.state = {
      location: null,
      address: null
    }
  }

  handlePlaceSelected = (place) => {
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }
    const address = place.formatted_address

    this.setState({location, address})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = getFormData(event)
    this.props.addDelivery({...data, ...this.state})
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
          <Autocomplete
            onPlaceSelected={this.handlePlaceSelected}
            types={['address']}
          />
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

export default GoogleApiWrapper({
  apiKey: secrets.googleApiKey
})(DeliveryForm)