import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './Components/Calculator/Calculator'
import '@picocss/pico'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
