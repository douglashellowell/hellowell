---
title: Building this site
description: how this site was made!
---

# Building this site

### Starting again

Hoo boy did this site go through a few iterations before I felt happy enough with it

I wanted an interesting project to sink my teeth into outside of work while giving myself a space to ramble about things that interest me.

I had initially approached this with [GatsbyJS](https://www.gatsbyjs.com/) and [SvelteKit](https://kit.svelte.dev/) which both worked brilliantly for what I wanted and had excellent documentation and community support.

However after a bit of "lets bin the whole thing and try something else" and eventually this [NextJS](https://nextjs.org/) site took root.

From the offset i knew i wanted:

- static-generated blog pages from markdown
- styled-components with site-wide theming
- it to be **snazzy** 🤩

and that's it!

Incredibly I ended up with this monstrous dependencies list:

```json
  // package.json

  "dependencies": {
    "@mdx-js/loader": "^1.6.22",
    "@next/mdx": "^11.1.2",
    "gray-matter": "^4.0.3",
    "next": "11.1.2",
    "polished": "^4.1.3",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "rehype-format": "^4.0.0",
    "rehype-highlight": "^5.0.0",
    "rehype-stringify": "^9.0.2",
    "remark": "^14.0.1",
    "remark-html": "^14.0.1",
    "remark-images": "^3.0.0",
    "remark-prism": "^1.3.6",
    "remark-rehype": "^9.1.0",
    "styled-components": "^5.3.1"
  },
  "devDependencies": {
    "@types/react": "17.0.24",
    "@types/remark-prism": "^1.3.0",
    "@types/styled-components": "^5.1.14",
    "babel-plugin-styled-components": "^1.13.2",
    "eslint": "7.32.0",
    "eslint-config-next": "11.1.2",
    "typescript": "4.4.3"
  }
```

---

### To Begin

I bootstrapped a generic nextJS starter using

```bash
yarn create next-app hellowell --typescript
```

Tearing out all the placeholder components I first looked at getting some markdown pages rendered

NextJS, like SvelteKit, uses project structure to organise it's pages and routes. The **default export** of each `*.tsx` file within the `/pages` directory becomes a page! `index.tsx` files are treated as the root of each path while `_*.tsx` are ignored

e.g

| file path                | website endpoint   |
| ------------------------ | ------------------ |
| `/pages/index.tsx`       | /                  |
| `/pages/contact.tsx`     | /contact           |
| `/pages/blog/index.tsx`  | /blog              |
| `/pages/blog/[slug].tsx` | /blog/[parametric] |

After a lot of trial and error with the `remark`, `rehype` and `unified` packages i settled on this setup:

```ts
// lib/markdown.ts

import rehypeHighlight from 'rehype-highlight'; // syntax highlighting
import remarkRehype from 'remark-rehype'; // rehype support
import remarkImages from 'remark-images'; // images in markdown
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
```
