import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileRegisteration from './components/ProfileRegistration';
import Profile from './components/Profile';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={ProfileRegisteration} />  
          <Route path="/profile" Component={Profile} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;