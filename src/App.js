import React from 'react'
import './App.css';
import Header from './components/header/header.components'
import Education from './section/education/education.components';
import { Introduction } from './section/introduction/introduction.components'
import Projects from './section/projects/projects.components'
import Skills from './section/skills/skills.components'
import Contact from './section/contact/contact.components'


function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
