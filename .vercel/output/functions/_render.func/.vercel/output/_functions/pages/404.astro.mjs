/* empty css                                */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_CZbjRp-V.mjs';
import { $ as $$RecentBlogPosts } from '../chunks/RecentBlogPosts_Cdd7WTeH.mjs';
import { $ as $$Default } from '../chunks/Default_BdaUmXg3.mjs';
export { renderers } from '../renderers.mjs';

const $$404$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-8 justify-between"> <p class="text-9xl font-bold dm-serif">404</p> <h2 class="text-4xl outfit">Page Not Found</h2> <p class="text-xl sm:text-3xl sanchez">
Sorry, we couldn't find the page you were looking for.
</p> <a href="/" title="Go back home" class="px-4 py-2 border-2 border-black hover:bg-red transition-colors duration-150 ease-in-out w-48 text-center poppins">&larr; Go Home</a> </section>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/errors/404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Page Not Found", "description": "Page not found", "classList": "h-full", "pageTitle": "Page Not Found!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-blue px-6 py-24"> ${renderComponent($$result2, "ErrorPage", $$404$1, {})} ${renderComponent($$result2, "RecentBlogPosts", $$RecentBlogPosts, {})} </main> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/404.astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
