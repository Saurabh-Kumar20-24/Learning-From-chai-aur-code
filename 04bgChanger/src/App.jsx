import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen " style={{backgroundColor : color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  text-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>orange</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "cyan"}} onClick={()=>setColor("cyan")}>cyan</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "violet"}} onClick={()=>setColor("violet")}>violet</button>
            </div>
        </div>
      </div>
    </>
  )
} 

export default App
