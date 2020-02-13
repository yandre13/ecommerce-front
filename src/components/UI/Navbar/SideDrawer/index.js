import React from 'react'
import { NavDrawer } from './styles'
import { Links } from '../../../App/Links'



export const SideDrawer = ({show, right})=>(
    <NavDrawer show={show} right={right}>
        <ul>
            <Links />
        </ul>
    </NavDrawer>
)