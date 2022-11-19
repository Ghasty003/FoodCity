import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { HeaderCartContextProvider } from './context/HeaderCartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderCartContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
  </HeaderCartContextProvider>
)
