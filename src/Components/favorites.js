import React, { useState, useEffect } from 'react';


 

    function Favorites({ }) {
        const name = window.sessionStorage.getItem('name')
        const [favorites, setFavorites] = useState([])  
            const handleSubmit = async () => {
                const response = await fetch(`https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/${name}`)
                
                const data = await response.json()
                console.log(data.favorites)
                
                
                setFavorites(data.favorites)
                console.log(favorites)
                
            }
                    
                const deleteFavorite = Index => ()=> {
                    console.log(Index)
                   favorites.splice(Index, 1)
                    const requestFavorites = {
                        headers: {
                            mode:'no-cors',
                            'Content-Type': 'application/json'
                            
                        },
                        method: 'PUT',
                        body: JSON.stringify(favorites)
                    };
                    fetch(`https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/${name}`, requestFavorites)
                    .then(response => window.location.reload())
                }
                
                
               
                useEffect(() => {handleSubmit()}, [])
                    let faves = []
                    faves.push(<a href= "/" className="btn btn-outline-primary" target="blank" role="button">Home</a>)
                    for(let i = 0; i<favorites.length; i++) {
                        faves.push(
                            
                        <div key = {i} className="container">
                            
                            
                            <div className="row">
                                
                                <article className="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                                    <img className="d-inline-block img-fluid mb-4" src = {favorites[i]?.image} alt='product'/>
                                        <h4 className="h5 g-color-black g-font-weight-600 g-mb-10">{favorites[i]?.name}</h4>
                                            <p>My favorite Products</p>
                                    <span className="d-block g-color-primary g-font-size-16">Retail Price ${favorites[i]?.regularPrice}</span>
                                        <span className="d-block g-color-primary g-font-size-16">Sale Price ${favorites[i]?.salePrice}</span>
                                 </article>
                                    <button onClick={deleteFavorite(i)} className="btn btn-primary">Delete</button>
                            </div>
                        
                        </div>
                        
                    )
                }


                
                return (
                    
                    faves
                    
             
                )
    }

            
            
            
                    

 export default Favorites