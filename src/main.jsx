import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Layout from './components/Layout'
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primeicons/primeicons.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <AppRoutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
