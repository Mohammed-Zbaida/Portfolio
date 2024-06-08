import React  from 'react';
import './Education.css';
import EducationCard from './EducationCard';
import { motion } from "framer-motion";
import man from "../../assets/svg/Education/dev.svg";
import { educationData } from './educationData';

function Education() {
    return (
        <div className="education" id="resume">
            <div className="education-body">
                <div className="education-description">
                    <h1 style={{color: "#10b981"}}>Education</h1>
                    {educationData.map((edu) => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <motion.div
                    className="svg"
                    animate={{ translateY: [-20, 10, -20, 10] }}
                    transition={{ yoyo: Infinity, duration: 5 }}
                >
                    <img src={man} alt="Developer" />
                </motion.div>
            </div>
        </div>
    );
}

export default Education;
