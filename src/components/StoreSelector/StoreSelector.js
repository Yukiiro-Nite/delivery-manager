import React from 'react'
import './StoreSelector.css'

const StoreSelector = ({onSubmit}) => {
  return <section className="StoreSelector" onSubmit={onSubmit}>
    <form className="StoreSelector__form">
      <label>
        <span>Enter your store name</span>
        <input name="store"></input>
      </label>
      <button>Set Store</button>
    </form>
  </section>
}

export default StoreSelector