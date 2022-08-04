import { createContext } from 'react';
import Wrapper from './Wrapper'
import Screen from './Screen'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle';
import KeypadWrapper from './KeypadWrapper';
import WhiteWrapper from './WhiteWrapper';
import useCalculator from './useCalculator';
import './App.css';

export const MyContext = createContext();

function App() {
  const [result, calculate] = useCalculator()

  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Screen result={result}/>
          <WhiteWrapper>
            <KeypadWrapper>
              {['1','2','3','4','5','6', '+','C', '='].map(value => <Button key={value} value={value} calculate={calculate}/>)}
            </KeypadWrapper>
            <WhiteWrapper>
              <KeypadWrapper>

                {['%', 'sq()', '&'].map(value => <Button key={value} value={value} calculate={calculate}/>)}
              </KeypadWrapper>
            </WhiteWrapper>
          </WhiteWrapper>
        </Wrapper>
        <Wrapper>
          <Screen result={result}/>
          <WhiteWrapper>
            <KeypadWrapper>
              {['1','2','3','C', '='].map(value => <Button key={value} value={value} calculate={calculate}/>)}
            </KeypadWrapper>
          </WhiteWrapper>
        </Wrapper>
        <Wrapper>
          <WhiteWrapper>
            <KeypadWrapper>
              {['1','2','3','C', '='].map(value => <Button key={value} value={value} calculate={calculate}/>)}
            </KeypadWrapper>
          </WhiteWrapper>
          <AnimatedTitle text='1st grade calculator' />
          <Screen result={result}/>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
