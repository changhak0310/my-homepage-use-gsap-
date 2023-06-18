/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const menuIconLineHeight = 2;
const menuIconLineSpace = 8;
const menuIconLineOffsetY = menuIconLineHeight + menuIconLineSpace;
const menuIconHeight = 3 * menuIconLineHeight + 2 * menuIconLineSpace;
const cubicBerzierIn = 'cubic-bezier(0.3, 1, 0.7, 1)';
const animationTime = '0.7s'

export const MenuIcon = () => {
    const [isActive, setIsActive] = useState(false);
    const [preLoad, setpreLoad] = useState(false);
    
    const animateLine1Active = keyframes`
        0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
        }
        50% {
            transform: translate3d(0, ${menuIconLineOffsetY+"px"}, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(0, ${menuIconLineOffsetY+"px"}, 0) rotate(45deg);
        }
    `;

    const animateLine2Active = keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    `;

    const animateLine3Active = keyframes`
        0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
        }
        50% {
            transform: translate3d(0, -${menuIconLineOffsetY+"px"}, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(0, -${menuIconLineOffsetY+"px"}, 0) rotate(135deg);
        }
    `;

    const animateLine1Rev = keyframes`
        0% {
            transform: translate3d(0, ${menuIconLineOffsetY+"px"}, 0) rotate(45deg);
        }
        50% {
            transform: translate3d(0, ${menuIconLineOffsetY+"px"}, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
        }
    `;

    const animateLine2Rev = keyframes`
        0% {
            transform: scale(0);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    `;

    const animateLine3Rev = keyframes`
        0% {
            transform: translate3d(0, -${menuIconLineOffsetY+"px"}, 0) rotate(135deg);
        }
        50% {
            transform: translate3d(0, -${menuIconLineOffsetY+"px"}, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
        }
    `;

    const MenuIconStyles = styled.div`
        width: 30px;
        height: ${menuIconHeight+"px"};
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

    const LineStyles = styled.div`
        width: 100%;
        height: ${menuIconLineHeight+"px"};
        background-color: #fff;
        border-radius: 3px;
        transition: background-color 0.2s ease-in-out;
    `;

    const animateLine1StylesActive = css`
        animation: ${animateLine1Active} ${animationTime} ${cubicBerzierIn} forwards;
    `;

    const animateLine2StylesActive = css`
        animation: ${animateLine2Active} ${animationTime} ${cubicBerzierIn} forwards;
    `;

    const animateLine3StylesActive = css`
        animation: ${animateLine3Active} ${animationTime} ${cubicBerzierIn} forwards;
    `;

    const animateLine1StylesRev = css`
        animation: ${animateLine1Rev} ${animationTime} ease-in-out;
    `;

    const animateLine2StylesRev = css`
        margin: ${menuIconLineSpace+"px"} 0px;
        animation: ${animateLine2Rev} ${animationTime} ease-in-out;
    `;

    const animateLine3StylesRev = css`
        animation: ${animateLine3Rev} ${animationTime}  ease-in-out;
    `;

    const animateLine1Styles = css`
        ${ preLoad ? 
            isActive ? animateLine1StylesActive : animateLine1StylesRev
            : css`animation: none;` 
        }
    `;

    const animateLine2Styles = css`
        ${ preLoad ? 
            isActive ? animateLine2StylesActive : animateLine2StylesRev
            : css`animation: none;` 
        }
    `;

    const animateLine3Styles = css`
        ${ preLoad ? 
            isActive ? animateLine3StylesActive : animateLine3StylesRev
            : css`animation: none;` 
        }
    `;

    const handleClick = () => {
        setIsActive((isActive) => !isActive);
        setpreLoad(true);
    };

  return (
    <MenuIconStyles onClick={handleClick}>
      <LineStyles css={animateLine1Styles}/>
      <LineStyles css={animateLine2Styles}/>
      <LineStyles css={animateLine3Styles}/>
    </MenuIconStyles>
  );
};