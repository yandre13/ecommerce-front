import React from 'react'

import {Link} from './styles'
import { useStateValue } from '../../../state'



export const Links = ()=>{
 
 //This is for User data
 const [{user, cart}] = useStateValue()
 const signOut = ()=>{
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  window.location.reload()
 }

 const quantity = cart.reduce((acc, el)=>acc + el.quantity, 0) 

 return (
  <>
  <li>
   <Link to='/' exact activeClassName='selected'>Home</Link>
  </li>
  <li>
   <Link to='/shop' exact activeClassName='selected'>Shop</Link>
  </li>
  <li>
   <Link to='/signin' exact activeClassName='selected'>Signin</Link>
  </li>
  {
   user.name && 
   <li>
   <Link to='/' exact onClick={signOut} >Signout</Link>
  </li>
  }
  <li>
   <Link to='/signup' exact activeClassName='selected'>Signup</Link>
  </li>
  <li>
   <Link to='/dashboard' exact activeClassName='selected'>Dashboard</Link>
  </li>
  <li>
   <Link to='/cart' exact activeClassName='selected'>Cart {quantity > 0 && quantity}</Link>
  </li>
 </>
 )
}