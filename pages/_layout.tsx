import Head from 'next/head';
import React from 'react';
import Footer from '~/components/Footer';
import { PostMeta } from '~/lib/postTypes';
import Header from '../components/Header';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 90vw;
  max-width: 700px;
  margin: auto;
`;

// might remove
type LayoutProps = {
  meta?: PostMeta;
};

const Layout: React.FC<LayoutProps> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>Douglas Hellowell</title>
        <meta name="description" content={meta?.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
      </Head>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
