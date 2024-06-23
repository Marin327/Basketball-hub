import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MatchResults = ({ onBack }) => {
    const matchResults = [
        { id: 1, date: '2024-06-15', team1: 'Los Angeles Lakers', team2: 'Boston Celtics', score: '102-99' },
        { id: 2, date: '2024-06-14', team1: 'Golden State Warriors', team2: 'Miami Heat', score: '115-110' },
        { id: 3, date: '2024-06-13', team1: 'Chicago Bulls', team2: 'New York Knicks', score: '98-104' },
        { id: 4, date: '2024-06-12', team1: 'Houston Rockets', team2: 'Brooklyn Nets', score: '120-119' },
        { id: 5, date: '2024-06-11', team1: 'Dallas Mavericks', team2: 'Phoenix Suns', score: '107-101' },
        { id: 6, date: '2024-06-10', team1: 'Philadelphia 76ers', team2: 'San Antonio Spurs', score: '99-97' },
        { id: 7, date: '2024-06-09', team1: 'Denver Nuggets', team2: 'Toronto Raptors', score: '113-108' },
        { id: 8, date: '2024-06-08', team1: 'Utah Jazz', team2: 'Orlando Magic', score: '112-105' },
        { id: 9, date: '2024-06-07', team1: 'Washington Wizards', team2: 'Cleveland Cavaliers', score: '95-92' },
        { id: 10, date: '2024-06-06', team1: 'Atlanta Hawks', team2: 'Indiana Pacers', score: '110-107' }
    ];

    return (
        <motion.div
            className="match-results-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Match Results</h2>
            <ul className="match-results-list">
                {matchResults.map(match => (
                    <motion.li
                        key={match.id}
                        className="match-result"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="match-date">{match.date}</div>
                        <div className="match-teams">
                            <span>{match.team1}</span> vs <span>{match.team2}</span>
                        </div>
                        <div className="match-score">{match.score}</div>
                    </motion.li>
                ))}
            </ul>
            <Link to="/" className="back-button">Back</Link>
        </motion.div>
    );
};

export default MatchResults;