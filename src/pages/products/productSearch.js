import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { combineReducers } from "redux";
import CardComponent from "../../components/card";
import { search_items } from "../../networks/productsApi";




export default function Search(){

let param=useParams();
let [items , setItems]=useState([])
let [atlItem, setAlt]=useState([])
useEffect(()=>{
console.log(param.id)

search_items(param.id).then((result)=>{
console.log(result.data)
setItems(result.data)
setAlt(result.data)
}).catch((err)=>{
throw new Error('WRONG TO CATCH DATA FROM DATABASE')
})
},[param.id ])

let [sel , setSel ]=useState('')
function getvalueOfSelect(v){
let Value=v.target.value
console.log(Value)
setSel(v.target.value)

let newARR=[];
if(Value==='1'){
newARR=[].concat(items).sort((a,b)=>{
return b.price -a.price
})
setItems(newARR)
}else if(Value=='2'){
    newARR=[].concat(items).sort((a,b)=>{
        return a.price -b.price
        })
        setItems(newARR)
}else if(Value=='3'){
    newARR=[].concat(items).sort((a,b)=>{
        return b.rating -a.rating
        })
        setItems(newARR)
}else if(Value=='4'){
    newARR=[].concat(items).sort((a,b)=>{
        return b.productName -a.productName
        })
        setItems(newARR)
}else if(Value=='normal'){

        setItems(atlItem)
}





}


    return(<>
      <div className='container'>


<div className='row'>
    <div className='col-8'></div>
    <div className='col-4'>

    <div className="input-group mb-3">
  <label className="input-group-text">sort by:</label>
  <select className="form-select"onChange={getvalueOfSelect}  >
    <option value="normal">Featured</option>
    <option value="1">price :high to low</option>
    <option value="2">price :low to high</option>
    <option value="3">rating</option>
    <option value="4">name</option>
  </select>
</div>


    </div>
    </div>          
<div className='row'>
<div className='col-lg-12'  style={{display:'flex' ,justifyContent:'center' ,flexFlow:'row wrap'}}>



{items&&items.map((itm, index)=>{
return(
<CardComponent key={index} Product={itm} ></CardComponent>
)
})
}






</div>

</div>
  </div>





    </>)
    }