
import { useState } from 'react';
import './App.css'
import Joker from './Joker'


function App() {
  let [count, setcount] = useState(0)

  let addValue = () => {
    setcount(count + 1);
  }
  
let counter = 5;
  return (
    <>
     <h1>React and Hooks</h1>

    <h3>Counter value: {count}</h3>

    <button onClick={addValue}>Add Value</button> &nbsp; &nbsp;
    <button>Remove Value</button>
    </>
  )
}

export default App
