import React from 'react'
import { H1, H2, H3, P, H4 } from './styles'

export const Text = ({type, align, weight, children})=>{

    return (
    <>
    {type.tag === 'h1' && <H1 align={align} weight={weight}>{children}</H1>}
    {type.tag === 'h2' && <H2 align={align} weight={weight}>{children}</H2>}
    {type.tag === 'h3' && <H3 align={align} weight={weight}>{children}</H3>}
    {type.tag === 'h4' && <H4 align={align} weight={weight}>{children}</H4>}
    {type.tag === 'p' && <P align={align} weight={weight}>{children}</P>}
    </>
    )

}