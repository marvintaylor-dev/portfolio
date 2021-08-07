import React from 'react';

import './textarea.styles.scss';

const TextAreaInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <textarea rows="10" className='textarea-input' onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} textarea-input-label`}>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default TextAreaInput;