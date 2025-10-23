import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import * as THREE from 'three'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
