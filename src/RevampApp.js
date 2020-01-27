import React from 'react'
import io from 'socket.io-client'

import Main from './components/Main/Main'
import ModeSelector from './components/ModeSelector/ModeSelector'
import NameSelector from './components/NameSelector/NameSelector'
import RoleSelector from './components/RoleSelector/RoleSelector'
import setupSocketAuth from './socket-auth'
import StoreSelector from './components/StoreSelector/StoreSelector'

const socket = io()
setupSocketAuth(socket)

class App extends React.Component {
  state = {
    role: undefined,
    store: undefined,
    name: undefined,
    mode: undefined
  }

  constructor() {
    super()

    this.selectRole = this.setParam.bind(this, 'role')
    this.selectStore = this.setParam.bind(this, 'store')
    this.selectName = this.setParam.bind(this, 'name')
    this.selectMode = this.setParam.bind(this, 'mode')
  }

  setParam = (param, event) => {
    event.preventDefault()
    const paramValue = event.target.elements[param].value
    if(paramValue) {
      this.setState({[param]: paramValue})
    }
  }

  removeParam = (param) => {
    this.setState({[param]: undefined})
  }

  render() {
    const {role, store, name, mode} = this.state

    switch (true) {
      case !role:
        return <RoleSelector onSubmit={this.selectRole} />
      case !store:
        return <StoreSelector onSubmit={this.selectStore} />
      case !name:
        return <NameSelector onSubmit={this.selectName} />
      case !mode && role === "manager":
        return <ModeSelector onSubmit={this.selectMode} />
      default:
        return (
          <Main
            removeParam={this.removeParam}
            role={role}
            store={store}
            name={name}
            mode={mode}
          />
        )
    }
  }
}

export default App