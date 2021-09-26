import { GetStaticProps, NextPage } from 'next';
import { BlogPost } from '~/components/BlogPost';
import { getAllDocs, getDocBySlug } from '~/lib/docs';
import markdownToHtml from '~/lib/markdown';

export const getStaticProps = async ({ params }: { params: any }) => {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content,
    },
  };
};

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: true,
  };
}

type DocProps = {
  content: string;
  meta: any;
};

const Doc: NextPage<DocProps> = ({ meta, content }) => {
  return <BlogPost meta={meta} content={content} />;
};

export default Doc;
