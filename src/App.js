import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
