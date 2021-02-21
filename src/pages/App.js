import{Switch , BrowserRouter , Route} from 'react-router-dom'
import HeaderComponent from '../components/header'
import Register from './auth/registerPage'
import Home from './homepage'
import Search from './products/productSearch'
import Login from './auth/loginPage'
import Details from './products/productDetails'
import Category from './products/productCategory'
import React, { Suspense } from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckOut from './cart/checkout'
import AdminReg from './admin/Adminregister'
import Dashboard from './admin/dashboard'
import AdminLogin from './admin/AdminLogin'
import PrivateRouter from './admin/privateRouter'
export default function App(){




const CategoryLazy=React.lazy(()=>import('./products/productCategory'))
const SearchLazy=React.lazy(()=>import('./products/productSearch'))


return(<>
<Suspense fallback={'Loading.......'}>
<BrowserRouter>
<HeaderComponent></HeaderComponent>
<Switch>
<Route path='/' exact component={Home}></Route>
<Route path='/register' exact component={Register}></Route>
<Route path='/login' exact component={Login}></Route>
<Route path='/details' exact  component={Details}></Route>
<Route path='/category/:id'  exact component={CategoryLazy}></Route>
<Route path='/search/:id' exact component={SearchLazy}></Route>
<Route path='/cart' exact component={CheckOut}></Route>
<Route path='/admin/register' exact component={AdminReg}></Route>
<Route path='/admin/login' exact component={AdminLogin}></Route>
<PrivateRouter path='/admin/dash/*' Component={Dashboard}></PrivateRouter>
</Switch>
</BrowserRouter>
</Suspense>
</>)
}