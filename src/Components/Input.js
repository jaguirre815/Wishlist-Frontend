import { useState } from "react"

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
    const response = await fetch(`https://api.bestbuy.com/v1/products/${productname}.json?show=sku,name,regularPrice,manufacturer,salePrice,image,url,shortDescription&apiKey=(?)`)
    const data = await response.json()

    setProduct(data)
    setProductname('')


    console.log(data)
}

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}placeholder="product"/>
            <button type="submit">Search</button>
            
        </form>
    )
}

export default Input

//hi