import './App.css';
import React from 'react';
import Sidebar from './components/sidebar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Reset from './pages/Reset/Reset';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CropModelBoard from './pages/cropModelBoard';
import SuggestionBoard from './pages/suggestionBoard';
import Form from './pages/form';
import Grid from './pages/grid';
import Dropdown from './pages/dropdown';
import { auth } from "./pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, _loading, _error] = useAuthState(auth);
  return (
    <div>

      <header>
        <h1 className='App'>Crop Planner</h1>
        <script src="https://kit.fontawesome.com/1bee948766.js" crossOrigin="anonymous"></script>

      </header>
      <BrowserRouter>
        {user && <Sidebar></Sidebar>}
          <Routes>
            <Route path='/' element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path='/cropModelBoard' element={<CropModelBoard/>}/>
            <Route path='/suggestionBoard' element={<SuggestionBoard/>}/>
            <Route path='/grid' element={<Grid/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/dropdown' element={<Dropdown/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;