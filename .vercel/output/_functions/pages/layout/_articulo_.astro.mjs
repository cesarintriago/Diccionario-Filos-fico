/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, F as Fragment } from '../../chunks/astro/server_CZbjRp-V.mjs';
import { s as supabase } from '../../chunks/supabase_kiZf5Kwb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const response = await supabase.from("articulo").select("id").filter("categoria", "eq", "Cuestiones preambulares").order("id", { ascending: true });
  if (response && response.data) {
    const paths = response.data.map((item) => ({
      params: { id: item.id.toString() }
    }));
    return { paths, fallback: false };
  } else {
    return { paths: [], fallback: false };
  }
}
async function get({ params }) {
  let { data: articulo, error } = await supabase.from("articulo").select("*").eq("id", params.id).single();
  if (error) {
    console.error(error);
    return { props: {} };
  }
  return { props: { articulo } };
}
const $$articulo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$articulo;
  const { articulo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <h1>${articulo.titulo}</h1> <h2>${articulo.categoria}</h2> <p>${articulo.contenido}</p> <h3>Índice</h3> <ol> ${articulo.indice.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": index.toString() }, { "default": ($$result2) => renderTemplate` <li>${item}</li> ` })}`)} </ol> </article>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/layout/[articulo].astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/layout/[articulo].astro";
const $$url = "/layout/[articulo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$articulo,
  file: $$file,
  get,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
