import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import 'primereact/resources/themes/arya-blue/theme.css'
import 'primeicons/primeicons.css'
import { AuthProvider } from './AuthContext/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>,
)
