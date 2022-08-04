const Button = ({value, calculate}) => {
  return(
    <button className='calculator-button' onClick={() => calculate(value)}>
      {value}
    </button>
  )
}

export default Button