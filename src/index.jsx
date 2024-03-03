import React from 'react'
import ReactDOM from 'react-dom/client'
import { Version } from "./screens/Version";
import "../global.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Version />
  </React.StrictMode>,
)
