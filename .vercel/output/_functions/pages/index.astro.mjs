/* empty css                                */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CZbjRp-V.mjs';
import { $ as $$Default } from '../chunks/Default_BdaUmXg3.mjs';
import { $ as $$MobileSocials } from '../chunks/MobileSocials_B8lSYEaf.mjs';
import { a as $$Card, $ as $$Button, b as $$Pill } from '../chunks/Pill_BoE1Q-gg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://localhost:3000/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const ontologia = [
    { name: "Materialismo ontol\xF3gico", url: "/materialismo-ontologico/" },
    { name: "Dial\xE9ctica", url: "/dialectica/" },
    {
      name: "Finalidad",
      url: "/finalidad"
    },
    { name: "Causalidad", url: "/causalidad/" },
    {
      name: "Existencia, Posibilidad, Necesidad",
      url: "/existencia/"
    },
    { name: "Apariencia y Verdad", url: "/aparienciayverdad/" },
    { name: "Televisi\xF3n material y Televisi\xF3n formal", url: "/tvmaterial/" },
    { name: "Apariencias y verdades en la televisi\xF3n", url: "/aparienciasyverdadestv/" },
    { name: "Idea general y Ontolog\xEDa de la Corrupci\xF3n", url: "/corrupcion/" }
  ];
  const gnoseologia = [
    { name: "Doctrina de las categor\xEDas ", url: "categorias" },
    { name: "Teor\xEDa filos\xF3fica (gnoseol\xF3gica) de la ciencia", url: "/ciencia/" }
  ];
  const antropologia = [
    { name: "Cuestiones proemiales", url: "/antropologia/" },
    { name: "Individuo y Persona", url: "/individuoypersona/" },
    { name: "Libertad", url: "/libertad/" },
    { name: "Sentido de la vida y religaci\xF3n", url: "/sentidodelavida/" },
    { name: "Filosof\xEDa de la religi\xF3n", url: "/filosofiadelareligion/" },
    { name: "Fetichismo, Magia y Religi\xF3n", url: "/fetichismo/" },
    { name: "Agnosticismo", url: "/agnosticismo/" },
    { name: "Filosof\xEDa de la cultura", url: "/filosofiadelacultura/" },
    { name: "Filosof\xEDa de la Historia", url: "/filosofiadelahistoria/" }
  ];
  const eticaymoral = [
    { name: "\xC9tica y moral", url: "/eticaymoral/" },
    { name: "Derechos humanos", url: "/derechoshumanos/" },
    { name: "Muerte, fallecimiento, eutanasia", url: "https://astro.build/" },
    { name: "Bio\xE9tica", url: "https://astro.build/" },
    { name: "Tolerancia", url: "https://astro.build/" }
  ];
  const filosofiapolitica = [
    { name: "Teor\xEDa de la Sociedad pol\xEDtica y del Estado (parte ontol\xF3gica)", url: "https://astro.build/" },
    { name: "Idea de Imperio", url: "https://astro.build/" },
    { name: "Idea de Naci\xF3n", url: "https://astro.build/" },
    { name: "Espa\xF1a como sociedad pol\xEDtica: Unidad e Identidad", url: "https://astro.build/" },
    { name: "Estado de derecho", url: "https://astro.build/" }
  ];
  const democracia = [
    { name: "Cuestiones proemiales", url: "https://astro.build/" },
    { name: "Estructura y Ontolog\xEDa", url: "https://astro.build/" },
    { name: "Materialismo / Idealismo pol\xEDtico y democr\xE1tico", url: "https://astro.build/" },
    { name: "Democracia realmente existente: Fundamentalismo, Funcionalismo y Contrafundamentalismo", url: "https://astro.build/" },
    { name: "Democracia como Instituci\xF3n: Nematolog\xEDa y Tecnolog\xEDa", url: "https://astro.build/" },
    { name: "Democracia y Corrupci\xF3n: Corrupciones estructurales, nematol\xF3gicas (ideol\xF3gicas) y tecnol\xF3gicas", url: "https://astro.build/" },
    { name: "Corrupciones no delictivas (ideol\xF3gicas, nematol\xF3gicas) de la democracia espa\xF1ola", url: "https://astro.build/" }
  ];
  const estetica = [
    { name: "Est\xE9tica", url: "https://astro.build/" },
    { name: "Filosofia del arte", url: "https://astro.build/" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Home", "pageTitle": "Brutal Theme |\xA0Home", "description": "Brutal is a minimalistic, neobrutalism theme for Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-sky p-6"> ${renderComponent($$result2, "MobileSocials", $$MobileSocials, {})} <section id="about" class="grid md:grid-cols-13 gap-8 mt-4"> <h2 class="hidden">About Brutal</h2> <div class="col-span-5"> ${renderComponent($$result2, "Card", $$Card, { "color": "#65a30d" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
I. Cuestiones <a class="text-white" target="_blank" href="/preambulares/">Prembulares</a> </p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Una introducción al materialismo Filosófico
</p> ${renderComponent($$result3, "Button", $$Button, { "target": "_self", "href": "/preambulares/" }, { "default": ($$result4) => renderTemplate`
Check out the blog &rarr;
` })} </div> ` })} </div> <!--  Tamaño de la tarjeta --> <div class="col-span-4"> ${renderComponent($$result2, "Card", $$Card, { "color": "white" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
II. Ontología
</h2> <ul class="flex gap-4 flex-wrap"> ${ontologia.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")}${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-4"> ${renderComponent($$result2, "Card", $$Card, { "color": "#ef4444" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">III. Gnoseología (Teoría de la ciencia)
</h2> <ul class="flex gap-4 flex-wrap"> ${gnoseologia.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")}${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> </section> <section id="about" class="grid md:grid-cols-13 gap-8 mt-4"> <h2 class="hidden">About Brutal</h2> <div class="col-span-6"> ${renderComponent($$result2, "Card", $$Card, { "color": "#EF4444" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
IV. Antropología
</h2> <ul class="flex gap-4 flex-wrap"> ${antropologia.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")}${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-6"> ${renderComponent($$result2, "Card", $$Card, { "color": "#FABD00" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
V. Ética y moral
</h2> <ul class="flex gap-4 flex-wrap"> ${eticaymoral.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")}${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <!--  Tamaño de la tarjeta --> <!--   <div class='col-span-6'>
          <Card>
          <h2 class='text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif'>
            V. Ética y moral
          </h2>
          <ul class='flex gap-4 flex-wrap'>
            {
              eticaymoral.map((item) => (
                <li>
                  <Pill>
                    <a
                      class='sanchez'
                      href={item.url}
                      target='_blank'
                      title={\`Go to \${item.name}\`}
                    >
                      {item.name}
                    </a>
                  </Pill>
                </li>
              ))
            }
          </ul>
        </Card>
      </div> --> <div class="col-span-6"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
VI. Filosofia política
</h2> <ul class="flex gap-4 flex-wrap"> ${filosofiapolitica.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-6"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
VI.I Democracia como sociedad política
</h2> <ul class="flex gap-4 flex-wrap"> ${democracia.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-6"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
VII. Estética y Filosofia del arte
</h2> <ul class="flex gap-4 flex-wrap"> ${estetica.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <!--  Tamaño de la tarjeta --> </section> <!-- <RecentBlogPosts /> --> </main> ` })}`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
