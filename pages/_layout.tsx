import Head from 'next/head';
import React from 'react';
import { PostMeta } from '~/lib/postTypes';
import Header from '../components/Header';

type LayoutProps = {
  content: string;
  meta: PostMeta;
};

const Layout: React.FC<LayoutProps> = ({ children, meta, content }) => {
  return (
    <main>
      <Head>
        <title>{meta?.title || 'Dougs Blog'}</title>
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
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export default Layout;
