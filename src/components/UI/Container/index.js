import React from 'react'
import { ContainerOwn } from './styles'

export const Container = ({center, height, paddingTopAndBottom, children}) =>{

    const size = height && height.size

    return(
    <ContainerOwn center={center} heightStyled={size} paddingTopAndBottom={paddingTopAndBottom}>
        {children}
    </ContainerOwn>
    )
}