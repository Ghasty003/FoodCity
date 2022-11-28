import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { CheckoutContextProvider } from './context/CheckoutContext'
import { HeaderCartContextProvider } from './context/HeaderCartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <HeaderCartContextProvider>
      <CheckoutContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CheckoutContextProvider>
  </HeaderCartContextProvider>
  </AuthContextProvider>
)
