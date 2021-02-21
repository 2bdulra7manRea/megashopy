import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useHistory } from "react-router-dom";
import { registerAuthAdmin } from "../../networks/authApi";
import { CheckingisAuthrized } from "../../store/action";

export default function AdminReg(){

let [InfoUser, setInfoUser]=useState({AdminName:'' , password:'',email:''})

function getUserInfo(v){
setInfoUser({
...InfoUser,
[v.target.name]:v.target.value
})
}

useSelector((data)=>{
console.log(data)
})

let dispach=useDispatch();


let history=useHistory()
function SendData(){    
registerAuthAdmin(InfoUser).then((result)=>{
console.log(result)
 localStorage.setItem('token',result.data.token)
 localStorage.setItem('username',result.data.name)
dispach(CheckingisAuthrized(true))
alert('you have a new account ')
history.push('/admin/dash/')

}).catch((err)=>{
console.log(err)
})    
} 

    return(
    <>
    <div className='container'>


<h1>Admin Account</h1>


<h3>Sign up</h3>
    <form>
    <div className="form-group">
    <label >Full Name</label>
    <input type="text"  className="form-control" onChange={getUserInfo} value={InfoUser.AdminName} name='AdminName'  placeholder="Enter FullName"></input>
    <small  className="form-text text-muted">We'll never share your username with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" onChange={getUserInfo} value={InfoUser.email} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" onChange={getUserInfo} value={InfoUser.password} name='password' id="exampleInputPassword1" placeholder="Password"></input>
  </div>
<p>do you have account ?<Link to='/admin/login'>sign in</Link></p>
</form>

<button onClick={SendData} className="btn btn-primary">Create Admin Account</button>

    </div>
    
    
    </>
    )
    }