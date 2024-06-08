import React from 'react';
import Fade from 'react-reveal/Fade';
import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {
    const cardStyles = {
        backgroundColor: '#e0f7fa',
        transition: 'background-color 0.3s ease',
    };

    const hoverStyles = {
        backgroundColor: '#80deea',
    };

    return (
        <Fade bottom>
            <div
                key={id}
                className="education-card"
                style={cardStyles}
                onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyles.backgroundColor}
                onMouseOut={e => e.currentTarget.style.backgroundColor = cardStyles.backgroundColor}
            >
                <div className="education-details">
                    <h6>{startYear} - {endYear}</h6>
                    <h4>{course}</h4>
                    <h5>{institution}</h5>
                </div>
            </div>
        </Fade>
    );
}

export default EducationCard;
