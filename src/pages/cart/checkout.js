import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import '../cart/cart.css'
import CardItem from "./cartItem";
export default function CheckOut() {
async function getToken(Token) {
let TOK=await JSON.stringify(Token)

    return fetch("http://127.0.0.1:3000/do", {
      method: "POST",
      body:TOK,
    }).then((res) => {
      console.log(res);
    });
  }
let{itemsCart} =useSelector((data)=>data)
let [Total , setTotal]=useState(0)
useEffect(()=>{
let sum=0;
for(let x= 0 ; x<itemsCart.length; x++){
sum+=itemsCart[x].price
}
setTotal(sum)

},[])


  return (
    <>
<div className='container-fluid'>
<div className='row'>
<div className='col-lg-12 rout-bar'>
<div className='col-5'><Link to='../'> <span className='arrow'>←</span>Continue Shopping</Link></div>
<div  className='col-7'>
  <h1>
    Shopping world
    </h1> 
   
  </div>
</div>

<div className='col-lg-12 center'>
  <div className='content-text'>
  <h1>My Bag</h1>
  <h1 style={{color:'red'}}> Total ${Total}</h1>
  </div>
</div>



</div>
<h1>My Items</h1>
<div className='row'>



{itemsCart&&itemsCart.map((items,index)=>{
return(

<CardItem key={index} Item={items} ></CardItem>

)

})

}



</div>
</div>














      <StripeCheckout
        stripeKey={key}
        token={getToken}
        name="FACEBOOK"
        price={20000002}
        shippingAddress
        billingAddress
      >
        <button className="btn btn-primary">CheckOut</button>
      </StripeCheckout>

      {/* <StripeCheckout stripeKey="" token="" name="Buy React" /> */}
    </>
  );
}
