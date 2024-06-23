import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BasketballCourtsList from './BasketballCourtList/BasketballCourtList';
import BasketballMatchCalendar from './BasketballMatchCalendar/BasketballMatchCalendar';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Home from './Home/Home';
import MatchDetails from './MatchDetails/MatchDetails';
import MatchResults from './MatchResults/MatchResults';
import News from './News/News';
import Players from './Players/Players';
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/matchresults" element={<MatchResults />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/basketballcourtlist" element={<BasketballCourtsList />} />
                    <Route path="/matchdetails" element={<MatchDetails />} />
                    <Route path="/basketballmatchcalendar" element={<BasketballMatchCalendar />} />
                    <Route path="/players" element={<Players />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;