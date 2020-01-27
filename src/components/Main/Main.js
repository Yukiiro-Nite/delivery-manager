import React from 'react'
import './Main.css'

const Main = ({ role, store, name, mode, removeParam }) => {
  const isManager = role === "manager"

  return (
    <main>
      <p>{role} <button onClick={() => removeParam('role')}>Change Role</button></p>
      <p>{store} <button onClick={() => removeParam('store')}>Change Store</button></p>
      <p>{name} <button onClick={() => removeParam('name')}>Change Name</button></p>
      { isManager && <p>{mode} <button onClick={() => removeParam('mode')}>Change Mode</button></p> }
    </main>
  )
}

export default Main