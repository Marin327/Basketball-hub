import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Импортирайте App.css, където се предполага че има нужните стилове
import backgroundImage from '../assets/images/2.jpg';

const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

const BasketballMatchCalendar = () => {
    const matches = [
        { id: 1, date: '2024-06-20', name: 'Los Angeles Lakers vs. Boston Celtics', location: 'Staples Center, Los Angeles, CA', description: 'Regular season game between Lakers and Celtics.' },
        { id: 2, date: '2024-07-05', name: 'Chicago Bulls vs. Miami Heat', location: 'United Center, Chicago, IL', description: 'Conference semifinals matchup between Bulls and Heat.' },
        { id: 3, date: '2024-07-15', name: 'Golden State Warriors vs. Toronto Raptors', location: 'Chase Center, San Francisco, CA', description: 'Finals rematch between Warriors and Raptors.' },
        { id: 4, date: '2024-08-01', name: 'Houston Rockets vs. Dallas Mavericks', location: 'Toyota Center, Houston, TX', description: 'Pre-season exhibition game.' },
        { id: 5, date: '2024-08-10', name: 'New York Knicks vs. Brooklyn Nets', location: 'Madison Square Garden, New York, NY', description: 'City rivalry game.' },
        { id: 6, date: '2024-08-20', name: 'Philadelphia 76ers vs. Milwaukee Bucks', location: 'Wells Fargo Center, Philadelphia, PA', description: 'Eastern Conference showdown.' },
        { id: 7, date: '2024-09-05', name: 'Denver Nuggets vs. Portland Trail Blazers', location: 'Ball Arena, Denver, CO', description: 'Western Conference battle.' },
        { id: 8, date: '2024-09-15', name: 'Phoenix Suns vs. Utah Jazz', location: 'Footprint Center, Phoenix, AZ', description: 'Southwest Division clash.' },
        { id: 9, date: '2024-09-25', name: 'Oklahoma City Thunder vs. Memphis Grizzlies', location: 'Chesapeake Energy Arena, Oklahoma City, OK', description: 'Midwest showdown.' },
        { id: 10, date: '2024-10-05', name: 'Indiana Pacers vs. Atlanta Hawks', location: 'Gainbridge Fieldhouse, Indianapolis, IN', description: 'Central Division match.' },
        { id: 11, date: '2024-10-15', name: 'Charlotte Hornets vs. Miami Heat', location: 'Spectrum Center, Charlotte, NC', description: 'Southeast Division game.' },
        { id: 12, date: '2024-11-01', name: 'San Antonio Spurs vs. Dallas Mavericks', location: 'AT&T Center, San Antonio, TX', description: 'Texas rivalry game.' },
        { id: 13, date: '2024-11-10', name: 'Portland Trail Blazers vs. Los Angeles Lakers', location: 'Moda Center, Portland, OR', description: 'Western Conference matchup.' },
        { id: 14, date: '2024-11-20', name: 'Brooklyn Nets vs. Boston Celtics', location: 'Barclays Center, Brooklyn, NY', description: 'Atlantic Division showdown.' },
        { id: 15, date: '2024-12-05', name: 'Toronto Raptors vs. Chicago Bulls', location: 'Scotiabank Arena, Toronto, ON', description: 'North Division clash.' },
    ];

    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleMatchClick = (match) => {
        if (selectedMatch && selectedMatch.id === match.id) {
            setSelectedMatch(null);
        } else {
            setSelectedMatch(match);
        }
    };

    return (
        <div className="match-calendar" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2>Basketball Matches Calendar 2024</h2>
            <ul className='calendar-list'>
                {matches.map((match) => (
                    <li key={match.id} onClick={() => handleMatchClick(match)}>
                        <div>
                            <span className="match-date">{formatDate(match.date)}</span>
                            <span className="match-name">{match.name}</span>
                        </div>
                        {selectedMatch && selectedMatch.id === match.id && (
                            <div className="match-details-container show">
                                <h3>{match.name}</h3>
                                <p><strong>Date:</strong> {formatDate(match.date)}</p>
                                <p><strong>Location:</strong> {match.location}</p>
                                <p>{match.description}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="button-container">
                <Link to='/' className="back-button">Back</Link>
            </div>
        </div>
    );
};

export default BasketballMatchCalendar;