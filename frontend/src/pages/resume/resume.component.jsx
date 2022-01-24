import React from 'react'

import './resume.styles.scss'
import ResumePDF from '../../assets/resume/Resume.pdf'

import Title from '../../components/section_title/section_title.components'
import SectionInfo from '../../components/section-info/section-info.component'
import ResumeIllustration from '../../assets/images/workspace-blue.png'


const Resume = () => {
    return (
        <section className="container center project-hero">
            <div className="center resume-content">
                <div className="resume-container">
                    <Title title="Resume" />
                    <SectionInfo>
                        Thank you for your interest. Below you will find a downloadable copy of my resume along with a "view only" option for your convenience.
                    </SectionInfo>
                    <div className="resume-buttons">
                        <a className="downloadBtn white" href={ResumePDF} download>Download</a>
                        <a className="downloadBtn" href={ResumePDF} target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                <div className="resume-img-container">
                    <img className="resume-image" src={ResumeIllustration} alt="Apprentice HomePage" />
                </div>
            </div>
        </section>
    )
}

export default Resume;