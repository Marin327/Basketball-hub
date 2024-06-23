import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../assets/images/37.avif';
const TopPlayers = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const players = [
        {
            id: 1,
            name: 'LeBron James',
            age: 37,
            salary: '$41.2 million',
            titles: ['NBA Championships: 4'],
            location: 'Los Angeles, CA'
        },
        {
            id: 2,
            name: 'Kevin Durant',
            age: 33,
            salary: '$42.8 million',
            titles: ['NBA Championships: 2'],
            location: 'Brooklyn, NY'
        },
        {
            id: 3,
            name: 'Stephen Curry',
            age: 34,
            salary: '$45.8 million',
            titles: ['NBA Championships: 3'],
            location: 'San Francisco, CA'
        },
        {
            id: 4,
            name: 'Giannis Antetokounmpo',
            age: 28,
            salary: '$39 million',
            titles: ['NBA Championships: 1'],
            location: 'Milwaukee, WI'
        },
        {
            id: 5,
            name: 'James Harden',
            age: 33,
            salary: '$44.3 million',
            titles: ['NBA MVP: 1'],
            location: 'Brooklyn, NY'
        },
        {
            id: 6,
            name: 'Luka Dončić',
            age: 23,
            salary: '$10.2 million',
            titles: [],
            location: 'Dallas, TX'
        },
        {
            id: 7,
            name: 'Kawhi Leonard',
            age: 30,
            salary: '$34.4 million',
            titles: ['NBA Championships: 2'],
            location: 'Los Angeles, CA'
        },
        {
            id: 8,
            name: 'Anthony Davis',
            age: 29,
            salary: '$35.4 million',
            titles: ['NBA Championships: 1'],
            location: 'Los Angeles, CA'
        },
        {
            id: 9,
            name: 'Nikola Jokić',
            age: 27,
            salary: '$31.6 million',
            titles: ['NBA MVP: 1'],
            location: 'Denver, CO'
        },
        {
            id: 10,
            name: 'Damian Lillard',
            age: 31,
            salary: '$31.6 million',
            titles: [],
            location: 'Portland, OR'
        },
        {
            id: 11,
            name: 'Joel Embiid',
            age: 27,
            salary: '$31.6 million',
            titles: [],
            location: 'Philadelphia, PA'
        },
        {
            id: 12,
            name: 'Kyrie Irving',
            age: 30,
            salary: '$35.6 million',
            titles: ['NBA Championships: 1'],
            location: 'Brooklyn, NY'
        },
        {
            id: 13,
            name: 'Bradley Beal',
            age: 28,
            salary: '$34.5 million',
            titles: [],
            location: 'Washington, D.C.'
        },
        {
            id: 14,
            name: 'Jimmy Butler',
            age: 32,
            salary: '$34.3 million',
            titles: [],
            location: 'Miami, FL'
        },
        {
            id: 15,
            name: 'Devin Booker',
            age: 25,
            salary: '$31.6 million',
            titles: [],
            location: 'Phoenix, AZ'
        },
        {
            id: 16,
            name: 'Jayson Tatum',
            age: 23,
            salary: '$28.1 million',
            titles: [],
            location: 'Boston, MA'
        },
        {
            id: 17,
            name: 'Karl-Anthony Towns',
            age: 25,
            salary: '$31.6 million',
            titles: [],
            location: 'Minneapolis, MN'
        },
        {
            id: 18,
            name: 'Trae Young',
            age: 22,
            salary: '$6.5 million',
            titles: [],
            location: 'Atlanta, GA'
        },
        {
            id: 19,
            name: 'Russell Westbrook',
            age: 32,
            salary: '$44.2 million',
            titles: ['NBA MVP: 1'],
            location: 'Los Angeles, CA'
        },
        {
            id: 20,
            name: 'Zion Williamson',
            age: 21,
            salary: '$10.2 million',
            titles: [],
            location: 'New Orleans, LA'
        },
        {
            id: 21,
            name: 'Chris Paul',
            age: 36,
            salary: '$30.1 million',
            titles: [],
            location: 'Phoenix, AZ'
        },
        {
            id: 22,
            name: 'Paul George',
            age: 31,
            salary: '$39.3 million',
            titles: [],
            location: 'Los Angeles, CA'
        },
        {
            id: 23,
            name: 'Donovan Mitchell',
            age: 24,
            salary: '$28.1 million',
            titles: [],
            location: 'Salt Lake City, UT'
        },
        {
            id: 24,
            name: 'Ben Simmons',
            age: 24,
            salary: '$33 million',
            titles: [],
            location: 'Philadelphia, PA'
        },
        {
            id: 25,
            name: 'Jamal Murray',
            age: 24,
            salary: '$29.5 million',
            titles: [],
            location: 'Denver, CO'
        },
        {
            id: 26,
            name: 'CJ McCollum',
            age: 29,
            salary: '$29.3 million',
            titles: [],
            location: 'Portland, OR'
        },
        {
            id: 27,
            name: 'DeMar DeRozan',
            age: 31,
            salary: '$27.7 million',
            titles: [],
            location: 'Chicago, IL'
        },
        {
            id: 28,
            name: 'Rudy Gobert',
            age: 28,
            salary: '$35.3 million',
            titles: [],
            location: 'Salt Lake City, UT'
        },
        {
            id: 29,
            name: 'Kristaps Porzingis',
            age: 26,
            salary: '$31.6 million',
            titles: [],
            location: 'Dallas, TX'
        },
        {
            id: 30,
            name: 'Brandon Ingram',
            age: 24,
            salary: '$27.3 million',
            titles: [],
            location: 'New Orleans, LA'
        },

    ];

    const handlePlayerClick = (playerId) => {
        setSelectedPlayer(playerId === selectedPlayer ? null : playerId);
    };

    return (
        <div className="top-players-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2>Top 30 Basketball Players</h2>
            <div className="players-list">
                {players.map(player => (
                    <div key={player.id} className={`player-card ${player.id === selectedPlayer ? 'active' : ''}`} onClick={() => handlePlayerClick(player.id)}>
                        <h3>{player.name}</h3>
                        {/* Тук може да добавите други детайли за играчите */}
                        {player.id === selectedPlayer && (
                            <div className="player-info">
                                <p><strong>Age:</strong> {player.age}</p>
                                <p><strong>Salary:</strong> {player.salary}</p>
                                <p><strong>Location:</strong> {player.location}</p>
                                <p><strong>Titles:</strong> {player.titles.join(', ')}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link to='/' className='back-button'>Back</Link>
        </div>
    );
};

export default TopPlayers;