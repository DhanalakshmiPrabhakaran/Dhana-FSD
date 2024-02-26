import { useState } from "react"
import MagicRoom from "./MagicRoom"
import Sample from "./Sample"

function App() {
  const [count, setCount] = useState(0)
  return (
  <div>

  {count < 1 ? <MagicRoom /> : <Sample />}  
  <button onClick={()=> {setCount(count + 1)}}>Sample</button>
  <button onClick={()=> {setCount(count - 1)}}>MagicRoom</button>



    </div>
    )
  }

export default App
