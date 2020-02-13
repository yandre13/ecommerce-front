import React from 'react'
import { Hamburger, Stripe } from './styles'


export const ToggleButton = ({show, setShow})=>(

    
    <Hamburger show={show} onClick={setShow}>
        <Stripe className='top'></Stripe>
        <Stripe className='middle'></Stripe>
        <Stripe className='bottom'></Stripe>
    </Hamburger>
)