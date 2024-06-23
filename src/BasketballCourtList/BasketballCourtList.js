import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import court5Image from '../assets/images/24.jpeg';
import court7Image from '../assets/images/25.jpg';
import court4Image from '../assets/images/26.jfif';
import court3Image from '../assets/images/27.jpg';
import court2Image from '../assets/images/30.jpg';
import court1Image from '../assets/images/31.jpg';
import court8Image from '../assets/images/32.jfif';
import court6Image from '../assets/images/34.jpg';

const BasketballCourtList = () => {
    const [hoveredCourt, setHoveredCourt] = useState(null);

    const courts = [
        {
            image: court1Image,
            location: "Central Park, New York City",
            courts: 4,
            condition: "Newly renovated",
            features: [
                "Indoor courts available",
                "Located in a bustling area of NYC",
                "Modern facilities"
            ]
        },
        {
            image: court2Image,
            location: "Venice Beach, Los Angeles",
            courts: 3,
            condition: "Outdoor, beachside",
            features: [
                "Beautiful beach view",
                "Popular spot for streetball",
                "Open-air environment"
            ]
        },
        {
            image: court3Image,
            location: "Chicago, Illinois",
            courts: 5,
            condition: "Urban, city skyline view",
            features: [
                "Skyline view of downtown Chicago",
                "Public park facilities",
                "Ample parking nearby"
            ]
        },
        {
            image: court4Image,
            location: "London, United Kingdom",
            courts: 2,
            condition: "Historical, architectural charm",
            features: [
                "Historic site",
                "Architecturally significant",
                "Well-maintained grounds"
            ]
        },
        {
            image: court5Image,
            location: "Sydney, Australia",
            courts: 3,
            condition: "Outdoor, ocean view",
            features: [
                "Stunning ocean view",
                "Outdoor courts",
                "Nearby cafes and amenities"
            ]
        },
        {
            image: court6Image,
            location: "Miami, Florida",
            courts: 4,
            condition: "Tropical climate, vibrant atmosphere",
            features: [
                "Tropical climate year-round",
                "Vibrant basketball community",
                "Nearby entertainment options"
            ]
        },
        {
            image: court7Image,
            location: "Tokyo, Japan",
            courts: 6,
            condition: "Modern, bustling city",
            features: [
                "High-tech facilities",
                "Central location in Tokyo",
                "Popular spot for basketball enthusiasts"
            ]
        },
        {
            image: court8Image,
            location: "Rio de Janeiro, Brazil",
            courts: 3,
            condition: "Beachfront, scenic view",
            features: [
                "Beachfront location",
                "Scenic views of Rio's coastline",
                "Outdoor courts with ocean breeze"
            ]
        }
    ];

    const handleMouseEnter = (index) => {
        setHoveredCourt(index);
    };

    const handleMouseLeave = () => {
        setHoveredCourt(null);
    };

    return (
        <div className="courts-container">
            {courts.map((court, index) => (
                <div
                    key={index}
                    className="court"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={court.image} alt={`Court at ${court.location}`} className="court-image-small" />
                    <div className="court-details" style={{ display: hoveredCourt === index ? 'block' : 'none' }}>
                        <h2>{court.location}</h2>
                        <p><strong>Number of Courts:</strong> {court.courts}</p>
                        <p><strong>Condition:</strong> {court.condition}</p>
                        <div>
                            <strong>Features:</strong>
                            <ul>
                                {court.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            <Link to='/' className="back-button">Back</Link>
        </div>
    );
}

export default BasketballCourtList;
