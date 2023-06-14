import React from 'react';
import styled from '@emotion/styled'
import SizeProps from './SizeInterface';

interface StackProps extends SizeProps{
    direction?: 'row'|'column'|'row-reverse'|'column-reverse',
    distribute?: 'start'|'center'|'end'|'space-between'|'space-around'|'flex-start'|'flex-end',
    align?: 'start'|'center'|'end'|'space-between'|'space-around'|'flex-start'|'flex-end',
    wrap?: boolean,
    gap?: number[] | number,
    padding?: number[] | number,
    style?: React.CSSProperties;
}

const calculateValue = (value: number[] | number): string => {
    return Array.isArray(value) 
        ? value.map(v => `${v}px`).join(' ') 
        : `${value}px`;
};

export const Stack = styled.div<StackProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.distribute || 'start'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wrap ? 'wrap':'nowrap' || 'nowrap'};
    gap: ${props => calculateValue(props.gap || 0)};
    padding: ${props => calculateValue(props.padding || 0)};
    
    height: ${props => (props.height === 'fit' || props.size === 'fit') ? 'fit-content' : `${props.height}px`};
    width: ${props => (props.width === 'fit' || props.size === 'fit') ? 'fit-content' : `${props.width}px`};

    height: ${props => props.size === 'fit' ? 'fit-content' : `${props.size}px`};
    width: ${props => props.size === 'fit' ? 'fit-content' : `${props.size}px`};
`