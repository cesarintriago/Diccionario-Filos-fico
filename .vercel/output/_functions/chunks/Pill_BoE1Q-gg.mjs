import { c as createAstro, a as createComponent, g as defineStyleVars, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, e as renderSlot } from './astro/server_CZbjRp-V.mjs';
/* empty css                                                              */
import './ActualButton_astro_astro_type_style_index_0_lang.b2bcf237_l0sNRNKZ.mjs';
/* empty css                                                            */
/* empty css                                                            */

const colors = [
	"#c084fc",
	"#f472b6",
	"#fb7185",
	"#e879f9",
	"#a78bfa",
	"#818cf8",
	"#60a5fa",
	"#38bdf8",
	"#22d3ee",
	"#2dd4bf",
	"#34d399",
	"#4ade80",
	"#a3e635",
	"#facc15",
	"#fb923c",
	"#f87171"
];

const $$Astro$3 = createAstro("https://localhost:3000/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  if (Astro2.props.color === void 0) {
    Astro2.props.color = colors[Math.floor(Math.random() * colors.length)];
  }
  const { color, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(rest)} class="brutal-btn" data-astro-cid-enydfctn${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/node_modules/.pnpm/@eliancodes+brutal-ui@0.2.6/node_modules/@eliancodes/brutal-ui/src/components/Button.astro", void 0);

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$ActualButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ActualButton;
  if (Astro2.props.color === void 0) {
    Astro2.props.color = colors[Math.floor(Math.random() * colors.length)];
  }
  const { color, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)} class="brutal-btn" data-astro-cid-xidvm64y${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/node_modules/.pnpm/@eliancodes+brutal-ui@0.2.6/node_modules/@eliancodes/brutal-ui/src/components/ActualButton.astro", void 0);

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  if (Astro2.props.color === void 0) {
    Astro2.props.color = colors[Math.floor(Math.random() * colors.length)];
  }
  const { color } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<div class="brutal-card" data-astro-cid-z2rqajmv${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/node_modules/.pnpm/@eliancodes+brutal-ui@0.2.6/node_modules/@eliancodes/brutal-ui/src/components/Card.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pill;
  if (Astro2.props.color === void 0) {
    Astro2.props.color = colors[Math.floor(Math.random() * colors.length)];
  }
  const { color } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<span class="brutal-pill" data-astro-cid-3ktppdxx${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/node_modules/.pnpm/@eliancodes+brutal-ui@0.2.6/node_modules/@eliancodes/brutal-ui/src/components/Pill.astro", void 0);

export { $$Button as $, $$Card as a, $$Pill as b };
