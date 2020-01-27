import React from 'react'
import './RoleSelector.css'

const RoleSelector = ({onSubmit}) => {
  return (
    <div className="RoleSelector__wrapper">
      <section className="RoleSelector" onSubmit={onSubmit}>
        <form className="RoleSelector__form">
          <input type="hidden" name="role" value="manager" />
          <button>Delivery Manager</button>
        </form>
        <form className="RoleSelector__form">
          <input type="hidden" name="role" value="deliverer" />
          <button>Deliverer</button>
        </form>
      </section>
    </div>
  )
}

export default RoleSelector