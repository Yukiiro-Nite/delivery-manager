import React, {Component} from 'react'
import {Delivery} from '../Delivery/Delivery'
import './Deliveries.css'

class Deliveries extends Component {
  render() {
    return <section className="Deliveries">
      <h2>Deliveries</h2>
      <ul>
        {
          Object.values(this.props.deliveries)
            .map((delivery, index) => <Delivery
                key={`delivery-${index}`}
                {...delivery}
                removeDelivery={() => this.props.removeDelivery({id: delivery.id})}
                editDelivery={(newDelivery) => this.props.editDelivery({id: delivery.id, ...newDelivery})}
              />
            )
        }
      </ul>
    </section>
  }
}

export { Deliveries }