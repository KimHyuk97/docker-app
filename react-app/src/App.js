import React, {useEffect, useState} from 'react';
import Card from "./components/Card";

const App = () => {
  const [products, setProducts] = useState([]);

  async function onLoad(){
    let response = await fetch("/api/products");
    let responseBody = await response.json();
    console.log("onLoad", responseBody);
    setProducts(responseBody);
  }

  useEffect(()=>{
    onLoad();
  }, []);

  return (
    <div>
      <h1>상품 목록</h1>
      {products.map((product)=> <Card product={product}/>)}
    </div>
  );
}

export default App;
