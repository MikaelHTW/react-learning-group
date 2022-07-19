const Screen = ({result}) => {
  return(
    <div className='calculator-screen'>
      <span className='calculator-value'>
        {result}
      </span>
    </div>
  )
}

export default Screen;
