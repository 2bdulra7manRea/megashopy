import { useEffect, useState } from "react"
import { get_item_category } from "../../networks/productsApi"
import {Link, useLocation , useParams} from 'react-router-dom'
import CardComponent from "../../components/card"

export default function Category(){


let param=useParams()    
let[items , setitems]=useState([])
useEffect(()=>{

// must be elemtns of cateories
get_item_category(param.id).then((result)=>{
console.log(result.data)
setitems(result.data)
}).catch((err)=>{
console.log(err)
})

},[param.id])

function sorting(v) {
  let newarray=[];
console.log(v.target.id)
let valueOfBtn=v.target.id;
if(valueOfBtn==='1'){
  newarray=[].concat(items).sort((a ,b)=>{
  return a.productName-b.productName}
  )
  setitems(newarray)
}else if(valueOfBtn==='2'){
  newarray=[].concat(items).sort((a ,b)=>b.productName-a.productName)
  setitems(newarray)
}else if(valueOfBtn==='3'){
  newarray=[].concat(items).sort((a ,b)=>b.price-a.price)
  setitems(newarray)
}else if(valueOfBtn==='4'){
  newarray=[].concat(items).sort((a ,b)=>a.price-b.price)
  setitems(newarray)
}

} 





    return(<>
  <div className='container-fluid'>



<div className='row'>
<div className='col-lg-2'>
<div>
<ul className="nav flex-column">
<h1>cateories</h1>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">more then 40%</Link>
  </li>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">more then 60%</Link>
  </li>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">more then 70%</Link>
  </li>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">more then 80%</Link>
  </li>
</ul>

<ul className="nav flex-column">
<h1>Brands</h1>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">nemix</Link>
  </li>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">kolumn</Link>
  </li>

</ul>
<ul className="nav flex-column">
<h1>Sort</h1>
  <li className="nav-item">
  
    <button type="button" onClick={sorting} id='1' className="btn btn-light"> A TO Z</button>
  </li>
  <li className="nav-item">
  
  <button type="button" id='2' onClick={sorting} className="btn btn-light"> Z TO A</button>
</li>
<li className="nav-item">
  
  <button type="button" id='3' onClick={sorting} className="btn btn-light"> price : High to low</button>
</li>
<li className="nav-item">
  
  <button type="button" id='4' onClick={sorting} className="btn btn-light"> price : Low to high</button>
</li>

</ul>
<ul className="nav flex-column">
<h1>Price</h1>
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">$0-$49</Link>
  </li>
 
  <li className="nav-item">
    <Link to='/search/health' className="nav-link">$0 -$200</Link>
  </li>
</ul>




</div>
</div>
<div className='col-lg-10'  style={{display:'flex' ,justifyContent:'center' ,flexFlow:'row wrap'}}>
{items&&items.map((itm,index)=>{
return(<>
<CardComponent key={index} Product={itm} ></CardComponent>
</>)
})
}
</div>

</div>
  </div>









    </>)
    }