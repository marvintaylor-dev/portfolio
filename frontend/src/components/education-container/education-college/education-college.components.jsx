import React from 'react';

import './education-college.styles.scss'

const College = () => (
    <div className="college-class-container">
        <section>
            <div className="img-container">
                <img src='https://www.logolynx.com/images/logolynx/6c/6c18b4f7813f8bbacb28550f534a26c2.jpeg' alt="College-Logo" className="college-logo" />
            </div>
            <div className="degree-year-container">
                <div className="degree-year-sectionOne">
                    <div className="degree-heading">Degree</div>
                    <div className="degree-name">Masters of Social Work</div>
                </div>
                <div className="degree-year-sectionTwo">
                    <div className="year-heading">Year</div>
                    <div className="year">2013</div>
                </div>
            </div>
        </section>
        <section>
            <div className="img-container">
                <img src='https://cdn.freelogovectors.net/wp-content/uploads/2020/10/middle-tennessee-state-university-logo-mtsu.png' alt="College-Logo" className="college-logo" />
            </div>

            <div className="degree-year-container">
                <div className="degree-year-sectionOne">
                    <div className="degree-heading">Degree</div>
                    <div className="degree-name">Bachelors of Social Work</div>
                </div>
                <div className="degree-year-sectionTwo">
                    <div className="year-heading">Year</div>
                    <div className="year">2011</div>
                </div>
            </div>
        </section>

    </div>
)

export default College;