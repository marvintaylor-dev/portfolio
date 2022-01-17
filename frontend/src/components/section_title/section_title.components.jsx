import React from 'react'

import './section_title.scss'

const Title = ({ title, id }) => {

    return (
        <h3 className="title" id={id} title={title}>{title}</h3>
    )
}

export default Title;