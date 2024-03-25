import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Layout from './components/Layout'
import 'primereact/resources/themes/arya-blue/theme.css'
import 'primeicons/primeicons.css'
import { AuthProvider } from './AuthContext/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Layout >
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>,
)
