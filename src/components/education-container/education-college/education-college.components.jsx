import React from 'react';

import './education-college.styles.scss'

const College = ({ degree, year, image }) => (
    <div className="college-class-container">
        <img src={image} alt="College-Logo" className="college-logo" />
        <div className="degree-year-container">
            <div className="degree-year-sectionOne">
                <div className="degree-heading">Degree</div>
                <div className="degree-name">{degree}</div>
            </div>
            <div className="degree-year-sectionTwo">
                <div className="year-heading">Year</div>
                <div className="year">{year}</div>
            </div>
        </div>
    </div>
)

export default College;