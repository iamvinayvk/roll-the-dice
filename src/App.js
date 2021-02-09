import './App.css';
import React,{useState} from 'react';
import Result from './Result';

function App() {
  const [currentResult,setResult]=useState(
    ' '
  )
  const setResultHandler=()=>{
    setResult(`The Result of the roll is ${Math.floor(Math.random()*5+1)}`)
  }

  return (
    <div className="App">
      <Result value={currentResult} />
      <button onClick={setResultHandler}>Roll The Dice</button>
    </div>
  );
}

export default App;
