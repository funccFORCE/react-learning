import React from "react"
import productArray from "./productArray"
import ProductInfo from "./ProductInfo" 


function ProductList(){
 
  const product= productArray.map( 
    item =>  <ProductInfo key={item.id} name={item.name} price={item.price} description={item.description} />
     );

   return(
     <div className='product-list'>
       <h2 className='head'>Product Details</h2>
       { product }
     </div>
   )
 
}

export default ProductList