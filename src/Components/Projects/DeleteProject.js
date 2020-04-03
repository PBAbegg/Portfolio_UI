
import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { PROJECT_CREATED_CHANNEL } from '.././Subscriptions';
import ReactDOM from 'react-dom';
import { buildUrl } from '../../url';
import Projects from './DisplayProject';

export default class DeleteProject extends Component{


constructor(props) {
    super(props);
    this.id=props.id
    this.getProjects=props.getProjects.bind(this)
    }

    // deleteProject(e,id){
    //     e.preventDefault()
    //     console.log("id",buildUrl(`projects/${id}`))
    //     fetch (buildUrl(`projects/${id}`),
    //     {method:'DELETE'})
    //     .then(response => console.log(response.status))
    //     .then(console.log("deleted"))
    //     .then(this.getProjects())

    //     // PubSub.subscribe(PROJECT_CREATED_CHANNEL, this.state);
    // }
    
    async deleteProject(e, id) {
        e.preventDefault();
        let response = await fetch(buildUrl(`projects/${id}`), {
            method: 'DELETE'
        });
        if (response.status === 200) {
            console.log('project deleted');
            this.getProjects();
        } else {
            console.error('Project not deleted!');
        }
    }


    render() {
        return(
            <button onClick={(e)=>this.deleteProject(e,this.id)}>Delete</button>
        )
    }
}