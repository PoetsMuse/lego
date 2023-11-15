import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Square } from './lego/Square';
import { Triangle } from './lego/Triangle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <Square 
    size={200} 
    color="orangered"
    place={[50, 100]} />

   <Triangle 
    size={50} 
    color="lime"
    place={[150, 50]} />
  
  </React.StrictMode>
);

reportWebVitals();
