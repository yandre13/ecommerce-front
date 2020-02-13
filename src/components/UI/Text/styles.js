import styled from 'styled-components'

export const H1 = styled.h1`
font-size: 32px;
font-weight: ${props=> props.weight ? props.weight : 'normal'};
text-align: ${props=>props.align ? props.align : 'center'};

`
export const H2 = styled.h2`
font-size: 40px;
line-height: 46px;
font-weight: ${props=> props.weight ? props.weight : 'normal'};
text-align: ${props=>props.align ? props.align : 'center'};
@media screen and (min-width: 600px) {
    font-size: 46px;
    line-height: 52px;
}
@media screen and (min-width: 960px) {
    font-size: 52px;
    line-height: 60px;
}
@media screen and (min-width: 1200px) {
    font-size: 58px;
    line-height: 66px;
}
@media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 72px;
}
`

export const H3 = styled.h3`
font-size: 22px;
line-height: 28px;
font-weight: ${props=> props.weight ? props.weight : 'normal'};
text-align: ${props=>props.align ? props.align : 'center'};
@media screen  and (min-width: 768px){
    font-size: 26px;
    line-height: 32px;
}
`

export const H4 = styled.h4`
font-size: 20px;
font-weight: ${props=> props.weight ? props.weight : 'normal'};
text-align: ${props=>props.align ? props.align : 'center'};
`
export const H5 = styled.h5`
font-size: 20px;
font-weight: ${props=> props.weight ? props.weight : 'normal'};
text-align: ${props=>props.align ? props.align : 'center'};
`

export const P = styled.p`
font-size: 16px;
font-weight: ${props=> props.weight ? props.weight : 'normal'};
text-align: ${props=>props.align ? props.align : 'center'};
color: #fff;
`