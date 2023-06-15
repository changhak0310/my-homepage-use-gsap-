import React from 'react';
import { Stack } from '@/designSystem/Stack';
import { Logo } from '@/components/logo';

const Header: React.FC = () => {
  return (
    <Stack
      distribute="space-between"
      padding={[0,40,0,40]}
      style={{background: "#c3b5b5"}}
      height={120}
    >
      <Logo/>
      <div style={{background: "#35a356", padding:"30px"}}>Menu</div>

    </Stack>
  );
};

export default Header;

