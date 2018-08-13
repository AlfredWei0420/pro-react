import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../src/containers/container.js'
import store from '../src/Store.js'

console.log('ActionTypes',ActionTypes)

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('root')
)