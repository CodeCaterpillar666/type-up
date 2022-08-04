import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Gallery, IGallery } from './components/Gallery/index'

const listOfDicts = [
  {
    'name': 'cet4',
    'description': 'cet4',
    'cnt': 100,
  },
  {
    'name': 'cet4',
    'description': 'cet4',
    'cnt': 100,
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Gallery listOfDicts={listOfDicts}></Gallery> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
