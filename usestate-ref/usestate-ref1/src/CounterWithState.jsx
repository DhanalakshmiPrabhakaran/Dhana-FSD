import React, { useState } from 'react'

function CounterWithState() {
    const[count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const incrementBy2 = () => setCount(count + 2);

    return (
    <div>
        <h2>Counter With useState</h2>
        Count: {count}
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={incrementBy2}>+2</button>
</div>
)
}

export default CounterWithState