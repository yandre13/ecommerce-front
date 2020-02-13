import React, {useState, useEffect} from 'react'

import { Header, Nav, Logo, Items, ContainerButton } from './styles'
import { ToggleButton } from '../ToogleButton'
import { Container } from '../../Container'
import { Links } from '../../../App/Links'

export const Toolbar = ({show, setShow, width, right})=>{
    
    const [transparent, setTransparent] = useState(0),
     innerHeight = window.innerHeight - 30,
     innerMiddleHeight = window.innerHeight / 4

    useEffect(()=>{
        window.addEventListener('scroll', ()=>setTransparent(window.scrollY))
        return ()=>window.removeEventListener('scroll', ()=>setTransparent(window.scrollY))
    },[transparent])


    return (<Header transparent={transparent} innerHeight={innerHeight} innerMiddleHeight={innerMiddleHeight}>
        <Container>
            <Nav right={right}>
                {width < 768 && 
                <ContainerButton>
                    <ToggleButton show={show} setShow={setShow}/>
                </ContainerButton>
                }
                <Logo><a href='/'>rightaway<br/></a></Logo>
                
                {width > 768 && <Items right={right}>
                    <ul>
                        <Links/>
                    </ul>
                </Items>}
            </Nav>
        </Container>
    </Header>)
}