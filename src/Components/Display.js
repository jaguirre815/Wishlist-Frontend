
import { useState, useEffect } from "react"


function Display({  }) {
    const [product, setProduct] = useState([])
    const [favorites, setFavorites] = useState([])  
            const handleFavorites = async () => {
                const response = await fetch(`https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/joel`)
                
                const data = await response.json()
                console.log(data.favorites)
                
                
                setFavorites(data.favorites)
                console.log(favorites)
                
            }
            useEffect(() => {handleFavorites()}, [])
    const handleChange = (e) => {
        setProduct(e.target.value)
       }

    const addFavorites = () => {
        favorites.push(product)
        console.log(favorites)
        console.log(product)
        
        
        
        const requestFavorites = {
            headers: {
                mode:'no-cors',
                'Content-Type': 'application/json'
                
            },
            method: 'PUT',
            body: JSON.stringify(favorites)
        };
        fetch('https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/joel', requestFavorites)
        .then(response => console.log('saved'))
            
    }
    
       const clear = () => {
            setProduct(null)
       }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.bestbuy.com/v1/products/${product}.json?show=sku,url,shortDescription,salePrice,regularPrice,name,manufacturer,image&apiKey=${process.env.REACT_APP_MY_BBKEY}`)
        const data = await response.json()
        console.log(data)
        
        setProduct(data)
        //setProduct([...product, data])
    //add button to save to wishlist
    //get users wishlist
    
        // console.log(data)
    }
    
    return (
        <nav>
        <form className="d-flex" onSubmit={handleSubmit}>
        <span className="placeholder col-3">
            <input className="form-control me-4" onChange={handleChange}placeholder="product"/></span>
                <button className="btn btn-outline-success" >Search</button>
                
    </form>
        
        <div className="container-fluid col-8">
              <h1>{product.name}</h1>
              <img src = {product.image} alt='product'/>
              <h2>Was ${product.regularPrice} </h2>
              <h2>Now Price ${product.salePrice}</h2>
              <h3>{product.shortDescription}</h3>
             
              <a href={product.addToCartUrl} target="blank">add to cart</a>
              <br/>
              
                <button className="btn btn-primary" onClick={addFavorites}>Add to Favorites</button>
        </div>
        </nav>
        
        
        
        
                
    )
}

export default Display

//hi