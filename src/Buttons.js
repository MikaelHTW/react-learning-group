import AnimatedTitle from "./AnimatedTitle";

const Buttons = ({setResult, result}) => {

  const calculate = (number) => {
    if (number === 'C') {
      setResult('')
    } else if (number === '=') {
      setResult([eval(result.join(''))])
    } else {
    setResult([...result, number]);
    }
  }

  const Button = ({value}) => {
    return(
      <button className='calculator-button' onClick={() => calculate(value)}>
        {value}
      </button>
    )
  }

  return(
    <div className='calculator-buttons'>
      <Button value='1'/>
      <Button value='2'/>
      <Button value='3'/>
      <Button value='4'/>
      <Button value='5'/>
      <Button value='6'/>
      <Button value='7'/>
      <Button value='8'/>
      <Button value='9'/>
      <Button value='0'/>
      <Button value='+'/>
      <Button value='-'/>
      <Button value='/'/>
      <Button value='*'/>
      <Button value='C'/>
      <Button value='='/>
      <AnimatedTitle/>
    </div>
  )
}

export default Buttons;
