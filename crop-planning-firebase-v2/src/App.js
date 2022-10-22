import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function App() {
  return (
    
    <div className="app">

      <header className="header">
        <h1>SoilLab</h1>
      </header>

      <div className="container">
      <Router>
      <header className="other">
        <Link to="/about">About</Link>
      </header>
        </Router>
        </div>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/about" element={<Dashboard />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
