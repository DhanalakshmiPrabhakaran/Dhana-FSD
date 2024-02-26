import React from 'react'
import { useState } from 'react'

function Toys() {
    const[toys,setToys]= useState(['Teddybear', 'Race car']);
    const addToy = (newToy)=>{
        setToys(oldToys=> [...oldToys, newToy]);
    }
    return (
    <div>
        <h2>My Toy Box</h2>
        <ul>
            {toys.map(toy=><li>{toy}</li>)}
        </ul>
        <button onClick={()=>addToy('Doll')}>Add Doll</button>
        <button onClick={()=>addToy('Puzzle')}>Add Puzzle</button>
        <button onClick={()=>addToy('Card')}>Add Card</button>
        </div>
  )
}

export default Toys