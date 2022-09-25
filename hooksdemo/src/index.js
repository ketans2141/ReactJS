import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { CountClass } from './components/CountClass';
// import { CountHooks } from './components/CountHooks';
// import {CounterHooks} from './components/CounterHooks'
import reportWebVitals from './reportWebVitals';
// import { StateWithOjects } from './components/StateWithObjects';
// import { StateWithArray } from './components/StateWithArray';
import { TitleChangeHooks } from './components/TitleChangeHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CountClass />
    <CountHooks /> */}
    {/* <CounterHooks /> */}
    {/* <StateWithOjects /> */}
    {/* <StateWithArray /> */}
    <TitleChangeHooks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
