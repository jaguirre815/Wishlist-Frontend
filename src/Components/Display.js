
import { useState, useEffect } from "react"


function Display({  }) {
    const name = window.sessionStorage.getItem('name')
    const [product, setProduct] = useState([])
    const [favorites, setFavorites] = useState([])  
            const handleFavorites = async () => {
                const response = await fetch(`https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/${name}`)
                
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
        fetch(`https://wisc-wish-list-app.herokuapp.com/favorites/user-favorites/name/${name}`, requestFavorites)
        .then(response => console.log('saved'))
            
    }
    
       const clear = () => {
            setProduct(null)
       }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.bestbuy.com/v1/products/${product}.json?show=sku,url,shortDescription,salePrice,regularPrice,name,addToCartUrl,image&apiKey=${process.env.REACT_APP_MY_BBKEY}`)
        const data = await response.json()
        console.log(data)
        
        setProduct(data)
        
        
    }
        let productInfo 
        if(product.name) {
            productInfo=  [<h2>{product.name}</h2>,
            <img src={product.image} alt='product' />,
            <h4>Was ${product.regularPrice} </h4>,
            <h3>Now Price ${product.salePrice}</h3>,
            <p>{product.shortDescription}</p>]
            console.log(productInfo)
        }
    
    
    return (
        
        <div className="container-fluid">
            <nav><a href= "/favorites" className="btn btn-outline-primary" target="blank" role="button">{name}'s Favorites</a>
            <a href= "/newuser" className="btn btn-outline-primary" target="blank" role="button">Create New User</a>
            </nav>
            <header className="container-fluid col-8">
                <div>
                <img className="img-fluid" src="https://www.dinesh.com/images/stories/logo/parodies/economic-crisis-logo-parodies/bestbuy_logo_parody.jpg" alt="bestbuy"/>
                    </div>
            </header>
            <div>
                <form className="container-fluid col-6" onSubmit={handleSubmit}>
                        <input className="form-control me-8" id="submitSKU" onChange={handleChange} placeholder="Enter Best Buy product SKU" />
                    <div className="d-grid gap-2">
                        <button className="btn btn-success" >Search</button>
                    </div>
                </form>
            </div>
        
            <div className="container-fluid col-6">
                <div className="card">
                    {productInfo}
                        <button className="btn btn-outline-success" onClick={addFavorites}>Add to Favorites</button>
                        <a href={product.addToCartUrl} className="btn btn-outline-primary" target="blank" role="button">Add to Best Buy Cart</a>
                        
                        
                    </div>
            </div>
        </div>
               
    
        
        
        
                
    )
}

export default Display

//hi