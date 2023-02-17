import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import './tailwind.css'
import About from './About'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
  </StrictMode>,
)
