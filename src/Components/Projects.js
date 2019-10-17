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
      console.log(`The values are ${this.state.project_name}, ${this.state.description}, and ${this.state.link}`)
      
      let url = buildUrl('/projects');
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          project_name: this.state.project_name,
          description: this.state.description,
          link: this.state.link,})
      
        .then(function(response) {
          if(response.ok) {
            console.log('Click was recorded');
            return;
          }
          throw new Error('Request failed.');
        })
        .catch(function(error) {
          console.log(error);
        })
      });

    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Project</h3>
                <form>
                    <div className="form-group">
                        <label>Project Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Link: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Project" className="btn btn-primary"/>
                    </div>
                </form>               
            </div>
        )
    }

}

// const button = document.getElementById('');{



// constructor(props) {
//         super(props);
//         this.state = {
//             first_name: '',
//             last_name: '',
//             email: '',
//         };
//     }
 
//     componentDidMount() {
//         let url = buildUrl('/profiles');
//         fetch(url)
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     first_name: json,
//                     last_name: json,
//                     email: json,
//                 });
//             });
//     }