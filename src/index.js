import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './Components/Projects/AddNewProject';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>>
        <div>
            <Route path="/" component={App}/>
            <Route path="/projects" component={Projects}/>
        </div>
    </Router>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
