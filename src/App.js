import { createContext } from 'react'
import Wrapper from './wrapper.js'
import './App.css';

export const MyContext = createContext();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Calculator
        </h1>
        <MyContext.Provider value={{Title: '1st Grade calculator'}}>
          <Wrapper />
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
