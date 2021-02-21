
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useEffect, useState  } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemToCart, Addnumbertocart } from '../../store/action';
export default function Details(props){

let[product , setproduct]=useState({})
  useEffect(()=>{
console.log(props.location.state.theItem)
setproduct(props.location.state.theItem)
  },[])

let {numberofitems}=useSelector((data)=>data)
let dispatch=useDispatch()
function addcart() {
 dispatch(AddItemToCart(product)) 
 dispatch(Addnumbertocart(++numberofitems))
}


    return(<>
    
  <div className='container-fluid'>
<div className='row'>
<section className='col-lg-7'>
<div>
  {product.pictures&&
   <InnerImageZoom zoomScale={2} zoomType='hover' src={product.pictures[0]} zoomSrc={product.pictures[0]} className="card-img-top" ></InnerImageZoom>
  }
</div>



</section>
<section className='col-lg-5'>

<div className="card w-100">
  <div className="card-body">
    <h5 className="card-title">product name: {product.productName}</h5>
    <p className="card-text">product Description: {product.productDescription}</p>
    <p className="card-text">  {product.category}</p>
    <h2 className="card-title">${product.price}</h2>
    <button onClick={addcart}  class="btn btn-success">Add to cart</button>
  </div>
</div>
</section>

</div>







  </div>
    </>)
    }