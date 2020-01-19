import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage'
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';

const Index = () => (
    <Router history={history}>
        <div className="wrapper">
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
        </div>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </Router>
);
ReactDOM.render(<Index/>, document.getElementById('root'));



