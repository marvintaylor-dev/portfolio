import React from 'react'

import './projectHero.styles.scss'

import Title from '../../components/section_title/section_title.components'
import SectionInfo from '../../components/section-info/section-info.component'
import ButtonExternal from '../../components/buttonExternal/buttonExternal.component'



const ProjectHero = ({ data }) => {
    return (
        <section className="min-height100vh">
            <div className="page-hero-container">
                <div className="page-content-container mb-sm">
                    <div className="page-hero-title">
                        <Title title={data.title}></Title>
                    </div>
                    <h2 className="page-hero-subtitle">{data.subtitle}</h2>
                    <div className="page-hero-content">
                        <SectionInfo title={data.role.title}>
                            {data.role.info}
                        </SectionInfo>
                        <SectionInfo title={data.why.title}>
                            {data.why.info}
                        </SectionInfo>
                        <SectionInfo title={data.problem.title}>
                            {data.problem.info}
                        </SectionInfo>
                        <SectionInfo title={data.solution.title}>
                            {data.solution.info}
                        </SectionInfo>
                    </div>
                    <div className='flex-left gap-5'>
                        <ButtonExternal url={data.siteUrl} target="_blank" rel="noreferrer">Site</ButtonExternal>
                        <ButtonExternal url={data.codeUrl} target="_blank" rel="noreferrer">Code</ButtonExternal>
                    </div>
                </div>
                <img className="medium-img image" src={require(`../../assets/images/${data.heroImg}`).default} alt={data.title} />
            </div>
        </section>
    )
}



export default ProjectHero;

