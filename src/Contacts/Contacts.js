import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import backgroundImage from '../assets/images/20.jpg';
const Contact = () => {
    return (
        <div className="news-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2>Contact Us:</h2>
            <h3>For all inquiries, suggestions, or need for assistance.</h3>
            <p>
                Email: <a href="mailto:info@marin_93@abv.bg">info@marin_93@abv.bg</a><br />
                Phone: 888 666 444<br />
                Address: 123 Main Street, Sofia, Bulgaria
            </p>
            <div className="social-links">
                <a href="https://www.facebook.com/fitnesdeluxe&spa" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/fitnedeluxe&spa" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://twitter.com/fitnesdeluxe&spa" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <Link to="/" className="back-button">Back</Link>
        </div>
    );
}

export default Contact;
