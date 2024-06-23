import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../assets/images/10.jpg';

const News = () => {
    const [activeItemId, setActiveItemId] = useState(null);

    const news = [
        { id: 1, title: 'New Head Coach for Lakers', content: 'The Los Angeles Lakers have appointed a new head coach to lead the team for the upcoming season, aiming for a fresh start and better performance.' },
        { id: 2, title: 'Rookie Player Shines in First Game', content: 'In his debut game, rookie player John Doe scored an impressive 30 points, leading his team to victory and earning the MVP title of the game.' },
        { id: 3, title: 'Legendary Player Announces Retirement', content: 'After a glorious career spanning over two decades, basketball legend Michael Jordan has announced his retirement from professional basketball.' },
        { id: 4, title: 'Unexpected Upset in Playoffs', content: 'The underdog team managed to defeat the defending champions in a thrilling game, advancing to the next round of the playoffs.' },
        { id: 5, title: 'New Training Facility Opens', content: 'A state-of-the-art training facility has been opened, providing top-notch amenities and equipment for basketball players to enhance their skills.' },
        { id: 6, title: 'Charity Basketball Game Raises Funds', content: 'A charity basketball game featuring top NBA stars has raised millions of dollars for local community programs and youth development initiatives.' },
        { id: 7, title: 'Star Player Recovers from Injury', content: 'After months of rehabilitation, star player LeBron James is back on the court, ready to make a significant impact in the upcoming games.' },
        { id: 8, title: 'International Basketball Tournament Announced', content: 'An international basketball tournament will be held next summer, featuring teams from around the world competing for the championship title.' },
        { id: 9, title: 'Record-Breaking Game Attendance', content: 'The recent game between the Knicks and the Celtics saw a record-breaking attendance of over 20,000 fans, creating an electrifying atmosphere.' },
        { id: 10, title: 'New Rookie Drafted by Warriors', content: 'The Golden State Warriors have drafted a promising young rookie, expected to bring fresh energy and talent to the team.' },
    ];

    const handleItemClick = (id) => {
        setActiveItemId(activeItemId === id ? null : id);
    };

    return (
        <div className="news-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="news-list">
                {news.map(item => (
                    <div key={item.id} className={`news-item ${activeItemId === item.id ? 'active' : ''}`} onClick={() => handleItemClick(item.id)}>
                        <h3>{item.title}</h3>
                        {activeItemId === item.id && (
                            <div className="news-content active">
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link to="/" className="back-button">Back</Link>
        </div>
    );
}

export default News;