import './card.css'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemToCart, Addnumbertocart } from '../store/action';
export default function CardComponent({Product}){



let dispatch=useDispatch();
let {numberofitems}=useSelector((data)=>data)

function ADDTOCART() {
console.log(Product)
dispatch(Addnumbertocart(++numberofitems))
dispatch(AddItemToCart(Product))
}
    return(<>
    

    <div className="card card_dc">
  <img src={Product.pictures[0]} style={{height:'100px'}} className="card-img-top" alt="..."></img>
  <div className=" body_dc">
    <div className="text_dc">
    <Link to={{pathname:'/details' , state:{theItem:Product}}} className="link_style">{Product.productName}</Link>
    </div>

    <h2 className="card-title">${Product.price}</h2>
    <h5 className="card-title">{Product.rating}</h5>
  </div>
<div>
 <button onClick={ADDTOCART} className="btn btn-success">Add to Card</button>

</div>
 
</div>




    </>)
    }