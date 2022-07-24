import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [product, setProduct] = useState(null)
  const data = product ? <Display product = { product }/> : null

useEffect(() => {
  console.log(product)
}, [product])

  return (
    <>
      <Input setProduct={setProduct}/>
      {data}
    </>
  );
}


export default App;


