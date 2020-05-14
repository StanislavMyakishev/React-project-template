import React from 'react'
import { history } from './common/helpers/history'
import { Router } from 'react-router-dom'
import Routes from './Routes.js'

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App
