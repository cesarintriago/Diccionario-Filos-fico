import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_CZbjRp-V.mjs';
import { g as getCollection } from './_astro_content_ChZA22lu.mjs';
import { $ as $$BlogList } from './BlogList_B6fyzc0Y.mjs';
import { $ as $$Button, a as $$Card } from './Pill_BoE1Q-gg.mjs';

const $$Astro = createAstro("https://localhost:3000/");
const $$RecentBlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentBlogPosts;
  const { count } = Astro2.props;
  const posts = await getCollection("blog").then(
    (posts2) => posts2.reverse().slice(0, count ?? 3)
  );
  return renderTemplate`${maybeRenderHead()}<section class="mt-8"> ${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-start"> <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
Recent Blogposts
</h2> <div class="hidden md:block"> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`Go to blog &rarr;` })} </div> <div class="block md:hidden"> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`to blog` })} </div> </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} ` })} </section>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/generic/RecentBlogPosts.astro", void 0);

export { $$RecentBlogPosts as $ };
