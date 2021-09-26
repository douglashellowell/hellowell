import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getAllDocs } from '~/lib/docs';
import { Post } from '~/lib/postTypes';
import styled from 'styled-components';

const StyledPostFeed = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledPostCard = styled.li`
  background-color: white;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 5px;
  box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllDocs();
  return {
    props: { posts },
  };
};

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <StyledPostFeed>
      {posts ? (
        posts.map((post) => {
          return (
            <StyledPostCard key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.meta.title}</a>
              </Link>
            </StyledPostCard>
          );
        })
      ) : (
        <p>no posts?</p>
      )}
    </StyledPostFeed>
  );
};

export default Blog;
