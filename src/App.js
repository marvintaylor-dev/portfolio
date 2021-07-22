import React from 'react'
import './App.css';
import Header from './components/header/header.components'
import { Introduction } from './section/introduction/introduction.components'
import Projects from './section/projects/projects.components'

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
