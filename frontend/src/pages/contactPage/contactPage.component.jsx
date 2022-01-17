import React from 'react'

import './contactPage.styles.scss'
import FormInput from '../../components/form-input/form-input.components'
import TextAreaInput from '../../components/textarea-input/textarea.components'
import Title from '../../components/section_title/section_title.components'
import SectionInfo from '../../components/section-info/section-info.component'
import Button from '../../components/button/button.components'
import Headshot from '../../assets/images/illustrated-headshot.png'

const ContactPage = () => {
    return (
        <section className="container height-100vh center">
            <div className="center contact-me-content gap-5">
                <div className="contact-me-container">
                    <Title title="Contact Me" />
                    <SectionInfo>
                        555-555-5555
                    </SectionInfo>
                    <FormInput />
                    <TextAreaInput />
                    <div className="width-200 mt-3">
                        <Button url="/#">Submit</Button>
                    </div>
                </div>
                <div className="image-container">
                    <img className="medium-img contactMeImg" src={Headshot} alt="Headshot" />
                </div>

            </div>
        </section>
    )
}

export default ContactPage;