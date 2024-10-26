import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_ChZA22lu.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Brutal Blog',
    description: 'Brutal is a theme for Astro',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://brutal.elian.codes',
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
