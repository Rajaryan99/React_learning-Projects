
import './App.css'
import Joker from './Joker'


function App() {

  let addValue = () => {
    console.log('button was Clicked')
  }
  
let counter = 5;
  return (
    <>
     <h1>React and Hooks</h1>

    <h3>Counter value: {counter}</h3>

    <button onClick={addValue}>Add Value</button> &nbsp; &nbsp;
    <button>Remove Value</button>
    </>
  )
}

export default App
