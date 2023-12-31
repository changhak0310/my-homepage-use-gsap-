import React from 'react';
import styled from '@emotion/styled';

const CursorStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  contain: layout style size;
  pointer-events: none;

  &.media-blend {
    z-index: 100;
    mix-blend-mode: exclusion;
    
    .cursor-media{
      filter: exclusion;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: -24px;
    left: -24px;
    display: block;
    width: 48px;
    height: 48px;
    transform: scale(0.2);
    background: black;
    border-radius: 50%;
  }
`
const CursorMedia = styled.div`
  display: block;
  height: 350px;
  width: 350px;
  overflow: hidden;
  border-radius: 100%;
  transform: scale(0);
  margin: -175px 0 0 -175px;
  position: relative;

  video {
    height: 350px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
`

export const Cursor: React.FC = () => {
  return (
    <CursorStyle className='cursor'>
        <CursorMedia className='cursor-media'>
          <video
            src="/videos/websites.mp4"
            preload='auto'
            autoPlay
            muted
            loop
            id='websites'
          />
          <video
            src="/videos/apps.mp4"
            preload='auto'
            autoPlay
            muted
            loop
            id='apps'
          />
          <video
            src="/videos/branding.mp4"
            preload='auto'
            autoPlay
            muted
            loop
            id='branding'
          />
        </CursorMedia>
    </CursorStyle>
  );
};