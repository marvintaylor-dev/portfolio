import React from 'react';
import axios from 'axios';

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

    handleSubmit = event => {
        event.preventDefault()

        axios({
            method: "POST",
            url: "http://localhost:4000/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send")
            }
        })
    }

    resetForm = () => {
        this.setState({ name: '', email: '', message: '', subject: '' })
    }


    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="contact-container" id="contact">
                <div className="contact-title">CONTACT ME</div>
                {/* pipeline pro contact form */}
                {/*  <iframe src="https://msgsndr.com/widget/form/aQlEYGLE7OUBYhddqtjg" title="contact" style={{ border: 'none', width: '100%', height: '400px' }} scrolling="no" id="aQlEYGLE7OUBYhddqtjg"></iframe> */}
                <div className="contact-page-contents">
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">

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
}

export default Contact;