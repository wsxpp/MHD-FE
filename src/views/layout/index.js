import React from 'react';
import './index.styl'
import { getRoutes } from '../../route'

export default function Layout(props) {
  return (
    <div className='layout'>
      {getRoutes()}
    </div>
  )
}