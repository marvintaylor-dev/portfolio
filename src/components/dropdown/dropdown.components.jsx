import React from 'react';

import './dropdown.styles.scss';

import Links from '../../components/links/links.components'




const Dropdown = ({ open }) => {
    return (
        <div className={`${open ? 'change' : ''} dropdown-container`}>
            <Links open={open} />
        </div>
    )
}

export default Dropdown