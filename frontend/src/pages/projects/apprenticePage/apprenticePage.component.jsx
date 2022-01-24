import React from 'react'

import ProjectHero from '../../../components/projectHero/projectHero.component'

import './apprenticePage.styles.scss'

import Projects from '../../../data/projects.data'
import SectionImageLeft from '../../../components/section-image-left/section-image-left.component'
import SectionImageRight from '../../../components/section-image-right/section-image-right.component'



const newText = (props) => {
    const text = props.text;
    return text.split("\n").map(str => <p>{str}</p>)
}


const ApprenticePage = () => {
    const project = Projects[0];

    return (
        <div className="container overflow-hidden">
            {/* pre-wrap is for creating paragraph whitespace with css */}
            <div className="project-hero pre-wrap">
                <ProjectHero data={project} />
                <SectionImageLeft id="struggles" data={project} img={project.image1} subsection1={project.struggles} subsection2={project.perseverance} />
                <SectionImageRight data={project} img={project.image2} subsection1={project.changes} />
                <SectionImageLeft data={project} img={project.image3} subsection1={project.wishlist} />
                <SectionImageLeft data={project} img={project.image4} subsection1={project.technology} />
            </div>
        </div>
    )
}

export default ApprenticePage;