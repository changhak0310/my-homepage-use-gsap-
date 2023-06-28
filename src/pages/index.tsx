import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Main, Cursor } from '@/modules';
import CursorClass from '@/ts/cursor'

const Container = styled.div`
  padding: 0 40px;
`

const Home: React.FC = () => {
  useEffect(() => {
    const cursorElement = document.querySelector(".cursor");
    if (cursorElement instanceof HTMLElement) {
        const cursor = new CursorClass(cursorElement);
    }
  }, [])

  return (
    <Container className='loading'>
      <Main/>
      <Cursor/>
    </Container>
  );
};

export default Home;