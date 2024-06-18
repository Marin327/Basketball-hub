import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>

        </Router>

    );
}

export default App;