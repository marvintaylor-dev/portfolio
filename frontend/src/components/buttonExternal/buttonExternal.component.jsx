import React from 'react'

import './buttonExternal.styles.scss'


const ButtonExternal = ({ url, target, text, ...props }) => {
    return (
        <a
            href={url}
            target={target}
            rel="noreferrer"
            className="btn center background-blue"
            alt={`${props.children} button`}>
            {props.children}
        </a>
    );
}

export default ButtonExternal;
