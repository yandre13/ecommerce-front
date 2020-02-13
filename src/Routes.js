import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Signup} from './components/App/User/Signup'
import {Signin} from './components/App/User/Signin'
import {Home} from './components/App/Home'

import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from './styles'
import {Navbar} from './components/UI/Navbar'
import { StateProvider } from './state'
import { reducer, initialState } from './state/reducer'
import { Dashboard } from './components/App/Dashboard'
import { AddCategory } from './components/App/AddCategory'
import { AddProduct } from './components/App/AddProduct'
import { Shop } from './components/App/Shop'
import { Product } from './components/App/Product'
import { Cart } from './components/App/Cart'




export const Routes = ()=>{



 return (
  <>
   <StateProvider initialState={initialState} reducer={reducer}>
    <ThemeProvider theme={{mode: 'dark'}}>
     <GlobalStyle />
     <Router>
      <Navbar/>
      <div style={{paddingTop: '86px'}}>
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/category/create' exact component={AddCategory} />
        <Route path='/product/create' exact component={AddProduct} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/product/:id' exact component={Product} />
        <Route path='/cart' exact component={Cart} />
       </Switch>
      </div>
     </Router>
    </ThemeProvider>
   </StateProvider>
  </>
 )
}