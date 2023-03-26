import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ! React-router:
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'; /* lo que usare */

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);

/* 

 <React.StrictMode>
        <App />
</React.StrictMode>,
*/
