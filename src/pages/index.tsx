import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Main, Cursor } from '@/modules';
import CursorClass from '@/ts/cursor'

const Container = styled.div`
  @media (min-width: 360px) {
    padding: 0 30px;
  }
  @media (min-width: 768px) {
      padding: 0 100px;
    }
    @media (min-width: 1024px) {
      padding: 0 120px;
    }
    @media (min-width: 1200px) {
      padding: 0 150px;
    }
    @media (min-width: 1350px) {
      padding: 0 180px;
    }
    @media (min-width: 1600px) {
      padding: 0 220px;
    }
    @media (min-width: 1800px) {
      padding: 0 270px;
    }
`

const Home: React.FC = () => {
  useEffect(() => {
    const cursorElement = document.querySelector(".cursor");
    if (cursorElement instanceof HTMLElement) {
        const cursor = new CursorClass(cursorElement);
    }
  }, [])

  return (
    <Container>
      <Main/>
      <Cursor/>
    </Container>
  );
};

export default Home;