import './App.css'
import reactLogo from "./assets/react.svg"
import Countries from './Components/Countries/Countries'
import Counter from './Counter'

function App() {
  return (
    <>
    <img src={reactLogo} alt="" />
      <h2 style={{color: '#89CFF0'}}>React_World_Tour</h2>
      <p style={{color: '#50C878'}}>With <small>janker_mahbub</small></p>
      <p style={{color: '#50C878'}}>Batch : PH-7</p>
      <button><a href="#">Details</a></button>
      <br />
      <Counter></Counter>
      <Countries></Countries>
    </>
  )
}

export default App
