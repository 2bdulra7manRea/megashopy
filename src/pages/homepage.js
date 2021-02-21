import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CardComponent from '../components/card'
import { get_all_items } from '../networks/productsApi'
export default function Home(){
let pics=['https://img-cdn-02.megaboutique.com.au/banners/90221-Hero-Banner-6_Zwilling-Knives.jpg','https://img-cdn-02.megaboutique.com.au/banners/250121-Hero-Banner-2_Scanpan-Impact-10pcs.jpg','https://img-cdn-02.megaboutique.com.au/banners/250121-Hero-Banner-4_Bamix-Blenders-Access.jpg','https://img-cdn-02.megaboutique.com.au/banners/90221-Hero-Banner-4-Cutting-Boards.jpg']

let[AllProduct , setProduct]=useState([])
useEffect(()=>{

get_all_items().then((items)=>{

console.log(items.data)
setProduct(items.data)

})

},[])


    return(<>
<div className="container-fluid">
<Carousel>
{pics.map((pic , index)=>{
return(
 <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={pic}
      alt="First slide"
    style={{width:'100%' , height:'600px'}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
)
})}
</Carousel>
</div>



<div className='container-fluid ' style={{display:'flex' ,justifyContent:'center' ,flexFlow:'row wrap'}}>

{AllProduct&& AllProduct.map((itm , index)=>{
return(
<CardComponent key={index} Product={itm}></CardComponent>
)

})}

</div>

    </>)
    }