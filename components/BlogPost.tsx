import Head from 'next/head';
import { PostMeta } from '~/lib/postTypes';

type BlogPostProps = {
  meta: PostMeta;
  content: string;
};

export const BlogPost: React.FC<BlogPostProps> = ({ meta, content }) => {
  return (
    <>
      <Head>
        <title>Douglas Hellowell || {meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};
