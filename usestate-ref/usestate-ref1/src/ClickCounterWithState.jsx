import React, { useState } from 'react'

function ClickCounterWithState() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    }
  return (
    <div>
        <h2>
        Click Counter With useState
        </h2>
        <button onClick={handleClick}>Click me</button>
        </div>
  )
}

export default ClickCounterWithState