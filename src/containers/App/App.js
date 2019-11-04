import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginPage from '../LoginPage'
import Home from '../../components/Home';
import routes from '../../constants/routes';
import PrivateRoute from '../../components/PrivateRoute';

const history = createBrowserHistory();


export default class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path={routes.LOGIN} component={LoginPage}/>
            <PrivateRoute exact path={routes.HOME} component={Home}/>
          </Switch>
        </Router>
    )
  }
}
