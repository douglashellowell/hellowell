import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDir = path.join(process.cwd(), 'posts');

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDir);
  const docs = slugs.map((slug) => getDocBySlug(slug));

  return docs;
}
