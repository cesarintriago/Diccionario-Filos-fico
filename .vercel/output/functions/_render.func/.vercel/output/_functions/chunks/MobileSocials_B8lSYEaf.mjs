import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_CZbjRp-V.mjs';

const $$MobileSocials = createComponent(($$result, $$props, $$slots) => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/eliancodes",
      icon: "i-uil-github"
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/eliancodes",
      icon: "i-uil-twitter"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elianvancutsem",
      icon: "i-uil-linkedin"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="md:hidden"> <h2 class="hidden">Socials section</h2> <ul class="flex justify-between"> ${socials.map((item) => renderTemplate`<li class="bg-white px-4 py-2 text-green border-black border-2 rounded card-shadow"> <a${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> <div${addAttribute([item.icon, "p-6"], "class:list")}></div> </a> </li>`)} </ul> </section>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/components/home/MobileSocials.astro", void 0);

export { $$MobileSocials as $ };
