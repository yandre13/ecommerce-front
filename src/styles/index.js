import {createGlobalStyle} from 'styled-components'

//Theming
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
    dark: '#000',
    light: '#eee'
}),
    color = theme('mode', {
        dark: '#f2f2f2',
        light: '#000'
    })

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${backgroundColor};
    font-size: 16px;
    color: ${color};
}
`