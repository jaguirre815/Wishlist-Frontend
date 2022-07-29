import { useState } from "react"


function Display({  }) {
    const [product, setProduct] = useState([])

    const handleChange = (e) => {
        setProduct(e.target.value)
       }
       const clear = () => {
            setProduct(null)
       }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.bestbuy.com/v1/products/${product}.json?show=sku,name,regularPrice,manufacturer,salePrice,image,url,addToCartUrl,shortDescription&apiKey=${process.env.REACT_APP_MY_BBKEY}`)
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
                <button className="btn btn-outline-success">Add to WishList</button>
    </form>
        
        <div className="container-fluid col-8">
              <h1>{product.name}</h1>
              <img src = {product.image} alt='product'/>
              <h2>Retail Price ${product.regularPrice} </h2>
              <h2>Sale Price ${product.salePrice}</h2>
              <h3>{product.shortDescription}</h3>
              {/* <a href={product.addToCartUrl} target='blank'>
              <h3>Add</h3></a> */}
        </div>
        </nav>
        
        
        
        
                
    )
}

export default Display

//hi