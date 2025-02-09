import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import StartPage from './components/pages/StartPage';
import ResidentHomePage from './components/pages/resident/ResidentHomePage';
import CaregiverHomePage from './components/pages/caregiver/CaregiverHomePage';
import CaregiverSearchPage from './components/pages/caregiver/CaregiverSearchPage';

import './App.css';



const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/resident_homepage" element={<ResidentHomePage />} />
                    <Route path="/caregiver_homepage" element={<CaregiverHomePage />} />
                    <Route path = "/caregiver_search" element = {<CaregiverSearchPage />} />
                    
                </Routes>
            </div>
        </Router>
    );
    
}

export default App;
