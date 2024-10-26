import { a as createComponent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_CZbjRp-V.mjs';
import { $ as $$BlogPost } from './BlogPost_BR0c7bYz.mjs';

const html = "<h2 id=\"deorum-petiit-ignis\">Deorum petiit ignis</h2>\n<p>Lorem markdownum longo os thyrso telum, continet servat fetus nymphae, <em>vox\nnocte sedesque</em>, decimo. Omnia esse, quam sive; conplevit illis indestrictus\nadmovit dedit sub quod protectus, impedit non.</p>\n<h2 id=\"iovis-late-orbem-perseus-sunt\">Iovis late orbem Perseus sunt</h2>\n<p>Aras reperire, sui motis correpti coniunx Onetor amore ferire lacertis, petiit.\nBis pallor et mecum me, igne patruelibus <em>tendebam</em>, vultu sterilique terruerat\n<em>tempore</em> medium aera <strong>eadem Mittor</strong>.</p>\n<ul>\n<li>Non turba loca dederunt primordia ineamus Dictys</li>\n<li>Tanti amat mundus sedula</li>\n<li>Potuissent aetas parili coniuge se lumina breve</li>\n<li>Tamen ille crepitantibus ulla coeperunt quibus iugulo</li>\n<li>Pindusque solacia luctataque felix</li>\n</ul>\n<h2 id=\"longum-minus-sic-saepe\">Longum minus sic saepe</h2>\n<p>Genu cupiens quoque: cum dolor: sollicitive cantu, et piae Leuconoe, huius non\nnil tuli Peleusque rauca. Et alvum cuncti Hippodamas meritis nec coniunx ausa,\npete. Congestaque nisi nullus poena. Tanto cum, curvis vulnera quod optatis,\ntrahens conplexa saepe.</p>\n<p>Hominum quo. Signa germanaeque iuvat at feruntur precantibus corpus praebuerat\nexcipit mixtaeque inferior, haec percepit regum: nec nec sit ferenti.</p>\n<h2 id=\"geminas-namque-quod-referitur-argenteus-aderat-superstes\">Geminas namque quod referitur argenteus aderat superstes</h2>\n<p>Insistere pugno. Cum morae vigilantibus dulces Cycnus: neque cum sororis.</p>\n<p>Hac Aestas solet docebo tandem tamquam omnis vitiantur mitte, vatis in animique\ninfelix passimque. Superasset onus.</p>";

				const frontmatter = {"title":"Blogpost 5","author":"Elian Van Cutsem","pubDate":"2023-02-19 18:37","tags":["Astro","JavaScript","Theme"],"description":"Lorem markdownum longo os thyrso telum, continet servat fetus nymphae, vox nocte sedesque, decimo. Omnia esse, quam sive; conplevit illis indestrictus admovit dedit sub quod protectus, impedit non.","imgUrl":"../../assets/astro.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "C:/Users/cesar/Downloads/Diccionario-Filos-fico-main (PRODUCCION)/Diccionario-Filos-fico-main/src/content/blog/blogpost-5.md";
				const url = undefined;
				function rawContent() {
					return "\n## Deorum petiit ignis\n\nLorem markdownum longo os thyrso telum, continet servat fetus nymphae, *vox\nnocte sedesque*, decimo. Omnia esse, quam sive; conplevit illis indestrictus\nadmovit dedit sub quod protectus, impedit non.\n\n## Iovis late orbem Perseus sunt\n\nAras reperire, sui motis correpti coniunx Onetor amore ferire lacertis, petiit.\nBis pallor et mecum me, igne patruelibus *tendebam*, vultu sterilique terruerat\n*tempore* medium aera **eadem Mittor**.\n\n- Non turba loca dederunt primordia ineamus Dictys\n- Tanti amat mundus sedula\n- Potuissent aetas parili coniuge se lumina breve\n- Tamen ille crepitantibus ulla coeperunt quibus iugulo\n- Pindusque solacia luctataque felix\n\n## Longum minus sic saepe\n\nGenu cupiens quoque: cum dolor: sollicitive cantu, et piae Leuconoe, huius non\nnil tuli Peleusque rauca. Et alvum cuncti Hippodamas meritis nec coniunx ausa,\npete. Congestaque nisi nullus poena. Tanto cum, curvis vulnera quod optatis,\ntrahens conplexa saepe.\n\nHominum quo. Signa germanaeque iuvat at feruntur precantibus corpus praebuerat\nexcipit mixtaeque inferior, haec percepit regum: nec nec sit ferenti.\n\n## Geminas namque quod referitur argenteus aderat superstes\n\nInsistere pugno. Cum morae vigilantibus dulces Cycnus: neque cum sororis.\n\nHac Aestas solet docebo tandem tamquam omnis vitiantur mitte, vatis in animique\ninfelix passimque. Superasset onus.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"deorum-petiit-ignis","text":"Deorum petiit ignis"},{"depth":2,"slug":"iovis-late-orbem-perseus-sunt","text":"Iovis late orbem Perseus sunt"},{"depth":2,"slug":"longum-minus-sic-saepe","text":"Longum minus sic saepe"},{"depth":2,"slug":"geminas-namque-quod-referitur-argenteus-aderat-superstes","text":"Geminas namque quod referitur argenteus aderat superstes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
