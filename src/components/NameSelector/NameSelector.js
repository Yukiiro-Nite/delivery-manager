import React from 'react'
import './NameSelector.css'

const NameSelector = ({onSubmit}) => {
  return <section className="NameSelector" onSubmit={onSubmit}>
    <form className="NameSelector__form">
      <label>
        <span>Enter your name</span>
        <input name="name"></input>
      </label>
      <button>Set Name</button>
    </form>
  </section>
}

export default NameSelector