import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FlightContextProvider from './FlightContext/FlightContext.jsx'
import UserContextProvider from './FlightContext/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <FlightContextProvider>
        <App />
      </FlightContextProvider>
    </UserContextProvider>
  </BrowserRouter>


)
