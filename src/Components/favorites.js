import React, { useState, useEffect } from 'react';

 

    function Favorites({ }) {
        const [favorites, setFavorites] = useState([])  
            const handleSubmit = async () => {
                const response = await fetch(`http://localhost:4050/favorites/user-favorites/name/joel`)
                
                const data = await response.json()
                console.log(data.favorites)
                
                
                setFavorites(data.favorites)
                console.log(favorites)
                
            }
                    
                
                
                
               
                useEffect(() => {handleSubmit()}, [])
                let faves = []
                for(let i = 0; i<favorites.length; i++) {
                    faves.push(
                        <div key = {i} className="container-fluid col-8">
                        <h1>{favorites[i]?.name}</h1>
                        <img src = {favorites[i]?.image} alt='product'/>
                        <h2>Retail Price ${favorites[i]?.regularPrice} </h2>
                        <h2>Sale Price ${favorites[i]?.salePrice}</h2>
                        <h3>{favorites[i]?.shortDescription}</h3>
                        <a href={favorites[i]?.addToCartUrl} target='blank'>
                         <h3>Add to Wishlist</h3></a>
            </div>
                    )
                }
                
                return (
                    
                    faves
             
        )
        }

            
            
            
                    

 export default Favorites