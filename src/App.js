
import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Components/Home'
import Projects from './Components/Projects/DisplayProject'
////////////////////////////////////////////ProjectPage
import Skills from './Components/Skills'
import WorkExperience from './Components/WorkExperience'
import Education from './Components/Education'
import KnowledgeCatalog from './Components/KnowledgeCatalog'
import References from './Components/References'



function App() {
  return (
    <Router>
    <div>
          <Nav vertical>      
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/work_experience">Work Experience</Link>
            <Link to="/education">Education</Link>
            <Link to="/knowledge_catalog">Knowledge Catalog</Link>
            <Link to="/references">References</Link>
          </Nav>
        <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/work_experience">
          <WorkExperience />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/knowledge_catalog">
          <KnowledgeCatalog />
        </Route>
        <Route path="/references">
          <References />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}


export default App;