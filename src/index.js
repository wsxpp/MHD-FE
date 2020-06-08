import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './views/main/App'
import Login from './views/login/login'
import Registered from './views/login/registered'
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import {history} from './route'

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registered" component={Registered} />
      <Route path="/manhua" component={Main} />
      <Redirect from="*" to="/login" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
