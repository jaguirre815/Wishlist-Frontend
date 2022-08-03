import React, { useState, useEffect } from 'react';

function NewUsers () {
    const [name, setName] = useState(" ")
    
    
    const handleInput = event => {
        setName(event.target.value);
        console.log(event.target.value)
      };
    
      
    const handleSubmit = ()=> {
       console.log(name)
        const NewUsers = {
            headers: {
                mode:'no-cors',
                'Content-Type': 'application/json'
                
            },
            method: 'POST',
            
        };
        fetch(`https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/${name}`, NewUsers)
        .then(response => { 
            console.log('saved')
            window.sessionStorage.setItem('name', name)
            window.location=window.location.origin
        })


        
        
    }
    return(
        <div>
            <input onChange={handleInput} placeholder='Wishlist-Name'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default NewUsers

