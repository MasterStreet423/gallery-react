import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/main.css"
import { Imgplace } from './components/Imgplace'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
