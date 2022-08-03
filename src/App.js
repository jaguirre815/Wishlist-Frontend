import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
//import Input from "./Components/Input";
import Display from "./Components/Display";
import './App.css'
import Favorites from "./Components/favorites";
import NewUsers from "./Components/NewUsers";



function App() {
  const [product, setProduct] = useState()
  const data = product ? <Display product = { product }/> : null
  

useEffect(() => {
  console.log(product)
}, [product])

  return (

    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Display/>}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newuser" element={<NewUsers/>}/>
        
      
    </Routes>
  </BrowserRouter>
        
        
    
  );
}


export default App;


