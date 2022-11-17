import './App.css';
import React from 'react';
import Sidebar from './components/sidebar';
import AccountDashboard from './pages/accountDashboard';
import CropModelBoard from './pages/cropModelBoard';
import SuggestionBoard from './pages/suggestionBoard';
import Form from './pages/form';
import Grid from './pages/grid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <header>
        <h1 className='App'>Crop Planner</h1>
        <script src="https://kit.fontawesome.com/1bee948766.js" crossOrigin="anonymous"></script>

      </header>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/accountDashboard' element={<AccountDashboard/>}/>
            <Route path='/cropModelBoard' element={<CropModelBoard/>}/>
            <Route path='/suggestionBoard' element={<SuggestionBoard/>}/>
            <Route path='/grid' element={<Grid/>}/>
            <Route path='/form' element={<Form/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;