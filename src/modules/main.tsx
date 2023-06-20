import React from 'react';
import styled from '@emotion/styled';
import { Stack } from '@/designSystem';
import { Heading2 } from '@/components/FontStyle';
import { Body3 } from '@/components/FontStyle';

const MainStyle = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-self: center;
`
const CenterContainer = styled.div`
    z-index: 11;
    position: relative;
    display: flex;
`

const MouseOn = styled.a`
    padding: 12px 22px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: transparent;
    transition: color 0.3s, -webkit-text-stroke: 0.3s;
    -webkit-text-stroke; 1px #000;
    &:hover{
        color: black;
        -webkit-text-stroke: 1px transparent;
    }
`


export const Main: React.FC = () => {
  return (
    <MainStyle>
        <Body3 style={{zIndex: 11, position: 'relative'}}>We make it happen</Body3>
        <Stack
            gap={30}
            style={{
                zIndex: 11,
                position: "relative",
                display: "flex"}}
        > 
            <MouseOn><Heading2>Websites</Heading2></MouseOn>
            <MouseOn><Heading2>Applications</Heading2></MouseOn>
            <MouseOn><Heading2>Branding</Heading2></MouseOn>
        </Stack>
    </MainStyle>
  );
};
