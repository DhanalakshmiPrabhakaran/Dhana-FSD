import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CounterWithState from './CounterWithState'
import CounterWithReducer from './CounterWithReducer'



function App() {
    const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CounterWithState />
      <CounterWithReducer />
   </div>
      
        )
}

export default App
