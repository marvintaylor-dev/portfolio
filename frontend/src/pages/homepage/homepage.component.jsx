import React from 'react'


import './homepage.styles.scss'

import Contact from '../../components/contact/contact.components'
import Introduction from '../../section/introduction/introduction.components'
import Projects from '../../section/projects/projects.components'
import Skills from '../../section/skills/skills.components'

const Homepage = () => {
    return (
        <>
            <Introduction />
            <Projects />
            <Skills />
        </>
    )
}

export default Homepage