// ✅ Entry point for React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // ✅ Optional: performance metrics

// ✅ Create React root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Log web vitals (optional)
reportWebVitals(console.log);
