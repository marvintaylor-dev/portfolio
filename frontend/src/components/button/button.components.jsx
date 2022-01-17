import React from 'react'

import './button.styles.scss'

import { Link } from 'react-router-dom'

const layoutEffect = () => {
    window.scrollTo(0, 0)
};

const Button = ({ url, target, text, ...props }) => {
    return (
        <Link
            to={url}
            target={target}
            rel="noreferrer"
            className="btn center background-blue"
            onClick={layoutEffect}
            alt={`${props.children} button`}>{props.children}</Link>
    );
}

export default Button;
