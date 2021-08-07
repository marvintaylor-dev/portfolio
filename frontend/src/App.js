import React from 'react'
import './App.css';
import Navbar from './components/navbar/navbar.components'
import Education from './section/education/education.components';
import { Introduction } from './section/introduction/introduction.components'
import Projects from './section/projects/projects.components'
import Skills from './section/skills/skills.components'
import Contact from './section/contact/contact.components'


function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
