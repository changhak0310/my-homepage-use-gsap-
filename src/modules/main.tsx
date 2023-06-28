/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';
import { css } from "@emotion/react"
import { Stack } from '@/designSystem';
import { Heading2 } from '@/designSystem/FontStyle';
import { Body3 } from '@/designSystem/FontStyle';

const MainStyle = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-self: center;
`

const Title = styled.div`
    z-index: 11;
    position: relative;

    &>h1 {
        margin: 0;
    }
`

const CenterContainer = styled.div`
    z-index: 11;
    position: relative;
    display: flex;
`

const ItemPadding = styled.div`
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -30vh;
      bottom: -30vh;
      left: 0;
      right: 0;
    }
`

const MouseOn = styled.a`
    padding: 12px 22px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: transparent;
    transition: color 0.3s, -webkit-text-stroke 0.3s;
    -webkit-text-stroke: 1px #000;
    &:hover{
        color: #fff;
        -webkit-text-stroke: 1px #000;
    }
`


export const Main: React.FC = () => {
  return (
    <MainStyle className='inner'>
        <CenterContainer>
            <div/>
            <Stack
               direction='column'
               align='start'
            >
            <Title>
                <Body3>We make it happen</Body3>
            </Title>
            <Stack
                gap={30}
                style={{
                    zIndex: 11,
                    position: "relative",
                    display: "flex"
                }}
            > 
                <div data-video-src="websites" className='mouse'>
                    <ItemPadding/>
                    <MouseOn css={{paddingLeft: 0}}><Heading2>Websites</Heading2></MouseOn>
                </div>
                <div data-video-src="apps" className='mouse'>
                    <ItemPadding/>
                    <MouseOn><Heading2>Applications</Heading2></MouseOn>
                </div>
                <div data-video-src="branding" className='mouse'>
                    <ItemPadding/>
                    <MouseOn css={{paddingRight: 0}}><Heading2>Branding</Heading2></MouseOn>
                </div>
            </Stack>
            </Stack>
            
        </CenterContainer>
    </MainStyle>
  );
};
