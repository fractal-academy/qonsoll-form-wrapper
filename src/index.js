import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import '@qonsoll/react-design/dist/styles/vars/index.css'
import '@qonsoll/react-design/dist/styles/styles.css'
import './styles/vars.css'
import '@qonsoll/qvideo/dist/styles/styles.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
