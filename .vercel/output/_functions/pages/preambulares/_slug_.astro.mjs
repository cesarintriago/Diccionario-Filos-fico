/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_CZbjRp-V.mjs';
import { g as getCollection } from '../../chunks/_astro_content_ChZA22lu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((blogpost) => ({
    params: { slug: blogpost.slug },
    props: { blogpost }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blogpost } = Astro2.props;
  const { Content } = await blogpost.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/preambulares/[slug].astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/preambulares/[slug].astro";
const $$url = "/preambulares/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
