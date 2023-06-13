import React from 'react';
import styled from '@emotion/styled'
import SizeProps from './SizeInterface';

interface StackProps extends SizeProps{
    direction?: 'row'|'column'|'row-reverse'|'column-reverse',
    distribute?: 'start'|'center'|'end'|'space-between'|'space-around'|'space-evenly',
    align?: 'top'|'center'|'bottom',
    wrap?: boolean,
    gap?: number,
    padding?: number[],
    style?: React.CSSProperties;
}

const Stack = styled.div<StackProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    
    size: ${props => props.size}
`

export default Stack;