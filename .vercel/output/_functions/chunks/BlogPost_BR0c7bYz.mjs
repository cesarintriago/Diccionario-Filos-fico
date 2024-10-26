import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as renderComponent } from './astro/server_CZbjRp-V.mjs';
import { $ as $$Default } from './Default_BdaUmXg3.mjs';
import { $ as $$RecentBlogPosts } from './RecentBlogPosts_Cdd7WTeH.mjs';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$BlogSideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogSideBar;
  const { headings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside> <nav class="hidden lg:block sticky top-6"> <ul> ${headings.map((heading) => renderTemplate`<li class="py-1"> ${[...Array(heading.depth - 1)].map((_, _i) => renderTemplate`<span class="inline-block w-4"></span>`)} <a class="hover:text-stone transition-all duration-150 ease-in-out text-dark poppins"${addAttribute(`#${heading.slug}`, "href")}> ${heading.text} </a> </li>`)} </ul> </nav> </aside>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/blog/BlogSideBar.astro", void 0);

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$BlogContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogContent;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="prose-slate w-sm md:w-prose md:prose poppins"> <a href="/blog/" title="Back to blog">&larr; Back to blog</a> <p class="text-slate text-sm md:text-base">
Published on ${content.pubDate} by ${content.author} </p> ${renderSlot($$result, $$slots["default"])} <p class="text-slate">Written by ${content.author}</p> <a href="/blog/" title="Back to blog">&larr; Back to blog</a> </article>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/blog/BlogContent.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const ogImage = new URL(`/v1/generate/og/${Astro2.params.slug}.png`, Astro2.url);
  const { content, headings } = Astro2.props;
  const { title, description } = content;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": title, "description": description, "ogImage": ogImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 lg:grid lg:grid-cols-3 flex justify-center"> ${renderComponent($$result2, "BlogSideBar", $$BlogSideBar, { "headings": headings })} ${renderComponent($$result2, "BlogContent", $$BlogContent, { "content": content }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} </main> <section class="p-6"> ${renderComponent($$result2, "RecentBlogPosts", $$RecentBlogPosts, { "count": 6 })} </section> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
