import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID; 
ReactPixel.init(PIXEL_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)