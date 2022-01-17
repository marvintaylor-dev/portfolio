import React from 'react'

/* classNames found in app.css */
const SectionInfo = ({ title, ...props }) => {
    return (
        <div className="subsection">
            <h4 className="subsection-title">{title}</h4>
            <p className="subsection-paragraph">
                {props.children}
            </p>
        </div>
    )
}

export default SectionInfo;