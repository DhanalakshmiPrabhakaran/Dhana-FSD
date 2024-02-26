import React, { useEffect, useState } from 'react'

function MagicRoom() {
    const [toy, setToy] = useState('car');

    //This useEffect runs when you first enter the room(component mount)
    //and when you leave the room (component unmounts)
    useEffect(()=>{ 
        console.log('Welcome to the Magic room!');

        return () => {
            console.log('Goodbye from the Magic room!');
        }
    },[]);//This empty array means it only runs at the begining and 

//This useEffect runs when the 'toy' state changes  
useEffect(()=>{
    console.log('The toy is now a ${toy}.');
},[toy]); 
  return (
    <div>
        <h1>Welcome to my MagicRoom</h1>
        <button onClick={()=> setToy('doll')}>Change Toy to Doll</button>
        <button onClick={()=> setToy('train')}>Change Toy to train</button>
        <p>Current toy is a ${toy}</p>


        
    </div>
  )
}

export default MagicRoom