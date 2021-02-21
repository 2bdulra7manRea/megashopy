import {Switch , BrowserRouter , Route , Link} from 'react-router-dom'
import DashboardAdminPage from './profile/dashboardPage'

export default function Dashboard(){



return(
<>
<div className='container-fluid'>
<div className='row'>
<div className="col-lg-3">
<ul class="nav flex-column">
  <li class="nav-item">
    <Link  className='nav-link' to='/dash/dashboard'>Dashboard</Link>
  </li>
  <li class="nav-item">
    <Link  className='nav-link' to='/dash/profile'>Profile</Link>
  </li>
  <li class="nav-item">
    <Link  className='nav-link' to='/dash/tables'>Tables</Link>
  </li>
  <li class="nav-item">
    <Link  className='nav-link' to='/dash/google'>Google</Link>
  </li>
  <li class="nav-item">
    <Link  className='nav-link' to='/dash'>logout</Link>
  </li>
</ul>


</div>
<div className='col-lg-8'>
<Switch>

<Route path='/dash/dashboard' component={DashboardAdminPage}></Route>


</Switch>
</div>
</div>
</div>
</>
)
}