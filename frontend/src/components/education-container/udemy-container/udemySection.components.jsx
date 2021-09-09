import React from 'react'

import './udemySection.styles.scss'
import Udemy from '../education-udemy/education-udemy.components'



const UdemySection = ({ institution, type, ...otherProps }) => (
    <div className="udemy-combined-components">
        <Udemy {...otherProps} />
    </div>
)


export default UdemySection;