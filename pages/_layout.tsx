import Head from 'next/head';
import React from 'react';
import Footer from '~/components/Footer';
import { PostMeta } from '~/lib/postTypes';
import Header from '../components/Header';
import styled from 'styled-components';
import { ThemeStyles } from 'styles/theme';

const StyledMain = styled.main`
  background-color: ${({ theme }: { theme: ThemeStyles }) => theme.primary};
  max-width: ${({ theme }: { theme: ThemeStyles }) => theme.mainWidth};

  margin: 0 auto;
  box-shadow: 0px 0px 10px 5px hsla(0, 0%, 0%, 0.5);
  padding: ${({ theme }: { theme: ThemeStyles }) => theme.spacing2};
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
      {/* <Footer />  */}
    </>
  );
};

export default Layout;
