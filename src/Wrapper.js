import React, { useState } from 'react';
import Screen from './Screen.js'
import Buttons from './Buttons.js'


const Wrapper = () => {
  const [result, setResult] = useState('')

  return (
    <div className='calculator'>
      <Screen result={result}/>
      <Buttons setResult={setResult} result={result}/>
    </div>
  )
}

export default Wrapper;
