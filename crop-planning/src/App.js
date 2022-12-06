import './App.css';
import React from 'react';
//import Sidebar from './components/sidebar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Reset from './pages/Reset/Reset';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CropModelBoard from './pages/cropModelBoard';
import SuggestionBoard from './pages/suggestionBoard';
import Form from './pages/form';
import { Grid } from './pages/grid';
import Footer from './components/Footer/Footer';
import Dropdown from './pages/dropdown';
import { auth } from "./pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
//import Sidebar from './components/Sidebar/Sidebar';
import Sidebar from './components/sidebar';

function App() {
  const [user, _loading, _error] = useAuthState(auth);
  return (
    <div>

      <header>
        <script src="https://kit.fontawesome.com/1bee948766.js" crossOrigin="anonymous"></script>

      </header>
      <BrowserRouter>
        <Sidebar/>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path='/cropModelBoard' element={<CropModelBoard/>}/>
            <Route path='/suggestionBoard' element={<SuggestionBoard/>}/>
            <Route path='/grid' element={<Grid/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/dropdown' element={<Dropdown/>}/>
            <Route path='/about' element={<About />} />
          </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;