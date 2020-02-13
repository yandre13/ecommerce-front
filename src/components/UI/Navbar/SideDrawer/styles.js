import styled, {css} from 'styled-components'

import theme from 'styled-theming'

const backgroundColorNavDrawer = theme('mode', {
    light: '#fff',
    dark: '#212121'
})

export const NavDrawer = styled.nav`
height: 100%;
background: ${backgroundColorNavDrawer};
box-shadow: ${props=>props.right ? '-2px 0 8px  rgba(0,0,0,.7)' : '2px 0 8px rgba(0,0,0,.7)'};
position: fixed;
top: 56px;
${props=>props.right && css`right: 0;`}
width: 78vw;
max-width: 300px;
z-index: 200;
${props=>props.show ? css`
transform: translateX(0);
transition: transform .2s ease-out;
`:
css`
transform: translateX(${props=>props.right ? '101%' : '-101%'});
transition: transform .2s ease-out;
`
}

& ul{
    display: flex;
    flex-direction: column;
    list-style: none;
}

@media (min-width: 769px) {
    &{
        display: none;
    }
}

`
