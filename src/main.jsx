import 'normalize.css'
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)

// an easter egg in the console
console.log(
  `%cLive long and prosper 🖖`,
  `
  font-size: 36px;
  color: gold;
  background-color: #000;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px;
`
)
