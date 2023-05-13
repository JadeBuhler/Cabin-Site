import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CalendarPage from './containers/CalendarPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

App.use(express.static(__dirname));

App.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

root.render(
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="home" element={<HomePage />} />
        <Route path="calendar" element={<CalendarPage/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
