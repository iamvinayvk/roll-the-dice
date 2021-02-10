import './App.css';
import React,{useState} from 'react';
import Result from './Result';
import diceImage from './dice.gif';
import Dice from 'react-dice-roll';


function App() {
  var diceValue=6;
  const [currentResult,setResult]=useState(
    ' '
  )
  const setResultHandler=()=>{
    setTimeout(
      ()=>{
    setResult(`The Result of the roll is ${diceValue}`);}
      ,1000)
    ;
    // return diceValue;
  }

  return (
    <div className="App">
        
       <button onClick={setResultHandler}><Dice  onRoll={(value)=>{
         diceValue=value;
       }} rollingTime={1000} size={50} />
      <Result value={currentResult} />
      {/* <button onClick={setResultHandler}>Roll The Dice</button> */}
      </button>
      {/* <button onClick={setResultHandler}>Roll The Dice</button> */}
    </div>
  );
}

export default App;
