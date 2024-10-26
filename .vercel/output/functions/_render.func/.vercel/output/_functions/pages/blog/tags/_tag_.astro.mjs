/* empty css                                      */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_CZbjRp-V.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_ChZA22lu.mjs';
import { $ as $$Default } from '../../../chunks/Default_BdaUmXg3.mjs';
import { $ as $$BlogList } from '../../../chunks/BlogList_B6fyzc0Y.mjs';
import { $ as $$Button } from '../../../chunks/Pill_BoE1Q-gg.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  const tags = [];
  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.push(tag.toLowerCase());
    });
  });
  return Array.from(new Set(tags)).map((tag) => {
    return {
      params: { tag },
      props: {
        tag,
        blogposts: allPosts.filter(
          (post) => post.data.tags.map((tag2) => tag2.toLowerCase()).includes(tag)
        )
      }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag, blogposts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": `Blog: ${tag}`, "description": `Brutal Blog | All posts tagged with ${tag}`, "pageTitle": `Brutal Blog |\xA0Blogposts tagged with ${tag}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 bg-purple grid gap-4"> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`&larr; Back to blog` })} </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": blogposts })} </main> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
