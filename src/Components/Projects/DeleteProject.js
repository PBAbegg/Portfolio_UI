
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { buildUrl } from '../../url';
import Projects from './DisplayProject';

export default class DeleteProject extends Component{


constructor(props) {
    super(props);
    }
        // componentDidMount() {
        //     fetch(buildUrl('projects')); {
        //         method: 'DELETE'
        //     };
        // }

        // render() {
        //     return(
        //         <div>
        //             {/* <button onClick {()=>{DeleteProject(project.id)}}>Delete Project</button> */}
        //         </div>
        //     )
        // }

}








//   deleteProject = id => {
//       let projects = this.state.projects.filter(project => {
//           return project.id !== id
//       });
//       this.setState({
//           project: projects
//       });
//   }
  


  
  
    // delete (project) {
    //     const projectInfo={
    //         project_name: project.project_name,
    //         description: project.description,
    //         link: project.link,
    //         screenshot: project.screenshot
    //     }
    //     fetch(buildUrl('projects'))//id?
    //      {
    //         method: 'delete'
    //     }

    // }


    // render() {
    //     return (
    //         <div> {
    //             this.state.projects.map( projects =>
    //             <Projects 
    //             key={projects._id}
    //             onDelete={this.handleDelete}
    //             id={projects.id}/>
    //           ) 
    //         }        
    //         </div>
    //     )
    // }






    // constructor(props) {
    //     super(props);
    //     this.setState ={
    //         projects: []
    //     }
    // }
      
