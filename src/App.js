import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import WritePage from './components/WritePage/WritePage.js';
import UserPage from './components/UserPage/UserPage.js';
import SingupPage from './components/UserPage/SignupPage/Signup.js';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<MainPage />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/user/singup" element={<SingupPage />} />
            </Routes>
        </Router>
    );
}

export default App;