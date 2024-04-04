import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "raja",
    age : 23
  }

  return (
    <>
      <h1 className='bg-yellow-400 text-black rounded-xl'>Tailwind test</h1>
      <Card channel= "hello dosto"  btnText="click"/>
    </>
  )
}

export default App
