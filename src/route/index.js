import React from 'react';
import { Route } from 'react-router-dom'
import UserList from '../views/userManage/userList'
import UserInfo from '../views/userManage/userInfo'
const createHistory = require('history').createBrowserHistory;

const routeConfig = [
  {
    path: '/manhua/userManage/userList',
    component: UserList,
  },
  {
    path: '/manhua/userManage/userInfo/:id',
    component: UserInfo,
  },
]

export function getRoutes() {
  return routeConfig.map(el => <Route path={el.path} component={el.component} key={el.path} />)
}

export const history = createHistory()