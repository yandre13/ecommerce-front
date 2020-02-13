import styled, {css} from 'styled-components'
import theme from 'styled-theming'

//Theme
const navbarBackgroundColor = theme('mode', {
    light: '#fff',
    dark: '#333',
  });


export const ContainerButton = styled.div`
display: flex;
align-items: center;
height: 56px;
justify-self: flex-end;
`

//This needs a Header
export const Header = styled.header`
position: fixed;
display: flex;
justify-content: center;
height: 56px;
width: 100%;
border-bottom: 1px solid #FFDCBA;
/* background */
transition: .4s ease-in;
background: transparent;
${props=>props.transparent > props.innerMiddleHeight && css`
background: #212121;
border: 0;
`}
${props=>props.transparent > props.innerHeight && css`
background: transparent;
backdrop-filter: saturate(180%) blur(25px);
border-bottom: 1px solid #212121;
`}
top: 0;
left: 0;
z-index: 10;

`
//A nav
export const Nav = styled.nav`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media (max-width: 768px) {
    &{
        flex-direction: ${props=>props.right ? 'row-reverse' : 'row'};
    }
}
`
//A logo in a div
export const Logo = styled.div`
height: 100%;
display: flex;
align-items: center;
align-self: flex-start;
& a{
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 1.5;
}
& img{
    width: 120px;
    display: block;
    padding: 10px;
}
`
//A div for the items
export const Items = styled.div`
width: 100%;
& ul{
    list-style: none;
    display: flex;
    justify-content: ${props=>props.right ? 'flex-end' : 'flex-end'};
}
& li{
    padding: 0 .5rem;
} a{
    text-decoration: none;
    color: #fff;
} a:hover, :active{
    color: #333;
}
@media (max-width: 768px) {
    &{
        display: none;
    }
}
`