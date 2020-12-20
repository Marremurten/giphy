import React from 'react'

const SearchBar = (props) =>  {

    const updateHandler = (event) =>{
        props.search(event.target.value)
    }
   
    return (
        
        <input className="form-search form-control" type="text" onChange ={updateHandler}/>
      
    )
 }  

export default SearchBar