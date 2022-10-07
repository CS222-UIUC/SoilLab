import './App.css';
import React from 'react';
import Sidebar from './components/sidebar';
import AccountDashboard from './pages/accountDashboard';
import CropModelBoard from './pages/cropModelBoard';
import SuggestionBoard from './pages/suggestionBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crop Planner</h1>
        <script src="https://kit.fontawesome.com/1bee948766.js" crossOrigin="anonymous"></script>

      </header>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/accountDashboard' element={<AccountDashboard/>}/>
            <Route path='/cropModelBoard' element={<CropModelBoard/>}/>
            <Route path='/suggestionBoard' element={<SuggestionBoard/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
