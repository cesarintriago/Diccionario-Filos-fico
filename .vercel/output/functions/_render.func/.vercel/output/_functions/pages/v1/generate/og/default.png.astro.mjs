import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html } from 'satori-html';
export { renderers } from '../../../../renderers.mjs';

const fontFile = await fetch(
  "https://og-playground.vercel.app/inter-latin-ext-700-normal.woff"
);
const fontData = await fontFile.arrayBuffer();
const height = 630;
const width = 1200;
const GET = async () => {
  const link = "https://brutal.elian.codes";
  const html$1 = html(`
  <div style="background-color: white; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; filter: drop-shadow()">
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">  
          <p style="font-size: 48px;">Brutal</p>
          <p style="font-size: 38px;">A theme for Astro</p>
          <p style="font-size: 38px;">Brought to you by Elian</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; padding-top: -2rem;">
          <p style="font-size: 32px">${link}</p>
          <img src="https://www.elian.codes/assets/img/elian.jpg" width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem;" />
        </div>
      </div>
    </div>
  </div>
  `);
  const svg = await satori(html$1, {
    fonts: [
      {
        name: "Inter Latin",
        data: fontData,
        style: "normal"
      }
    ],
    height,
    width
  });
  const opts = {
    fitTo: {
      mode: "width",
      value: width
    }
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  return new Response(pngBuffer, {
    headers: {
      "content-type": "image/png"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
