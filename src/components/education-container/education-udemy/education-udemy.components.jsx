import React from 'react'

import './education-udemy.styles.scss'

const Udemy = ({ instructor, course, year }) => (
    <div className="udemy-class-container">
        <div className="instructor-course-container">
            <div className="instructor-course-sectionOne">
                <div className="instructor-heading">Instructor</div>
                <div className="instructor-name">{instructor}</div>
            </div>
            <div className="instructor-course-sectionTwo">
                <div className="course-heading">Course</div>
                <div className="course-name">{course}</div>
            </div>
            <div className="instructor-course-sectionThree">
                <div className="year-heading">Year</div>
                <div className="year">{year}</div>
            </div>
        </div>
    </div>
)

export default Udemy;