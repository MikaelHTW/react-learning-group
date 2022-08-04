import { useState } from 'react'

function useCalculator() {
  const [ result, setResult ] = useState('')

  const calculate = (number) => {
    if (number === 'C') {
      setResult('')
    } else if (number === '=') {
      setResult([eval(result.join(''))])
    } else {
    setResult([...result, number]);
    }
  }

  return [ result, calculate]
}

export default useCalculator