/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css, keyframes } from '@emotion/react';

const menuIconLineHeight = 3;
const menuIconLineSpace = 10;
const menuIconLineOffsetY = menuIconLineHeight + menuIconLineSpace;
const menuIconHeight = 3 * menuIconLineHeight + 2 * menuIconLineSpace;
const cubicBerzierIn = 'cubic-bezier(0.3, 1, 0.7, 1)';
const cubicBerzerOut = 'cubic-bezier(1, 0.7, 1, 0.3)';

export const MenuIcon = () => {
    const [isActive, setIsActive] = useState(false);

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

    const menuIconStyles = css`
        width: 40px;
        height: ${menuIconHeight+"px"};
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

    const lineStyles = css`
        width: 100%;
        height: ${menuIconLineHeight+"px"};
        background-color: #fff;
        border-radius: 3px;
        transition: background-color 0.2s ease-in-out;

        &:hover{
            background-color: #333333;
        }
    `;

    const animateLine1StylesActive = css`
        animation: ${animateLine1Active} .7s ${cubicBerzierIn} forwards;
    `;

    const animateLine2StylesActive = css`
        animation: ${animateLine2Active} .7s ${cubicBerzierIn} forwards;
    `;

    const animateLine3StylesActive = css`
        animation: ${animateLine3Active} .7s ${cubicBerzierIn} forwards;
    `;

    const animateLine1StylesRev = css`
        animation: ${animateLine1Rev} 0.7s ease-in-out;
    `;

    const animateLine2StylesRev = css`
        margin: ${menuIconLineSpace+"px"} 0px;
        animation: ${animateLine2Rev} 0.7s ease-in-out;
    `;

    const animateLine3StylesRev = css`
        animation: ${animateLine3Rev} 0.7s  ease-in-out;
    `;

    const handleClick = () => {
        setIsActive(!isActive);
    };

  return (
    <div css={menuIconStyles} onClick={handleClick}>
      <div css={[lineStyles, isActive && animateLine1StylesActive, !isActive && animateLine1StylesRev]} />
      <div css={[lineStyles, isActive && animateLine2StylesActive, !isActive && animateLine2StylesRev]} />
      <div css={[lineStyles, isActive && animateLine3StylesActive, !isActive && animateLine3StylesRev]} />
    </div>
  );
};