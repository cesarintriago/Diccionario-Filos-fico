/* empty css                                */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CZbjRp-V.mjs';
import { s as styles } from '../chunks/index.ec513a16_BbaJLtKP.mjs';
/* empty css                                  */
import { a as $$Card } from '../chunks/Pill_BoE1Q-gg.mjs';
import { $ as $$Default } from '../chunks/Default_BdaUmXg3.mjs';
import { s as supabase } from '../chunks/supabase_kiZf5Kwb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let { data: articulo, error } = await supabase.from("articulo").select("titulo, id").eq("categoria", "Teor\xEDa filos\xF3fica (gnoseol\xF3gica) de la ciencia").order("id", { ascending: true });
  if (error) {
    console.error("Error fetching data:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Blog", "description": "Brutal Blog |\xA0On this page you can find a collection of blogposts", "pageTitle": "Brutal Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-green p-6"> <div class="w-1/2 h-630 mx-auto"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h1 class="text-3xl font-bold text-center">Teoría filosófica (gnoseológica) de la ciencia</h1> <div${addAttribute(styles.container, "class")}> <ol${addAttribute(styles["lista-ol"], "class")}> ${articulo && articulo.map((item) => renderTemplate`<li${addAttribute(styles["lista-li"], "class")} tabindex="1"> <a${addAttribute(`/preambulares/${item.id}`, "href")}>${item.titulo}</a> </li>`)} </ol> </div> ` })}</div> </main> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/ciencia/index.astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/ciencia/index.astro";
const $$url = "/ciencia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
