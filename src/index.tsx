import React from 'react';
import ReactDOM from 'react-dom';

import App from './Routes/App';
import SettingsApp from './Routes/SettingsApp';

import reportWebVitals from './reportWebVitals';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import './Styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="" element={<App/>} />
        <Route path="/settings" element={<SettingsApp/>} />
      </Routes>
    </MemoryRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
