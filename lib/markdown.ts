// import prism from 'remark-prism'; // ????
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';
import remarkImages from 'remark-images';
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
    .use(remarkImages)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
