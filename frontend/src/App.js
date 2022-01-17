import React from 'react'
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.components'
import Homepage from './pages/homepage/homepage.component';
import Apprentice from './pages/projects/apprenticePage/apprenticePage.component'
import Visualizer from './pages/projects/visualizerPage/visualizerPage.component'
import ContactPage from './pages/contactPage/contactPage.component'
import AboutMePage from './pages/aboutMePage/aboutMePage.component'
import Resume from './pages/resume/resume.component'
import Footer from './components/footer/footer.component'
import Contact from './components/contact/contact.components'

library.add(fab, faAngleDoubleDown)


function App() {
  return (
    <>

      <Navbar />
      <Contact />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/projects/apprentice" component={Apprentice}></Route>
        <Route path="/projects/visualizer" component={Visualizer}></Route>
        <Route path="/contactpage" component={ContactPage}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/aboutme" component={AboutMePage}></Route>
      </Switch>
      <Footer />

    </>
  );
}

export default App;
