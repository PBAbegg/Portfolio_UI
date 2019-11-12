//to the project page

import React, { Component, } from 'react';
import PubSub from 'pubsub-js';
import { buildUrl } from '../../url';
import { PROJECT_CREATED_CHANNEL } from '.././Subscriptions';
import ReactDOM from 'react-dom';


export default class AddNewProject extends Component {
    constructor(props) {
        super(props);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeScreenshot = this.onChangeScreenshot.bind(this);
        this.onClick = this.onClick.bind(this);
  
        this.state = {
            project_name: '',
            description: '',
            link:'',
            screenshot:''
        }
    }
    onChangeProjectName(e) {
      this.setState({
        project_name: e.target.value
      });
    }
    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });  
    }
    onChangeLink(e) {
      this.setState({
        link: e.target.value
      });
    }
    onChangeScreenshot(e) {
      this.setState({
        screen_shot: e.target.value
      });
    }
  
    onClick(e) {
      e.preventDefault();
      this.addProject.reset();
      console.log(`The values are ${this.state.project_name}, ${this.state.description}, and ${this.state.link}, ${this.state.screenshot}`)
      
      PubSub.publish(PROJECT_CREATED_CHANNEL, this.state);

      let post = { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body:JSON.stringify({
          project_name: this.state.project_name,
          description: this.state.description,
          link: this.state.link,
          screen_shot: this.state.screen_shot})
        }
        console.log(post);
      
        fetch(buildUrl('projects'), post)
        .then(function(response) {
          if(response.ok) {
            console.log('Submission was recorded');
            return;
          }
          throw new Error('Request failed.');
        })
        .catch(function(error) {
          console.log(error);
        })
    };

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Project</h3>
                <form ref={input => this.addProject = input} onSubmit={this.onClick}>
                    <div className="form-group">
                        <label>Project Name:  </label>
                        <input type="text" className="form-control" onChange = {this.onChangeProjectName}/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea rows="4" cols="50" type="text" className="form-control" onChange = {this.onChangeDescription}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Link: </label>
                        <input type="text" className="form-control" onChange = {this.onChangeLink}/>
                    </div>
                    <div className="form-group">
                        <label>Screenshot: </label>
                        <input type="url" className="form-control" onChange = {this.onChangeScreenshot}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Project" className="btn btn-primary"/>
                    </div>
                </form>               
            </div>
        )
    }

}



