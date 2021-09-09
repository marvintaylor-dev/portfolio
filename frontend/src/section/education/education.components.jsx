import React from 'react'

import './education.styles.scss'

import EDUCATION_DATA from '../../section/education/education.data'

import UdemySection from '../../components/education-container/udemy-container/udemySection.components'
import College from '../../components/education-container/education-college/education-college.components'

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
            <div className="education-page" id="education">
                <div className="blue-box blue-box-left">
                    <div className="circle-left"></div>
                </div>
                <div className="blue-box blue-box-right">
                    <div className="circle-right"></div>
                </div>
                <div className="education-section-title">EDUCATION</div>
                <main>
                    <div className="udemy-information">
                        <div className="udemy-logo-container">
                            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy-logo" className="udemy-logo" />
                        </div>
                        <div className="all-education-components">
                            {educationData.map(({ id, ...otherProps }) => (
                                <UdemySection key={id} {...otherProps} />
                            ))}
                        </div>
                    </div>
                    <College />
                </main>
            </div>
        )
    }
}

export default Education;