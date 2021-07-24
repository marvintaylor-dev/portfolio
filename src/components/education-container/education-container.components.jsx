import React from 'react'

import './education-container.styles.scss'
import Udemy from './education-udemy/education-udemy.components'
import College from './education-college/education-college.components'


const EducationContainer = ({ institution, type, ...otherProps }) => (
    <div>
        <div>
            {
                institution === 'udemy' ? <Udemy {...otherProps} /> : null
            }
        </div>
        <div>
            {
                type === 'college' ? <College {...otherProps} /> : null
            }
        </div>
    </div>
)


export default EducationContainer;