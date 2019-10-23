import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Components/Home'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import WorkExperience from './Components/WorkExperience'
import Education from './Components/Education'
import KnowledgeCatalog from './Components/KnowledgeCatalog'
import References from './Components/References'


function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/work_experience">Work Experience</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/knowledge_catalog">Knowledge Catalog</Link>
        </li>
        <li>
          <Link to="/references">References</Link>
        </li>
      </ul>

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