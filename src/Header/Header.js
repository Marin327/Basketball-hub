import React from 'react';
import { FaCalendarAlt, FaClipboardList, FaFutbol, FaHome, FaNewspaper, FaPhoneAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><FaHome /> Home</Link></li>
                    <li><Link to="/News"><FaNewspaper /> News</Link></li>
                    <li><Link to="/Players"><FaUsers /> Players</Link></li>
                    <li><Link to="/BasketballCourtList"><FaFutbol /> Basketball Courts</Link></li>
                    <li><Link to="/MatchResults"><FaClipboardList /> Match Results</Link></li>
                    <li><Link to="/Contacts"><FaPhoneAlt /> Contacts</Link></li>
                    <li><Link to="/BasketballMatchCalendar"><FaCalendarAlt /> Basketball Match Calendar</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;