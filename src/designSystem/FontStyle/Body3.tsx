import React from 'react';
import styled from '@emotion/styled'

interface Body3Props {
  style?: React.CSSProperties;
}

export const Body3 = styled.h3<Body3Props>`
    font-weight: 400;
    @media (min-width: 1800px) {
      font-size: 28px;
    }
`