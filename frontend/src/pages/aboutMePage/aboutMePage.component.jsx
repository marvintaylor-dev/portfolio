import React from 'react'

import './aboutMePage.styles.scss'

import Title from '../../components/section_title/section_title.components'
import Button from '../../components/button/button.components'
import SectionInfo from '../../components/section-info/section-info.component'
import Headshot from '../../assets/images/illustrated-headshot2.png'

const AboutMePage = () => {
    return (
        <section className="container height-100vh center">
            <div className="center about-me-content gap-5">
                <div className="about-me-container">
                    <Title title="About Me" />
                    <SectionInfo>
                        Hi! My name is Marvin. I'm a software developer and professional scrum master. I have an entreprenurial spirit and I love developing products, strategizing about improving the user experience, and making sure everyone is healthy, happy, and fulfilled while we get there.
                        <br />
                        <br />
                        I'm always excited to work cross-functionally whether it be collaborating on wireframes and detailed mockups, writing acceptance criteria, facilitating meetings, or contributing code. 
                        {/* I love being able to use my visual creativity on front-end work whether it be a designing a custom illustration, UI element, or cool parallax effect. On the other hand, data architecture and constructing APIs is also fascinating in its own right. */}
                        <br />
                        <br />
                        As a former clinical social worker and teacher I am driven by continuous improvement. Whether it's the improvement of a person, product or system.
                        <br />
                        <br />
                        I LIVE FOR making things better and I bring that helping and collaborative spirit with me into every project I delve into and every team I work with.
                    </SectionInfo>

                    <div className="width-200 mt-3">
                        <Button url="/resume">Resume</Button>
                    </div>
                </div>
                <div className="circle">
                    <img className="heroImg" src={Headshot} alt="Headshot" />
                </div>

            </div>
        </section>
    )
}

export default AboutMePage;