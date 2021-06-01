import React from "react"

function ProductInfo(props){
return(
<div>
  <h3>{props.name}</h3>
  <p>{props.price}: {props.description}</p>
</div>
)
}

export default ProductInfo