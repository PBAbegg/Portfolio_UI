
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

    deleteProject(e,id){
        e.preventDefault()
        console.log("id",buildUrl(`projects/${id}`))
        fetch (buildUrl(`projects/${id}`),{method:'DELETE'})
        .then(console.log("deleted"))
        .then(this.getProjects())

        PubSub.subscribe(PROJECT_CREATED_CHANNEL, this.state);
    }
    

    render() {
        return(
            <button onClick={(e)=>this.deleteProject(e,this.id)}>Delete</button>
        )
    }
}