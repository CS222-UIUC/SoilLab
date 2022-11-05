import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <header className="App-Header">
        {/* <h1>SoilLab</h1> */}
        <Navbar />
        <script src="https://kit.fontawesome.com/1bee948766.js" crossOrigin="anonymous"></script>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;