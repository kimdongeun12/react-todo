import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import GlobalStyles from './assets/styles/GlobalStyles';
import MixInStyles from './assets/styles/MixInStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <MixInStyles />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
