import { useState } from "react"

export default function CardItem({Item}) {
 
let[num , setnum]=useState(1)


function Add() {
    
setnum(++num)

}

function remove() {
if(num>1){
setnum(--num)
}
} 



    
return(<>


<div class="card mb-3" style={{width:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Item.pictures[0]}  style={{width:'200px'}}   alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">{Item.productName}</h1>
        <h4>Qty</h4>
        <p class="card-text" style={{color:'red' , fontSize:'23px'}} >${num*Item.price}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>

<div>
<button onClick={Add}>+</button>
<span>{num}</span>
<button onClick={remove} >-</button>
</div>
</div>



</>)

}