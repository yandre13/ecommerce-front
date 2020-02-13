import React from 'react'
import { useStateValue } from '../../../state'
import {useHistory} from 'react-router-dom'
import { Link } from './styles'

const Nav = ({role})=>{
 return (
  <>
   {
    role === 'USER' ?
    <div>
     <ul>
      <li>
       <Link to='/' exact activeClassName='selected'>My cart</Link>
      </li>
      <li>
       <Link to='/' exact activeClassName='selected'>Update profile</Link>
      </li>
     </ul>
    </div>
    :
    <div>
     <ul>
      <li>
       <Link to='/category/create' exact activeClassName='selected'>Add category</Link>
      </li>
      <li>
       <Link to='/product/create' exact activeClassName='selected'>Add product</Link>
      </li>
     </ul>
    </div>
   }
  </>
 )
}

export const Dashboard = ()=>{

 const history = useHistory()
 const [{user}] = useStateValue()

 
 
 return (
 <>
 {!user.name && history.push('/signin')}
  { user.name && console.log(history.location)}
  <div>
  <h1>Hi {user.name}</h1>
  <br/>
  </div>
  <Nav role={user.role} />
 
 </>
 )
}