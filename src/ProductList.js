import React from "react"
import productArray from "./productArray"
import ProductInfo from "./ProductInfo" 

const product= productArray.map(
  function(item){
    <ProductInfo name='{item.name}' price='{item.price}' description='{item.description}' />
  } );

function ProductList(){
 
   return(
     <div>
       <ProductInfo />
       <ProductInfo />
       <ProductInfo />
     </div>
   )
 
}

export default ProductList