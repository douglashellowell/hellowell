/**
 * 🍍 Meta info written on top on .mdx files
 */
export type PostMeta = {
  title: string;
  topic: string;
  description: string;
  imageURL: string;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  content: string;
};
