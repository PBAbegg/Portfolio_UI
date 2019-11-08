//to the project list

import React, { Component } from 'react';
import { buildUrl } from '../../url';
import ReactDOM from 'react-dom';
import DeleteProject from './DeleteProject';
import AddNewProject from './AddNewProject';

export default class DisplayProject extends Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: []
      };
    }
    componentDidMount() {
      fetch (buildUrl('projects'))
        .then(response => response.json())
        .then(data => this.setState({ projects: data }));
    };

    render() {
        return (
          <div>
            <div> {
              this.state.projects.map( project =>
                  <ul key={project._id}>
                      <li>{project.project_name}</li>
                      <li>{project.description}</li>
                      <li>{project.link}</li>
                      <li>{project.screen_shot}</li>
                  </ul>
              )           
            }
            </div>
            <AddNewProject/>
            </div>
         )
    }
    
}
