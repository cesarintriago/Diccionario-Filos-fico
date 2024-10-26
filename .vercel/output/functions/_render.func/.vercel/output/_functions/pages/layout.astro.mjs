/* empty css                                */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CZbjRp-V.mjs';
import { s as supabase } from '../chunks/supabase_kiZf5Kwb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let { data: articulo, error } = await supabase.from("articulo").select("titulo, id").filter("categoria", "eq", "Cuestiones preambulares").order("id", { ascending: true });
  return renderTemplate`${maybeRenderHead()}<ol> ${articulo && articulo.map((item) => item.id ? renderTemplate`<li tabindex="1"> <a${addAttribute(`/articulolayout/${item.id}`, "href")}>${item.titulo}</a> </li>` : null)} </ol>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/layout/index.astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/layout/index.astro";
const $$url = "/layout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
