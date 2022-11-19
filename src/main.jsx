import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { HeaderCartContextProvider } from './context/HeaderCartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <HeaderCartContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BrowserRouter>
  </HeaderCartContextProvider>
  </AuthContextProvider>
)
