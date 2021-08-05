import React from 'react';

import './contact.styles.scss'
import FormInput from '../../components/form-input/form-input.components'
import TextAreaInput from '../../components/textarea-input/textarea.components'



class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="contact-container" id="contact">
                <div className="contact-title">CONTACT ME</div>
                <div className="contact-page-contents">
                    <div className="contact-form-container">
                        <FormInput
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            label='Name'
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='Email'
                            required
                        />
                        <FormInput
                            type='text'
                            name='subject'
                            value={subject}
                            onChange={this.handleChange}
                            label='Subject'
                            required
                        />
                        <TextAreaInput
                            type='textarea'
                            name='message'
                            value={message}
                            onChange={this.handleChange}
                            label='Message'
                            required
                        />
                        <button className='msg-btn'>
                            Send Message
                        </button>
                    </div>
                    <div className="contact-weblinks">
                        <div className="contact-card">
                            <h3>Social Media</h3>
                            <a href="https://github.com/marvintaylor-dev/">Github Code</a>
                            <a href="https://www.linkedin.com/in/marvin-taylor-dev/">Linked In</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;