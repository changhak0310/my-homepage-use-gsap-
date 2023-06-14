import React from 'react';
import { Stack } from '@/designSystem/Stack';

const Header: React.FC = () => {
  return (
    <Stack
      wrap
      style={{background: "#c3b5b5"}}
    >
      <div style={{background: "#a33535", padding:"30px"}}>Logo</div>
      <div style={{background: "#35a356", padding:"30px"}}>Menu</div>

    </Stack>
  );
};

export default Header;

