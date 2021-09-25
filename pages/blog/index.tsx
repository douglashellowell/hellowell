import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getAllDocs } from '~/lib/docs';
import { Post } from '~/lib/postTypes';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllDocs();
  return {
    props: { posts },
  };
};

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <ul>
      <Link href="/">
        <a>home</a>
      </Link>
      {posts &&
        posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.meta.title}</a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Blog;
