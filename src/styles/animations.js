import {keyframes, css} from 'styled-components'


//Keyframes
export const fadeKeyframes = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`

export const rotateKeyframes = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`

//Animations
export const fade = (time='1s', type='ease-out', infinite='infinite')=>css`
animation: ${fadeKeyframes} ${time} ${type} ${infinite};
`
export const rotate = (time='2s', type='ease-out', infinite='infinite')=>css`
animation: ${fadeKeyframes} ${time} ${type} ${infinite};
`

