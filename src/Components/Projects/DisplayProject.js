//to the project list

import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { buildUrl } from '../../url';
import { PROJECT_CREATED_CHANNEL } from '.././Subscriptions'
import ReactDOM from 'react-dom';
import DeleteProject from './DeleteProject';
import AddNewProject from './AddNewProject';

export default class DisplayProject extends Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: []
      };
      this.handleAddedProject = this.handleAddedProject.bind(this);
      PubSub.subscribe(PROJECT_CREATED_CHANNEL, this.handleAddedProject);
    }

    handleAddedProject(msg, project) {
      console.log(msg, project);
      this.setState({projects: [...this.state.projects, project]})// add project to projects array then save to state
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
                      <DeleteProject/>
                  </ul>
              )           
            }
            </div>
            <AddNewProject/>
            </div>
         )
    }
    
}
