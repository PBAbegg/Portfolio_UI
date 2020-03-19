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

      // this.handleDeletedProject = this.handleDeletedProject.bind(this);
      // PubSub.subscribe(PROJECT_CREATED_CHANNEL, this.handleDeletedProject);
    }

    handleAddedProject(msg, project) {
      console.log(msg, project);
      this.setState({projects: [...this.state.projects, project]},function(){
        console.log(this.state)
      })
      //this.setState({projects: this.state.projects.push(project)})
    }
    // handleDeletedProject(msg, project) {
    //   console.log(msg, project);
    //   this.setState({projects: [...this.state.projects, project]})
    // }

    getProjects(){
      fetch (buildUrl('projects'))
        .then(response => response.json())
        .then(data => this.setState({ projects: data }))
    };

    componentDidMount() {
      this.getProjects()
      // fetch (buildUrl('projects'))
      //   .then(response => response.json())
      //   .then(data => this.setState({ projects: data }));
    };

    render() {
        return (
          <div>
            <div > {
              this.state.projects.map( project =>
                  <ul key={`project_${project._id}`}>
                      <li>{project.project_name}</li>
                      <li>{project.description}</li>
                      <li>{project.link}</li>
                      <li>{project.screen_shot}</li>
                      <DeleteProject id={project._id} getProjects={this.getProjects}/>
                  </ul>
              )           
            }
            </div>
            <AddNewProject/>
            </div>
         )
    }
    
}
