import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Square } from './lego/Square';
import { Triangle } from './lego/Triangle';
import { Hexagon } from './lego/Hexagon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Square 
      size={200} 
      color="orangered"
      place={[250, 300]} />

    <Triangle 
      size={200} 
      color="lime"
      place={[150, 200]} />

    <Hexagon 
    size={200} 
    color="blue"
    place={[50, 100]}/>

  </React.StrictMode>
);

reportWebVitals();
