import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPages from './pages/LandingPages'
import { GlobalStyle } from './style/GlobalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <LandingPages />
  </React.StrictMode>,
)
