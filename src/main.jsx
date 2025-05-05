// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import  ReactDom from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'




// ReactDom.createRoot(document.getElementById('root')).render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
