import React from 'react'

import './education.styles.scss'

import EDUCATION_DATA from '../../section/education/education.data'

import EducationContainer from '../../components/education-container/education-container.components'

class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            educationData: EDUCATION_DATA
        }
    }

    render() {
        const { educationData } = this.state;
        return (
            <div className="education-page">
                <div className="education-section-title">EDUCATION</div>
                <div className="udemy-logo-container">
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy-logo" className="udemy-logo" />
                </div>
                {
                    educationData.map(({ id, ...otherProps }) => (
                        <EducationContainer key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default Education;