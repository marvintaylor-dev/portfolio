import React from 'react'


import './scroll.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Scroll = () => {


    return (
        <div className="center">
            <div className="scroll_container">
                <div className="scroll_text">Scroll</div>
                <FontAwesomeIcon size="2x" className="arrowDown" icon="angle-double-down" />
            </div>
        </div>
    )
}

export default Scroll;