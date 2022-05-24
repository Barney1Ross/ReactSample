import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sample from './js files/sample';
import Myself from './js files/myself';
import reportWebVitals from './reportWebVitals';
import Fb from './js files/fb';
import Form from './js files/form';
import ActionLink from './js files/Func';
import Menuapp from './js files/menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menuapp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
