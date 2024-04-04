import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,setCounter] = useState(5)

  //  const addValue = ()=>{
  //   if(counter<20)
  //   {
  //     setCounter(counter+1)
  //   }
  //  }
   const addValue = ()=>{
    if(counter<20)
    {
      //if we call setcounter again and again it will make a bunch and work like single
      /*
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      */

      //if we want to do this,then

      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
    }
   }

   const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
   }

  return (
    <>
      <h1>chai aur react : {counter}</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value</button><br />

      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
