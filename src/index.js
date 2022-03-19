import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.onload = function() {
  document.getElementById('h1-mask').classList.add('l-style');
  document.getElementById('h2-mask').classList.add('l-style');
  document.getElementById('btn-mask').classList.add('l-style');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
