import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as renderSlot, d as addAttribute } from './astro/server_CZbjRp-V.mjs';
import { a as $$Card, $ as $$Button, b as $$Pill } from './Pill_BoE1Q-gg.mjs';
import { $ as $$Image } from './_astro_assets_CsAE-04C.mjs';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$SummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SummaryCard;
  const { title, imgAlt, imgSrc, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "color": "white" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="poppins text-lg md:text-xl">${title}</h3> <div class="rounded-lg border-3 border-black my-4 h-56"> ${renderComponent($$result2, "Image", $$Image, { "src": imgSrc, "alt": imgAlt, "width": 800, "height": 400, "class": "rounded h-full w-full object-cover" })} </div> <p class="poppins">${description}</p> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/generic/SummaryCard.astro", void 0);

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$BlogSummaryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSummaryCard;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SummaryCard", $$SummaryCard, { "title": post.data.title, "imgAlt": post.data.title, "imgSrc": post.data.imgUrl, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-end my-4"> ${renderComponent($$result2, "Button", $$Button, { "href": `/blog/${post.slug}/` }, { "default": ($$result3) => renderTemplate`Read post &rarr;` })} </div> <div class="hidden sm:inline-block"> <p class="poppins mt-2">tags:</p> <div class="flex justify-between items-center"> <ul class="flex gap-4 mt-2"> ${post.data.tags.map((tag) => {
    return renderTemplate`<li> <a class="sanchez"${addAttribute(`/blog/tags/${tag.toLowerCase()}/`, "href")}> ${renderComponent($$result2, "Pill", $$Pill, {}, { "default": ($$result3) => renderTemplate`${tag}` })} </a> </li>`;
  })} </ul> ${post.data.draft && renderTemplate`<span class="bg-green rounded-full border-2 py-1 px-4 text-sm border-black card-shadow">
Draft
</span>`} </div> </div> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/blog/BlogSummaryCard.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$BlogList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    return renderTemplate`<li> ${renderComponent($$result, "BlogSummaryCard", $$BlogSummaryCard, { "post": post })} </li>`;
  })} </ul>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/blog/BlogList.astro", void 0);

export { $$BlogList as $ };
