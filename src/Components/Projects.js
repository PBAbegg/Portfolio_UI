import React, { Component, } from 'react';
import { buildUrl } from '../url'
import ReactDOM from 'react-dom';



export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onClick = this.onClick.bind(this);
  
        this.state = {
            project_name: '',
            description: '',
            link:''
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
  
    onClick(e) {
      e.preventDefault();
      this.addProject.reset();
      console.log(`The values are ${this.state.project_name}, ${this.state.description}, and ${this.state.link}`)

      let post = { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body:JSON.stringify({
          project_name: this.state.project_name,
          description: this.state.description,
          link: this.state.link})
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
                        <input type="text" className="form-control" onChange = {this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Link: </label>
                        <input type="text" className="form-control" onChange = {this.onChangeLink}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Project" className="btn btn-primary"/>
                    </div>
                </form>               
            </div>
        )
    }

}



