import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link  , useHistory} from "react-router-dom";
import { LoginAuthAdmin } from "../../networks/authApi";
import { CheckingisAuthrized } from "../../store/action";
export default function AdminLogin(){


let[InfoUser , setinfouser]=useState({email:'' , password:''})
let history=useHistory()
let dispatch=useDispatch()
function getInputdata(v) {
setinfouser({
...InfoUser,
[v.target.name]:v.target.value
})  
}

function Senddatalogin() {
LoginAuthAdmin(InfoUser).then((result)=>{
    console.log(result)
localStorage.setItem('token',result.token)
localStorage.setItem('name',result.name)
alert('you loggin')
dispatch(CheckingisAuthrized(true))
history.push('/admin/dash/')
}).catch((err)=>{
console.log(err)
})
}




function preventit(v) {
   v.preventDefault() 

}

    return(
    <>
    
    <div className='container'>


<h1>Admin Account</h1>

<h3>SIGN IN</h3>
    <form onSubmit={preventit} >
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" onChange={getInputdata}  value={InfoUser.email} id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" onChange={getInputdata} value={InfoUser.password} id="exampleInputPassword1" name='password' placeholder="Password"></input>
  </div>
<p>do you have not account ?<Link to='/admin/register'>sign Up</Link></p>
</form>

  <button onClick={Senddatalogin} className="btn btn-primary">Login</button>

    </div>
    
    
    </>
    )
    }