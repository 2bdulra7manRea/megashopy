import axios from 'axios';

let url=process.env.NODE_ENV;
export const Get_Category=()=>{
return axios.get(url+'allproducts/category')
}


export const get_all_items=()=>{
return axios.get(url+'allproducts/')
}


export const get_item_category=(category)=>{    
return axios.get(url+'allproducts/category/'+category
)
}

export const search_items=(val)=>{
return axios.get(url+'allproducts/search',{
headers:{item:val}
})

}