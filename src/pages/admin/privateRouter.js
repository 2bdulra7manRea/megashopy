import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Route , Redirect} from 'react-router-dom'

export default function PrivateRouter({Component , ...rest}){



let auth= useSelector((data)=>{
console.log(data)
return data;

})

return(<>


<Route {...rest}  render={()=>{

return auth.isauth==true?<Component/>:<Redirect to='/admin/login'></Redirect>

}}></Route>


</>)




}