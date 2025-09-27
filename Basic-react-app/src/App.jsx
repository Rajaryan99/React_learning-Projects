
import './App.css'
import Title from './Title.jsx';


function App() {
  let name = 'rajaryan'

  return (
    <>
      <Title />
      <h1>{name.toUpperCase()}</h1>
      <p>Hello world! 2 * 2 =  {2 * 2}</p>
      <button>click me</button>

    </>
  )
}

export default App
