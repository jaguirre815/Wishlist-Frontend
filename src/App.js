import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./Components/Input";
import Display from "./Components/Display";
import './App.css'
import Favorites from "./Components/favorites";



function App() {
  const [product, setProduct] = useState()
  const data = product ? <Display product = { product }/> : null
  

useEffect(() => {
  console.log(product)
}, [product])

  return (
//     <>
// <Input setProduct={setProduct}/>
// {data}
// </>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display/>}/>
        <Route path="/favorites" element={<Favorites />} />
      
    </Routes>
  </BrowserRouter>
        
        
    
  );
}


export default App;

// {/* <>
// <Input setProduct={setProduct}/>
// {data}
// </> */}
