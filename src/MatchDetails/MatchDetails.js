import PropTypes from 'prop-types';
import React from 'react';

const MatchDetails = ({ match }) => {
    return (
        <div className="match-details">
            <h2>{match.name}</h2>
            <p><strong>Date:</strong> {match.date}</p>
            <p><strong>Location:</strong> {match.location}</p>
            <p><strong>Description:</strong> {match.description}</p>
        </div>
    );
};

MatchDetails.propTypes = {
    match: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default MatchDetails;