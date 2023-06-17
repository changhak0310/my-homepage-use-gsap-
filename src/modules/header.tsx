import React from 'react';
import { Stack } from '@/designSystem/Stack';
import { Logo, MenuIcon }  from '@/components/index'

const Header: React.FC = () => {
  return (
    <Stack
      distribute="space-between"
      padding={[0,40,0,40]}
      style={{background: "#c3b5b5"}}
      height={120}
    >
      <Logo/>
      <MenuIcon/>

    </Stack>
  );
};

export default Header;

