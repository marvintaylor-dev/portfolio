import React from 'react';

import './contact.styles.scss'

const Contact = () => (
    <div className="contact-container" id="contact">
        <div className="contact-title">CONTACT ME</div>
        <div className="contact-information-container">
            <div className="email-phone-container">
                <div className="contact-email">Email: marvin.taylor288@gmail.com</div>
                <div className="contact-phone">Phone: 931-539-8014</div>
            </div>
            <div className="contact-weblinks">
                <a href="https://github.com/marvintaylor-dev/">Github Code</a>
                <a href="https://www.linkedin.com/in/marvin-taylor-dev/">Linked In</a>
            </div>
        </div>
    </div>
)

export default Contact;