import axios from 'axios'
export const CheckingisAuthrized=(Payload)=>{
return{
type:'DO_AUTH',
payload:Payload
}
}


export const CategoryOfStore=()=>async()=>{

}

export const AddItemToCart=(Payload)=>{
return{
type:"ADD_TO_CART",
payload:Payload
}


}

export const Addnumbertocart=(Payload)=>{
return{
type:"ADD_NUMBER_TO_CART",
payload:Payload
}
}