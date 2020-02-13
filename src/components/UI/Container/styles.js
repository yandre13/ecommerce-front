import styled, {css} from 'styled-components'

export const ContainerOwn = styled.div`
margin: 0 auto;
max-width: 1280px;
width: 90%;
${props=>props.center && css`
display: flex;
justify-content: center;
align-items: center;
`}
height: ${props=>props.heightStyled};
${props=>props.paddingTopAndBottom && css`
padding: ${props.paddingTopAndBottom} 0;
`}

@media only screen and (min-width: 600px) {
  & {
    width: 85%;
  }
}

@media only screen and (min-width: 1024px) {
  & {
    width: 75%;
  }
}
`