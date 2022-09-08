import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './calculator/App';
import SofatutorTeams from './sofatutor_teams/App';
import Welcome from './welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}>
        <Route path="calculator" element={<Calculator />}/>
        <Route path="sofatutorteams" element={<SofatutorTeams />}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
