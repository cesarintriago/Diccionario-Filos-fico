/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_CZbjRp-V.mjs';
import { $ as $$Default } from '../../chunks/Default_BdaUmXg3.mjs';
import { s as supabase } from '../../chunks/supabase_kiZf5Kwb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://localhost:3000/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let { data: articulo, error } = await supabase.from("articulo").select("titulo, categoria, contenido").filter("id", "eq", id).order("id", { ascending: true }).single();
  return renderTemplate`<meta charset="UTF-8">${renderComponent($$result, "Layout", $$Default, { "title": articulo ? articulo.titulo : "Loading...", "description": articulo ? articulo.categoria : "Loading..." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="bg-#dde4e0 p-6 lg:grid lg:grid-cols-3
  flex justify-center"><!-- <BlogSideBar headings={headings} />
    <BlogContent content={content}> -->${articulo ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<h1>${articulo.titulo}</h1><p class="poppins flex text-justify">${articulo.contenido}</p><h1 class="text-right"><a href="/preambulares/">${articulo.categoria}</a></h1>` })}` : renderTemplate`<p>Loading...</p>`}<!-- <slot /> --><!-- </BlogContent> --></main>` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/corrupcion/[id].astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/corrupcion/[id].astro";
const $$url = "/corrupcion/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
