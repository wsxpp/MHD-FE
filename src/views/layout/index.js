import React from 'react';
import './index.styl'
import { getRoutes } from '../../route'

export default function Layout(props) {
  console.log(this)
  console.log(props)
  return (
    <div className='layout'>
      {
        console.log(props)
      }
    </div>
  )
}