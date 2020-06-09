import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import Login from '../views/login/login'
import Registered from '../views/login/registered'
import Main from '../views/main/App'
import UserList from '../views/userManage/userList'
import UserInfo from '../views/userManage/userInfo'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
export function handleRoute(el) {
  if (el.childRoutes) {
    return (
      <Route
        path={el.path}
        key={el.path}
        render={props => (
          <el.component {...props} childRoutes={el.childRoutes} />
        )}
      />
    )
  } else {
    return (
      <Route
        path={el.path}
        component={el.component}
        key={el.path}
      />
    )
  }
}
export function mainRoute() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(el => handleRoute(el))}
      </Switch>
    </Router>
  )
}

const routes = [
  {
    path: '/registered',
    component: Registered,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/manhua',
    component: Main,
    childRoutes: [
      {
        path: '/manhua/userManage/userList',
        component: UserList,
      },
      {
        path: '/manhua/userManage/userInfo/:id',
        component: UserInfo,
      },
    ]
  },
]
