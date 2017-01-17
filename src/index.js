import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import game from './reducers'

const store = createStore(game)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)