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
      <p>Click on The Dice to Roll:</p>
        
       <button onClick={setResultHandler}><Dice  onRoll={(value)=>{
         diceValue=value;
       }} rollingTime={1000} size={250} />
      <Result value={currentResult} />
     
      </button>
    
    </div>
  );
}

export default App;
