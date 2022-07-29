import { useState } from "react"
const { REACT_APP_MY_BBKEY } = process.env;

function Input({ setProduct }) {
   const [productname, setProductname] = useState([])

   const handleChange = (e) => {
    setProductname(e.target.value)
   }
   const clear = () => {
        setProduct(null)
   }
const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.bestbuy.com/v1/products/${productname}.json?show=sku,name,regularPrice,manufacturer,salePrice,image,url,addToCartUrl,shortDescription&apiKey=${process.env.REACT_APP_MY_BBKEY}`)
    const data = await response.json()

    setProduct(data)
    setProductname('')
//add button to save to wishlist
//get users wishlist

    // console.log(data)
}


    return(
        
        <form className="d-flex" onSubmit={handleSubmit}>
            <span className="placeholder col-3">
                <input className="form-control me-4" onChange={handleChange}placeholder="product"/></span>
                    <button className="btn btn-outline-success" >Search</button>
                    <button className="btn btn-outline-success">Add to WishList</button>
        </form>
    )
}
            
export default Input
            



