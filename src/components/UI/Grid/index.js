import React from 'react'
import { Row, Col } from './styles'

export const Grid = ()=>{

    return (

        <Row tracks={18}>
            {[...new Array(18)].map((el,i)=><Col nspan={3} key={i}></Col>)}
        </Row>
    )
}