import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'

import {
  ExampleModal1,
  ExampleModal2
} from './components'

import {
  showModal
} from './actions/modal'

class App extends Component {
  render() {
    const {
      handleShowModal1Click,
      handleShowModal2Click
    } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <nav>
            <button onClick={handleShowModal1Click}>Show modal 1</button>
            <button onClick={handleShowModal2Click}>Show modal 2</button>
          </nav>
        </div>
        <ExampleModal1 />
        <ExampleModal2 />
      </div>
    )
  }
}

export default connect(
  null,
  {
    handleShowModal1Click: () => showModal('exampleModal1'),
    handleShowModal2Click: () => showModal('exampleModal2')
  }
)(App);
