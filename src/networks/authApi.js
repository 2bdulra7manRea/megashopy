import axios from 'axios'



export const registerAuthAdmin=(value)=>{
return axios.post(process.env.NODE_ENV+'admin/register',{

AdminName:value.AdminName,
email:value.email,
password:value.password    

})
}


export const LoginAuthAdmin=(value)=>{
return axios.post(process.env.NODE_ENV+'admin/login',{
email:value.email,
password:value.password
})
}