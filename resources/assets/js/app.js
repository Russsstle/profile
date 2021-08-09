import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import App from './content/App'

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
)
