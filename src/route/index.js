import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Main from '../views/main/App'

const routeConfig = [
  {
    path: '/',
    component: Main,
    // childRoutes: [
    //   {
    //     path: '',
    //     component: Main,
    //     childRoutes: [

    //     ]
    //   }
    // ]
  }
]

function getRoutes(routes) {
  if (!routes) return null
  return routes.map(el => {
    return (
      <Route path={el.path} component={el.component} key={el.path}>
        { getRoutes(el.childRoutes) }
      </Route>
    )
  })
}

export function getRoutesConfig(){
  return (
    <BrowserRouter>
      { getRoutes(routeConfig) }
    </BrowserRouter>
  )
}