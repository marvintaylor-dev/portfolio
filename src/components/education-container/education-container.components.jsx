import React from 'react'

import './education-container.styles.scss'
import Udemy from './education-udemy/education-udemy.components'
import College from './education-college/education-college.components'


const EducationContainer = ({ institution, type, ...otherProps }) => (
    <div className="individual-education-components">

        {
            institution === 'udemy' ? <Udemy {...otherProps} /> : null
        }

        <div className="college-section">
            {
                type === 'college' ? <College {...otherProps} /> : null
            }
        </div>

    </div>
)


export default EducationContainer;