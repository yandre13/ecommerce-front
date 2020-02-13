import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'
export const CardContainer = styled.article`
display: flex;
flex-direction: column;
width: 100%;
background: transparent;
${props=>props.border &&  
css`
border: 2px solid #212121;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
`
}
`

export const ImgContainer = styled.div`
position: relative;
${props=>props.border &&  
css`
border-top-left-radius: 4px;
border-top-right-radius: 4px;
`
}

width: 100%;
padding-bottom: 56.25%;
overflow: hidden;
    & img{
        position: absolute;
        width: 100% ;
    }
`

export const Content = styled.div`
padding: 10px 20px;
border-top: 0;

`

export const Link = styled(NavLink)`
display: inline-block;
color: #fff;
text-decoration: none;
padding: 8px 10px;
background: ${props=>props.view ? '#00685e' : 'hsl(36,100%,50%)'};
font-size: 14px;
border-radius: 10px;
 &.selected{
  color: red;
 }
`