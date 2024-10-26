/* empty css                                */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CZbjRp-V.mjs';
import { g as getCollection } from '../chunks/_astro_content_ChZA22lu.mjs';
import { $ as $$Default } from '../chunks/Default_BdaUmXg3.mjs';
import { $ as $$BlogList } from '../chunks/BlogList_B6fyzc0Y.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Blog", "description": "Brutal Blog |\xA0On this page you can find a collection of blogposts", "pageTitle": "Brutal Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-green p-6"> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} </main> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
