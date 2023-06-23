import React from 'react';
import { Stack } from '@/designSystem/Stack';
import { Logo, MenuIcon }  from '@/components/index'
import styled from '@emotion/styled';
import { Body4 } from '@/designSystem/FontStyle/Body4';

const HeaderStlye = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  right: 60px;
`

export const Header: React.FC = () => {
  return (
    <HeaderStlye>
      <Stack
        distribute="space-between"
        style={{background: "#c3b5b5"}}
      >
        <Logo/>
        <Stack 
          gap={25}
        >
          <Body4>menu</Body4>
          <MenuIcon color="#000" style={{marginRight: '20px'}}/>
        </Stack>
      </Stack>
    </HeaderStlye>
  );
};
