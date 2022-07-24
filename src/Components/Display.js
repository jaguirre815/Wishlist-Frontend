

function Display({ product }) {
    return (
        <nav class="navbar bg-light">
        <div class="container-fluid">
              <h1>{product.name}</h1>
              <img src = {product.image} alt='product'/>
              <h2>Retail Price ${product.regularPrice} </h2>
              <h2>Sale Price ${product.salePrice}</h2>
              <h3>{product.shortDescription}</h3>
              <a href={product.url} target='blank'>
              <h3>Link to Product</h3></a>
        </div>
        </nav>
        
                
    )
}

export default Display

//hi