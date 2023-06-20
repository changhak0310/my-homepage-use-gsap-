import React from 'react';
import styled from '@emotion/styled'

const LogoStyle = styled.h2`
    line-height: 1;
    margin: 0;
    font-size: 1.5rem;
`

export const Logo = () => {
    return(
        <LogoStyle>
            MyPage
        </LogoStyle>
    )
}