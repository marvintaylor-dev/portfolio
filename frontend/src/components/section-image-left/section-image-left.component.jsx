import React from 'react'

import SectionInfo from '../../components/section-info/section-info.component'

import './section-image-left.styles.scss'

const SectionImageLeft = ({ img, subsection1, subsection2 }) => {
    return (
        <section className="center">
            <div className="center gap-5 imageLeftContainer">
                {
                    img ?
                        <img src={require(`../../assets/images/${img}`).default} className="medium-img image" />
                        :
                        ""
                }
                <div className="sectionLeft">
                    <SectionInfo title={subsection1.title}>
                        {subsection1.info}
                    </SectionInfo>
                    {
                        subsection2 ?
                            <SectionInfo title={subsection2.title}>
                                {subsection2.info}
                            </SectionInfo> :
                            ''
                    }
                </div>
            </div>
        </section >
    )
}

export default SectionImageLeft;