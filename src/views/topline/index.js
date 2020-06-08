import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router'
import './index.styl'

export default function Topline() {
  const [name, setName] = useState('')
  const { match } = useReactRouter()
  useEffect(() => {
    setName(localStorage.manhuaUserName)
  }, [match])
  return (
    <div className='topline'>
      <div className='userName'>{name}</div>
    </div>
  )
}