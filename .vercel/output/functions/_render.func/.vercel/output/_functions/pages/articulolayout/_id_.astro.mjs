/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CZbjRp-V.mjs';
import { s as supabase } from '../../chunks/supabase_kiZf5Kwb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function load({ params }) {
  const { id } = params;
  let { data: articulo, error } = await supabase.from("articulo").select("*").eq("id", id).single();
  if (error) {
    console.error(error);
    return {
      status: 500,
      error: new Error("Failed to load article")
    };
  }
  return {
    props: {
      articulo
    }
  };
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  return renderTemplate`<html> ${maybeRenderHead()}<body> <!-- AQUÍ ESTÁ EL ERROR --> <!-- <h1>{Astro.props.articulo.titulo}</h1> --> <!-- Rest of your article layout goes here --> </body></html>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/articulolayout/[id].astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/articulolayout/[id].astro";
const $$url = "/articulolayout/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  load,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
