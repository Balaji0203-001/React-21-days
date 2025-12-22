import { useState } from 'react'
import './App.css'

function App() {

  let [Steps,setSteps] = useState(0);

  const addStep = () =>{
    let step = Steps+1;
    if(step > 20){
      step = 0;
      
    }
    else{
      setSteps(step);
    }
  } 

  const removeStep = () =>{
    let step = Steps-1;
    if(step < 0){
      step = 0;
      setSteps(step);
    }
    else{
      setSteps(step);
    }
  } 

  return (
    <>
      <h2>Step Counting Machine</h2>
      <h3>Total step = {Steps}</h3>
      <button onClick={addStep} >AddSteps</button><br />
      <button onClick={removeStep} >RemoveSteps</button>


    </>
  )
}

export default App
