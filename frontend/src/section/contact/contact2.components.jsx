import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '@formspree/react'

import './contact.styles.scss'
import FormInput from '../../components/form-input/form-input.components'
import TextAreaInput from '../../components/textarea-input/textarea.components'


const Contact = ({ label }) => {

    const { name, email, subject, message } = useState('');
    const [state, handleSubmit] = useForm('{mjvjpblb}');
    const [change, setChange] = useState('')


    if (state.succeeded) {
        return <div>Message Sent Successfully!</div>
    }


    return (
        <div className="contact-container" id="contact">
            <div className="contact-title">CONTACT ME</div>
            {/* pipeline pro contact form */}
            {/*  <iframe src="https://msgsndr.com/widget/form/aQlEYGLE7OUBYhddqtjg" title="contact" style={{ border: 'none', width: '100%', height: '400px' }} scrolling="no" id="aQlEYGLE7OUBYhddqtjg"></iframe> */}
            <div className="contact-page-contents">
                <form id="contact-form" onSubmit={handleSubmit} method="POST">

                    <div className="contact-form-container">
                        <FormInput
                            type='text'
                            name='name'
                            value={name}
                            onChange={setChange}
                            label='Name'
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            onChange={setChange}
                            label='Email'
                            required
                        />
                        <FormInput
                            type='text'
                            name='subject'
                            value={subject}
                            onChange={setChange}
                            label='Subject'
                            required
                        />
                        <TextAreaInput
                            type='textarea'
                            name='message'
                            value={message}
                            onChange={setChange}
                            label='Message'
                            required
                        />
                        <button type="submit" className='msg-btn'>
                            Send Email
                            </button>
                    </div>
                </form>
                <div className="contact-weblinks">
                    <div className="contact-card">
                        <h3>My Social Media</h3>
                        <a href="https://github.com/marvintaylor-dev/">Github Code</a>
                        <a href="https://www.linkedin.com/in/marvin-taylor-dev/">Linked In</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

