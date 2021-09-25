import { remark } from 'remark';
import html from 'remark-html';
// import prism from 'remark-prism'; // ????
import rehypeHighlight from 'rehype-highlight';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
