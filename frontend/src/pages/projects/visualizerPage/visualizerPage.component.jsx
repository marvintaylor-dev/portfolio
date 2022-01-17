import React from 'react'
import ProjectHero from '../../../components/projectHero/projectHero.component'

import './visualizerPage.styles.scss'
import Projects from '../../../data/projects.data'
import SectionImageLeft from '../../../components/section-image-left/section-image-left.component'
import SectionImageRight from '../../../components/section-image-right/section-image-right.component'

const VisualizerPage = () => {
    const project = Projects[1];
    return (
        <div className="container pre-wrap">
            <ProjectHero data={project} />
            <SectionImageLeft data={project} img={project.image1} subsection1={project.struggles} subsection2={project.perseverance} />
            <SectionImageRight data={project} img={project.image2} subsection1={project.additions} />
            <SectionImageLeft data={project} img={project.image3} subsection1={project.technology} />
        </div>
    )
}

export default VisualizerPage;