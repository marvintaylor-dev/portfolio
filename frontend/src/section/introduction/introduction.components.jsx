import React, { useEffect, useRef } from 'react';

import './introduction.styles.scss';
import TempHero from '../../assets/images/illustrated-headshot.png'
import Resume from '../../pages/resume/resume.component'
import Scroll from '../../components/scroll/scroll.components'
import Button from '../../components/button/button.components'

import { gsap } from "../../assets/gsap/gsap";




const Introduction = () => {
    const boxRef = useRef();

    useEffect(() => {
        gsap.from(
            boxRef.current,
            {
                opacity: 0,
                y: 100,
                duration: 1
            });
    });

    return (
        <>
            <div className="container center">
                <div className="introduction-container" id="home">
                    <section className="introduction-message">
                        <header className="introduction-heading">
                            <div className="introduction-message__name">Marvin Taylor</div>
                            <div className="introduction-message__job-title">Software Developer</div>
                        </header>
                        <p className="introduction-message__welcome">
                            Hello! Welcome to my portfolio. I strive to provide a great user experience
                            for projects that matter.
                        </p>
                        <div className="flex-left">
                            <Button url='/resume'>Resume</Button>
                        </div>
                        {/* <a href="#" target="_blank">
                    Resume</a> */}
                    </section>
                    <div className="circle" ref={boxRef}>
                        <img className="heroImg" src={TempHero} alt="Me" />
                    </div>
                </div>
            </div>
            <Scroll />
        </>
    )
}

export default Introduction;