import React from 'react'
import './ModeSelector.css'

const ModeSelector = ({onSubmit}) => {
  return <section className="ModeSelector" onSubmit={onSubmit}>
    <form className="ModeSelector__form">
      <input type="hidden" name="mode" value="manage_customers" />
      <button>Manage Customers</button>
    </form>
    <form className="ModeSelector__form">
      <input type="hidden" name="mode" value="manage_deliveries" />
      <button>Manage Deliveries</button>
    </form>
    <form className="ModeSelector__form">
      <input type="hidden" name="mode" value="manage_routes" />
      <button>Manage Routes</button>
    </form>
    <form className="ModeSelector__form">
      <input type="hidden" name="mode" value="monitor_routes" />
      <button>Monitor Routes</button>
    </form>
  </section>
}

export default ModeSelector