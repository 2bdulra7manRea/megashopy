import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useEffect, useState } from "react";
import { Get_Category } from "../networks/productsApi";
import { useDispatch, useSelector } from "react-redux";
export default function HeaderComponent(){

let [valueOFinput,setValueOfinput]=useState({value:''})
let [categories , setcategories]=useState([])
useEffect(()=>{
Get_Category().then((api)=>{
setcategories(api.data)
console.log(api.data[0])
})
},[])


function getValueOFinput(v){
  setValueOfinput({
    value:v.target.value
  })
}

let{numberofitems} = useSelector((data)=>{
  console.log(data)
return data
})




    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Shopping World
            </Link>
            <span className="navbar-text">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={valueOFinput.value}
                  onChange={getValueOFinput}
                ></input>
                <Link className="btn btn-outline-success" to={`/search/${valueOFinput.value}`}  >
                  Search
                </Link>


              </form>
            </span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <span style={{backgroundColor:'red',color:'white', borderRadius:'100%' ,padding:'10px'}}>{numberofitems}</span>
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dash/">
                  dashboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"style={{display:'flex' ,width:'100%', justifyContent:'space-around'}}>
 <NavDropdown title="Shop by Category" id="collasible-nav-dropdown">
      
{categories.map((res ,index)=>{

return(
<Dropdown.Item key={index} ><Link to={`/category/${res._id}`} >{res._id}</Link></Dropdown.Item>
)
  })}
  
      </NavDropdown>

      <Nav.Link ><Link to='/brand' style={{color:'white' , textDecoration:'none'}}>Shop by brand</Link></Nav.Link>
      <Nav.Link ><Link to='/brand' style={{color:'white' , textDecoration:'none'}}>Shop by brand</Link></Nav.Link>
      <Nav.Link ><Link to='/brand' style={{color:'white' , textDecoration:'none'}}>Shop by brand</Link></Nav.Link>
      <Nav.Link ><Link to='/brand' style={{color:'white' , textDecoration:'none'}}>Shop by brand</Link></Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>



      </>
    );
    }