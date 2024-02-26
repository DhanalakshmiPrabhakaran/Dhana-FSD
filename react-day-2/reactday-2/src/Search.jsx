import React, { useState } from 'react'

function Search() {

    const [searchText, setSearchText] = useState('');

    const handleChange = (event)=>{
        setSearchText(event.target.value);
        console.log("Search Text: ", searchText);
    }
  return (
    <div>
        <h1>search</h1>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onChange={handleChange}/>
        <p>
            searching for <strong>{searchText}</strong>
        </p>

        
    </div>
  )
}

export default Search