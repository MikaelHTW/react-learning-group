import React, { useContext } from 'react'
import { MyContext } from './App'

function AnimatedTitle() {
  const { Title } = useContext(MyContext);


  return (
    <p className='animated-title'>{Title}</p>
  )
}

export default AnimatedTitle