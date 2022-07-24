import { useState } from "react"
const { REACT_APP_MY_BBKEY } = process.env;
function Input({ setProduct }) {
   const [productname, setProductname] = useState('')

   const handleChange = (e) => {
    setProductname(e.target.value)
   }
   const clear = () => {
        setProduct(null)
   }
const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.bestbuy.com/v1/products/${productname}.json?show=sku,name,regularPrice,manufacturer,salePrice,image,url,shortDescription&apiKey=${process.env.REACT_APP_MY_BBKEY}`)
    const data = await response.json()

    setProduct(data)
    setProductname('')


    console.log(data)
}

    return(
        
        <form class="d-flex" onSubmit={handleSubmit}>
            <input class="form-control me-2" onChange={handleChange}placeholder="product"/>
            <button class="btn btn-outline-success" >Search</button>
            
        </form>
    )
}

export default Input

//hi