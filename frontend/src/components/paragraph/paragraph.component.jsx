import React from 'react'

import './paragraph.styles.scss'



const Paragraph = ({ content, title }) => {

    let text = content.split(/\r\n|\n|\r/gm).map(line => {
        return line
    })

    return (
        <>
            <h4 className="subsection-title">{title}</h4>
            <p className="subsection-paragraph">{text}</p>
        </>
    )
}

export default Paragraph;
