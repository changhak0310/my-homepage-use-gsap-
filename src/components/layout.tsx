import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/modules/header';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Next.js App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;