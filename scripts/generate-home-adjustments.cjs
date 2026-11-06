const fs = require("fs");
const path = require("path");

const root = process.cwd();
const inputName = "index-i18n-stable-8f6c2d1.js";
const outputName = "index-approved-state-9e4b2c7.js";
const cssOutputName = "index-approved-state-9e4b2c7.css";
const revision = "approved-state-2026-11-06";
const logoUrl = "https://cdn.awsli.com.br/436/436130/favicon/f0c196521f.png";

const input = path.join(root, "assets", inputName);
const outputAssets = path.join(root, "assets", outputName);
const outputDist = path.join(root, "dist", "assets", outputName);

let source = fs.readFileSync(input, "utf8");

const replacements = [
  ["Filosofia, Cultura e Espiritualidade","Arte, Espiritualidade e Ciência"],
  ["filosofia, cultura e espiritualidade","arte, espiritualidade e ciência"],
  ["Filosofia • Cultura • Espiritualidade","Arte • Espiritualidade • Ciência"],
  ["Filosofia · Cultura · Espiritualidade","Arte · Espiritualidade · Ciência"],
  ["Philosophy, Culture and Spirituality","Art, Spirituality and Science"],
  ["philosophy, culture and spirituality","art, spirituality and science"],
  ["Filosofía, Cultura y Espiritualidad","Arte, Espiritualidad y Ciencia"],
  ["filosofía, cultura y espiritualidad","arte, espiritualidad y ciencia"],
  ["Philosophie, Culture et Spiritualité","Art, Spiritualité et Science"],
  ["philosophie, culture et spiritualité","art, spiritualité et science"],
  ["Philosophie, Kultur und Spiritualität","Kunst, Spiritualität und Wissenschaft"],
  ["Filosofia, Cultura e Spiritualità","Arte, Spiritualità e Scienza"],
  ["Espiritualidade, Arte e Ciência","Arte, Espiritualidade e Ciência"],
  ["Espiritualidade, Arte, Ciência","Arte, Espiritualidade, Ciência"],
  ["Spirituality, Art and Science","Art, Spirituality and Science"],
  ["Spirituality, Art, Science","Art, Spirituality, Science"],
  ["Espiritualidad, Arte y Ciencia","Arte, Espiritualidad y Ciencia"],
  ["Espiritualidad, Arte, Ciencia","Arte, Espiritualidad, Ciencia"],
  ["Spiritualité, Art et Science","Art, Spiritualité et Science"],
  ["Spiritualité, Art, Science","Art, Spiritualité, Science"],
  ["Spiritualität, Kunst und Wissenschaft","Kunst, Spiritualität und Wissenschaft"],
  ["Spiritualität, Kunst, Wissenschaft","Kunst, Spiritualität, Wissenschaft"],
  ["Spiritualità, Arte e Scienza","Arte, Spiritualità e Scienza"],
  ["Spiritualità, Arte, Scienza","Arte, Spiritualità, Scienza"],
  [
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.",
    "Fomentar o desenvolvimento humano integral em seus aspectos fisico, emocional, racional e espiritual, individualmente, por meio do autodesenvolvimento, e coletivamente, por meio da cultura, promovendo diálogo e um espaço aberto de encontro."
  ],
  [
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.",
    "Tornar-se referência cultural por meio da realização de atividades que propiciem o desenvolvimento integral do ser humano."
  ],
  [
    "https://www.civitassolis.org.br/wp-content/uploads/2016/11/cropped-Screen-Shot-2014-05-05-at-1.04.44-AM-180x180.png",
    logoUrl
  ],
  [
    'children:"Visão Planetária"',
    'children:"PUBLICAÇÕES"'
  ],
  [
    'children:"Parcerias"',
    'children:"DIÁLOGOS"'
  ],
  [
    'children:"Educação Holística"',
    'children:"PARCERIAS"'
  ],
  [
    "Últimas Postagens do Instagram",
    "Instagram Civitas Solis"
  ],
  [
    "Acompanhe nossa jornada diária de descobertas e reflexões sobre filosofia, cultura e espiritualidade.",
    "Acompanhe nossa jornada diária de descobertas e reflexões sobre Arte, Espiritualidade e Ciência."
  ],  [
    "Conteúdos sobre filosofia, cultura e espiritualidade para uma nova consciência planetária",
    "Explore nosso canal no YouTube, dedicado à disseminação de conhecimentos sobre Arte, Espiritualidade e Ciência, visando o desenvolvimento integral do ser humano."
  ],
  [
    "Fundado com o propósito de promover a síntese entre ciência, arte e espiritualidade, nosso instituto busca contribuir para o despertar de uma nova consciência planetária, baseada na sabedoria ancestral e nas descobertas contemporâneas.",
    "Fundado com o propósito de promover a síntese entre ciência, arte e espiritualidade, nosso instituto busca contribuir para o despertar de uma nova consciência, baseada na sabedoria ancestral e nas descobertas contemporâneas."
  ],
  [
    "Exploramos as fronteiras do conhecimento científico, integrando descobertas modernas com sabedorias ancestrais.",
    "Exploramos as fronteiras do conhecimento científico, integrando-o com sabedorias modernas e ancestrais."
  ]
];

for (const [from, to] of replacements) {
  source = source.split(from).join(to);
}

source = source.replace(
  'const updateLanguageButton=lang=>{const meta=langMeta[lang]||langMeta.pt;document.querySelectorAll("button").forEach(button=>{const spans=[...button.querySelectorAll("span")];const labels=spans.map(s=>s.textContent.trim());const looksLikeToggle=button.querySelector("svg")&&labels.some(v=>Object.values(langMeta).some(m=>v===m.name||v===m.code));if(looksLikeToggle&&spans.length>=2){spans[0].textContent=meta.code;spans[1].textContent=meta.name}});document.querySelectorAll("button").forEach(button=>{const text=button.textContent.trim();const entry=Object.entries(langMeta).find(([,m])=>text.includes(m.name));if(entry){button.setAttribute("aria-pressed",entry[0]===lang?"true":"false");button.classList.toggle("ics-language-active",entry[0]===lang)}})};',
  'const setTextIfChanged=(el,value)=>{if(el&&el.textContent!==value)el.textContent=value};const setAttrIfChanged=(el,name,value)=>{if(el&&el.getAttribute(name)!==value)el.setAttribute(name,value)};const updateLanguageButton=lang=>{const meta=langMeta[lang]||langMeta.pt;document.querySelectorAll("button").forEach(button=>{const spans=[...button.querySelectorAll("span")];const labels=spans.map(s=>s.textContent.trim());const looksLikeToggle=button.querySelector("svg")&&labels.some(v=>Object.values(langMeta).some(m=>v===m.name||v===m.code));if(looksLikeToggle&&spans.length>=2){setTextIfChanged(spans[0],meta.code);setTextIfChanged(spans[1],meta.name)}});document.querySelectorAll("button").forEach(button=>{const text=button.textContent.trim();const entry=Object.entries(langMeta).find(([,m])=>text.includes(m.name));if(entry){setAttrIfChanged(button,"aria-pressed",entry[0]===lang?"true":"false");button.classList.toggle("ics-language-active",entry[0]===lang)}})};'
);
source = source.replace(
  'const apply=()=>{const lang=normalizeLang();document.documentElement.lang=lang==="pt"?"pt-BR":lang;textNodes(document.body).forEach(node=>{const current=node.nodeValue;const translated=translateString(current,lang);if(translated!==current)node.nodeValue=preserve(current,translated)});translateAttributes(lang);translateValues(lang);updateLanguageButton(lang)};const schedule=()=>{clearTimeout(window.__icsTranslateTimer);window.__icsTranslateTimer=setTimeout(apply,50)};',
  'let __icsTranslating=false;const apply=()=>{if(__icsTranslating)return;__icsTranslating=true;try{const lang=normalizeLang();const htmlLang=lang==="pt"?"pt-BR":lang;if(document.documentElement.lang!==htmlLang)document.documentElement.lang=htmlLang;textNodes(document.body).forEach(node=>{const current=node.nodeValue;const translated=translateString(current,lang);const next=preserve(current,translated);if(next!==current)node.nodeValue=next});translateAttributes(lang);translateValues(lang);updateLanguageButton(lang)}finally{setTimeout(()=>{__icsTranslating=false},0)}};const schedule=()=>{if(__icsTranslating)return;clearTimeout(window.__icsTranslateTimer);window.__icsTranslateTimer=setTimeout(apply,50)};'
);
const hook = "Wd(document.getElementById(\"root\")).render";
const hookIndex = source.indexOf(hook);
if (hookIndex < 0) throw new Error("Could not find React render hook.");

const runtime = `;(()=>{
  if(location.pathname==="/trabalho-global"){history.replaceState(null,"","/")}
  document.documentElement.classList.toggle("ics-route-mvv",location.pathname==="/missao-visao-valores");

  const normalize=text=>(text||"").replace(/\\s+/g," ").trim();
  const has=(text,terms)=>terms.some(term=>normalize(text).toLowerCase().includes(term.toLowerCase()));
  const currentLang=()=>((document.documentElement.lang||localStorage.getItem("i18nextLng")||"pt").toLowerCase().split("-")[0]||"pt");
  const byHeading=terms=>[...document.querySelectorAll("section")].find(section=>[...section.querySelectorAll("h1,h2")].some(h=>has(h.innerText,terms)));
  const publicationsBooks=[
    {title:"A Gnose Ocidental",subtitle:"Dos antigos mistérios gregos às correntes esotéricas contemporâneas",author:"Juraci Junior da Silva; Anna Padoa Casoretti",meta:"Capa comum · 234 páginas · 4,7 de 5 estrelas",image:"/assets/home-books/a-gnose-ocidental.jpg",url:"https://www.amazon.com.br/gp/product/6587963072/ref=ox_sc_act_title_1?smid=A1ZZFT5FULY4LN&psc=1",description:"Um panorama sobre a tradição gnóstica ocidental, reunindo especialistas em torno de um mosaico histórico, filosófico e espiritual que atravessa antigas escolas de mistério e correntes esotéricas contemporâneas."},
    {title:"As Cores da Alma",subtitle:"A vida de Hilma af Klint",author:"Luciana Pinheiro",meta:"eBook Kindle · 244 páginas · 4,8 de 5 estrelas",image:"/assets/home-books/as-cores-da-alma.jpg",url:"https://www.amazon.com.br/As-Cores-Alma-Hilma-Klint-ebook/dp/B08D75CCLF/ref=tmm_kin_swatch_0#detailBullets_feature_div",description:"Uma aproximação sensível à vida e à obra de Hilma af Klint, artista visionária associada às origens da abstração moderna e à investigação espiritual por meio da cor, do símbolo e da forma."},
    {title:"Geometria Sagrada",subtitle:"Bases naturais, científicas e pitagóricas",author:"Jesús Zatón",meta:"Capa comum · 216 páginas · 4,9 de 5 estrelas",image:"/assets/home-books/geometria-sagrada.jpg",url:"https://www.amazon.com.br/Geometria-Sagrada-Naturais-Cient%C3%ADficas-Pitag%C3%B3ricas/dp/8584741585/ref=sr_1_77?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PQNVJV70KQBV&dib=eyJ2IjoiMSJ9.-JiFwboU0z8vET1-4AUGc8LK3wYAABaelyvqz0fpn15035jQoajpYju1KlSRiMpwO2PYxqSyN09XXnwubSg_cFvQWVa8AnUwCQWSCfWgObAE4aM7p--nxpmN9P5Y_dh0Ehi-n35cZhNvvwsL9Bn9qZ5YD2kpHo_Ctw1I00fYct0.NDvL2Wvd8tao-rCh2kuxr_dbphv8ekYYNs-P7_Q1Sg4&dib_tag=se&keywords=geometria+sagrada&qid=1789412096&s=books&sprefix=geometria+sagrad%2Cstripbooks%2C191&sr=1-77&xpid=NpfBdhH1bTLfZ",description:"Uma exploração dos padrões geométricos presentes na natureza, na ciência e na tradição pitagórica, conectando forma, proporção e unidade como linguagem simbólica da criação."},
    {title:"A Renascença Oculta",subtitle:"A tradição secreta, o pensamento hermético e as chaves alquímicas",author:"Jesús Zatón",meta:"Capa comum · 248 páginas · 4,9 de 5 estrelas",image:"/assets/home-books/a-renascenca-oculta.jpg",url:"https://www.amazon.com.br/Renascen%C3%A7a-Oculta-Jesus-Zaton/dp/8584742697",description:"Uma visão sobre a arte renascentista e suas bases herméticas, alquímicas e esotéricas, revelando como símbolos e tradições de sabedoria influenciaram obras significativas da Renascença."},
    {title:"Um Coração Para o Rei",subtitle:"Coleção Pérola",author:"Flor Branca",meta:"Capa comum · ISBN 978-8567992006 · Editora Rosacruz · 3 julho 2018",image:"/assets/home-books/um-coracao-para-o-rei.avif",url:"https://www.amazon.com.br/gp/product/8567992001/ref=ox_sc_act_title_1?smid=A1ZZFT5FULY4LN&psc=1",description:"Dando sequência à coleção Pérola, dedicada a crianças, jovens de todas as idades e seus pais, este é um livro de cavaleiros e princesas. Quem gosta de histórias de amizade vai se emocionar com a lealdade e a coragem de Ricardo e da princesa Clara. Já quem prefere aventuras vai querer saber tudo sobre os lugares por onde eles passam. Mas, na verdade, esta é uma história de todos nós, que buscamos o Reino do amor."},
    {title:"O Cavalinho Pérola",subtitle:"Coleção Pérola",author:"Clara Brancaflor",meta:"Capa comum · 6 a 8 anos · Editora Rosacruz",image:"/assets/home-books/o-cavalinho-perola.avif",url:"https://www.amazon.com.br/gp/product/8562923192/ref=ox_sc_act_title_2?smid=A1ZZFT5FULY4LN&th=1",description:"Primeiro da coleção Pérola, dedicada a crianças, jovens de todas as idades e seus pais, este é um livro que pode ser lido de muitas maneiras. Quem gosta de histórias de amizade vai se emocionar com Leandro e o cavalinho Pérola. Já quem prefere aventuras vai querer saber tudo sobre os lugares por onde eles passam. Mas, na verdade, esta é a história de todos nós, que buscamos o Reino do Amor."}
  ];
  const publicationUi={
    pt:{eyebrow:"Publicações Civitas Solis",title:"Acervo de Livros",hero:"Uma seleção de obras sobre arte, espiritualidade, ciência, tradição hermética e desenvolvimento interior.",buy:"Compre na Amazon",cover:"Capa do livro"},
    en:{eyebrow:"Civitas Solis Publications",title:"Book Collection",hero:"A selection of works on art, spirituality, science, Hermetic tradition and inner development.",buy:"Buy on Amazon",cover:"Book cover"},
    es:{eyebrow:"Publicaciones Civitas Solis",title:"Colección de Libros",hero:"Una selección de obras sobre arte, espiritualidad, ciencia, tradición hermética y desarrollo interior.",buy:"Comprar en Amazon",cover:"Portada del libro"},
    fr:{eyebrow:"Publications Civitas Solis",title:"Collection de Livres",hero:"Une sélection d'ouvrages sur l'art, la spiritualité, la science, la tradition hermétique et le développement intérieur.",buy:"Acheter sur Amazon",cover:"Couverture du livre"},
    de:{eyebrow:"Civitas Solis Publikationen",title:"Buchsammlung",hero:"Eine Auswahl von Werken über Kunst, Spiritualität, Wissenschaft, hermetische Tradition und innere Entwicklung.",buy:"Bei Amazon kaufen",cover:"Buchcover"},
    it:{eyebrow:"Pubblicazioni Civitas Solis",title:"Collezione di Libri",hero:"Una selezione di opere su arte, spiritualità, scienza, tradizione ermetica e sviluppo interiore.",buy:"Acquista su Amazon",cover:"Copertina del libro"}
  };
  const amazonButton=(book,ui)=>'<a class="'+(book.store?"ics-store-button":"ics-amazon-button")+'" href="'+book.url+'" target="_blank" rel="noopener noreferrer" aria-label="'+ui.buy+': '+book.title+'"><span>'+(book.button||ui.buy)+'</span>'+(book.store?"":"<img class='ics-amazon-icon' src='/assets/amazon-icon.png' alt='' aria-hidden='true'>")+'</a>';
  const renderPublicationsPage=()=>{
    if(location.pathname!=="/publicacoes")return false;
    document.documentElement.classList.remove("ics-route-mvv");
    document.documentElement.classList.add("ics-route-publications");
    const ui=publicationUi[currentLang()]||publicationUi.pt;
    const main=document.querySelector("main")||document.querySelector("#root > div > div")||document.getElementById("root");
    const renderKey="approved-state-2026-11-06:"+currentLang();
    if(!main||main.getAttribute("data-ics-publications-rendered")===renderKey)return true;
    main.setAttribute("data-ics-publications-rendered",renderKey);
    main.innerHTML='<section class="ics-publications-hero"><div class="ics-publications-hero-inner"><p class="ics-publications-eyebrow">'+ui.eyebrow+'</p><h1>'+ui.title+'</h1><p>'+ui.hero+'</p></div></section><section class="ics-publications-list">'+publicationsBooks.map((book,index)=>'<article class="ics-publication-card '+(index%2?'ics-publication-card-alt':'')+'"><div class="ics-publication-cover-wrap"><img src="'+book.image+'" alt="'+ui.cover+': '+book.title+'" loading="lazy"></div><div class="ics-publication-copy"><p class="ics-publication-kicker">'+book.meta+'</p><h2>'+book.title+'</h2><h3>'+book.subtitle+'</h3><p class="ics-publication-author">'+book.author+'</p><p>'+book.description+'</p><div class="ics-publication-actions">'+amazonButton(book,ui)+'</div></div></article>').join('')+'</section>';
    return true;
  };
  const publicationNavLabels={pt:"Publicações",en:"Publications",es:"Publicaciones",fr:"Publications",de:"Publikationen",it:"Pubblicazioni"};
  const ensurePublicationsLinks=()=>{
    const label=publicationNavLabels[currentLang()]||publicationNavLabels.pt;
    document.querySelectorAll("nav").forEach(nav=>{
      let link=nav.querySelector('a[href="/publicacoes"]');
      if(!link){
        const reference=[...nav.querySelectorAll("a")].find(a=>normalize(a.getAttribute("href"))==="/youtube")||nav.querySelector("a:last-of-type");
        if(!reference)return;
        link=reference.cloneNode(true);
        link.href="/publicacoes";
        link.classList.remove("text-orange-500","border-orange-500");
        reference.insertAdjacentElement("beforebegin",link);
      }
      if(link.textContent!==label)link.textContent=label;
    });
    document.querySelectorAll("footer").forEach(footer=>{
      let link=footer.querySelector('a[href="/publicacoes"]');
      if(!link){
        const menu=[...footer.querySelectorAll("a")].find(a=>normalize(a.getAttribute("href"))==="/youtube")||footer.querySelector("a:last-of-type");
        if(!menu)return;
        link=menu.cloneNode(true);
        link.href="/publicacoes";
        menu.insertAdjacentElement("beforebegin",link);
      }
      if(link.textContent!==label)link.textContent=label;
    });
    document.querySelectorAll('a[href="/publicacoes"]').forEach(a=>{
      const active=location.pathname==="/publicacoes";
      a.classList.toggle("ics-publications-active",active);
      if(active)a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
    });
  };
  const bindPublicationsNavigation=()=>{
    if(window.__icsPublicationsNavigationBound)return;
    window.__icsPublicationsNavigationBound=true;
    document.addEventListener("click",event=>{
      if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const link=event.target.closest&&event.target.closest("a[href]");
      if(!link||link.target==="_blank"||link.hasAttribute("download"))return;
      const url=new URL(link.href,location.href);
      if(url.origin!==location.origin)return;
      if(location.pathname!=="/publicacoes"&&url.pathname!=="/publicacoes")return;
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign(url.pathname+url.search+url.hash);
    },true);
  };

  const copy={
    pt:{
      more:"Saiba mais",
      close:"Recolher",
      items:[
        {keys:["Visão Planetária","Planetary Vision","Vision Planétaire","Visión Planetaria","Planetarische Vision","Visione Planetaria","PUBLICAÇÕES","PUBLICATIONS","PUBLICACIONES","PUBLICATIONS","PUBLIKATIONEN","PUBBLICAZIONI"],title:"PUBLICAÇÕES",body:"Desenvolvemos publicações que integram conhecimento, sensibilidade e transformação interior de forma relevante e prática para as pessoas.",detail:"Arte, Espiritualidade, Ciência e Livros Infantis",images:["/assets/home-books/geometria-sagrada.jpg","/assets/home-books/a-renascenca-oculta.jpg","/assets/home-books/a-gnose-ocidental.jpg","/assets/home-books/o-catarismo.jpg","/assets/home-books/as-cores-da-alma.jpg","/assets/home-books/a-menina-dos-baloes.jpg"]},
        {keys:["Parcerias","Partnerships","Partenariats","Alianzas","Partnerschaften","Partnership","DIÁLOGOS","DIALOGUES","DIÁLOGOS","DIALOGUES","DIALOGE","DIALOGHI"],title:"DIÁLOGOS",body:"Criamos espaços para o diálogo entre arte, ciência e espiritualidade, incluindo diferentes culturas, tradições e formas de conhecimento.",detail:"Eventos, podcasts e entrevistas com nomes tais como Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón e outros",images:["/assets/docx-home-global/global-detail-2.png","/assets/docx-home-global/global-detail-3.png","/assets/docx-home-global/global-detail-4.png"]},
        {keys:["Educação Holística","Holistic Education","Éducation Holistique","Educación Holística","Ganzheitliche Bildung","Educazione Olistica","PARCERIAS","PARTNERSHIPS","ALIANZAS","PARTENARIATS","PARTNERSCHAFTEN","PARTNERSHIP"],title:"PARCERIAS",body:"Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos.",detail:"Parceria internacional com a Embassy of the Free Mind (Holanda), dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos ocidentais. Parcerias nacionais com pesquisadores acadêmicos, artistas e organizações afins para projetos atuais e futuros.",images:["/assets/docx-home-global/global-detail-5.png"]}
      ]
    },
    en:{
      more:"Learn more",
      close:"Close",
      items:[
        {title:"PUBLICATIONS",body:"We develop publications that integrate knowledge, sensitivity and inner transformation in a relevant and practical way for people.",detail:"Art, Spirituality, Science and Children's Books"},
        {title:"DIALOGUES",body:"We create spaces for dialogue among art, science and spirituality, including different cultures, traditions and forms of knowledge.",detail:"Events, podcasts and interviews with names such as Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón and others."},
        {title:"PARTNERSHIPS",body:"We establish cooperation to expand the reach of cultural and philosophical projects.",detail:"International partnership with the Embassy of the Free Mind in the Netherlands, dedicated to preserving and disseminating the Hermetic tradition and Western esoteric knowledge; national partnerships with academic researchers, artists and aligned organizations for current and future projects."}
      ]
    },
    es:{
      more:"Saber más",
      close:"Cerrar",
      items:[
        {title:"PUBLICACIONES",body:"Desarrollamos publicaciones que integran conocimiento, sensibilidad y transformación interior de forma relevante y práctica para las personas.",detail:"Arte, Espiritualidad, Ciencia y Libros Infantiles"},
        {title:"DIÁLOGOS",body:"Creamos espacios para el diálogo entre arte, ciencia y espiritualidad, incluyendo diferentes culturas, tradiciones y formas de conocimiento.",detail:"Eventos, podcasts y entrevistas con nombres como Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón y otros."},
        {title:"ALIANZAS",body:"Establecemos cooperaciones para ampliar el alcance de proyectos culturales y filosóficos.",detail:"Alianza internacional con Embassy of the Free Mind en los Países Bajos, dedicada a la preservación y difusión de la tradición hermética y los conocimientos esotéricos occidentales; alianzas nacionales con investigadores académicos, artistas y organizaciones afines para proyectos actuales y futuros."}
      ]
    },
    fr:{
      more:"En savoir plus",
      close:"Fermer",
      items:[
        {title:"PUBLICATIONS",body:"Nous développons des publications qui intègrent connaissance, sensibilité et transformation intérieure de façon pertinente et pratique.",detail:"Art, Spiritualité, Science et Livres pour enfants"},
        {title:"DIALOGUES",body:"Nous créons des espaces de dialogue entre art, science et spiritualité, en incluant différentes cultures, traditions et formes de connaissance.",detail:"Événements, podcasts et entretiens avec des noms tels que Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón et d'autres."},
        {title:"PARTENARIATS",body:"Nous établissons des coopérations pour élargir la portée de projets culturels et philosophiques.",detail:"Partenariat international avec l'Embassy of the Free Mind aux Pays-Bas, dédiée à la préservation et à la diffusion de la tradition hermétique et des connaissances ésotériques occidentales; partenariats nationaux avec des chercheurs, artistes et organisations affines pour les projets actuels et futurs."}
      ]
    },
    de:{
      more:"Mehr erfahren",
      close:"Schließen",
      items:[
        {title:"PUBLIKATIONEN",body:"Wir entwickeln Publikationen, die Wissen, Sensibilität und innere Transformation auf relevante und praktische Weise verbinden.",detail:"Kunst, Spiritualität, Wissenschaft und Kinderbücher"},
        {title:"DIALOGE",body:"Wir schaffen Räume für den Dialog zwischen Kunst, Wissenschaft und Spiritualität und beziehen verschiedene Kulturen, Traditionen und Wissensformen ein.",detail:"Veranstaltungen, Podcasts und Interviews mit Namen wie Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón und anderen."},
        {title:"PARTNERSCHAFTEN",body:"Wir etablieren Kooperationen, um die Reichweite kultureller und philosophischer Projekte zu erweitern.",detail:"Internationale Partnerschaft mit der Embassy of the Free Mind in den Niederlanden zur Bewahrung und Verbreitung der hermetischen Tradition und westlichen esoterischen Wissens; nationale Partnerschaften mit Forschenden, Künstlern und verwandten Organisationen für aktuelle und zukünftige Projekte."}
      ]
    },
    it:{
      more:"Scopri di più",
      close:"Chiudi",
      items:[
        {title:"PUBBLICAZIONI",body:"Sviluppiamo pubblicazioni che integrano conoscenza, sensibilità e trasformazione interiore in modo rilevante e pratico per le persone.",detail:"Arte, Spiritualità, Scienza e Libri per bambini"},
        {title:"DIALOGHI",body:"Creiamo spazi di dialogo tra arte, scienza e spiritualità, includendo diverse culture, tradizioni e forme di conoscenza.",detail:"Eventi, podcast e interviste con nomi come Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón e altri."},
        {title:"PARTNERSHIP",body:"Stabiliamo cooperazioni per ampliare la portata di progetti culturali e filosofici.",detail:"Partnership internazionale con Embassy of the Free Mind nei Paesi Bassi, dedicata alla preservazione e diffusione della tradizione ermetica e delle conoscenze esoteriche occidentali; partnership nazionali con ricercatori accademici, artisti e organizzazioni affini per progetti attuali e futuri."}
      ]
    }
  };

  const baseItems=copy.pt.items;
  const localized=()=>{const lang=copy[currentLang()]?currentLang():"pt";return {lang,more:copy[lang].more,close:copy[lang].close,items:baseItems.map((base,index)=>({...base,...copy[lang].items[index],keys:base.keys,images:base.images}))}};
  const clearBadCardMarks=section=>[...section.querySelectorAll(".ics-global-card")].forEach(el=>{const directTitle=[...el.children].find(child=>child.tagName==="H3");if(!directTitle){el.classList.remove("ics-global-card","ics-global-selected");el.removeAttribute("data-ics-global-card")}});
  const cardFor=(section,item)=>[...section.querySelectorAll("div")].find(el=>{const h=[...el.children].find(child=>child.tagName==="H3");return h&&item.keys.some(key=>normalize(h.innerText)===key)});
  const panelHtml=item=>'<div class="ics-global-panel-media ics-global-panel-media-count-'+item.images.length+'">'+item.images.map((src,index)=>'<img src="'+src+'" alt="'+item.title+' '+(index+1)+'" tabindex="0">').join("")+'</div><div class="ics-global-panel-copy"><h3>'+item.title+'</h3><p>'+item.detail+'</p></div>';
  const updatePanel=(panel,item,index,lang)=>{const key=lang+":"+index+":"+item.title;if(panel.getAttribute("data-ics-global-panel-key")===key)return;panel.innerHTML=panelHtml(item);panel.setAttribute("data-ics-global-panel-key",key)};
  const placeGlobalPanel=(panel,card,grid)=>{
    const anchor=window.matchMedia("(max-width: 900px)").matches&&card?card:grid;
    if(panel.previousElementSibling!==anchor)anchor.insertAdjacentElement("afterend",panel);
  };

  const ensureVideo=()=>{
    const org=byHeading(["Nossa Organização","Notre Organisation","Our Organization","Nuestra Organización","Unsere Organisation","La Nostra Organizzazione"]);
    if(!org||org.querySelector(".ics-organization-video"))return;
    const wrap=document.createElement("div");
    wrap.className="ics-organization-video";
    wrap.innerHTML='<iframe src="https://www.youtube.com/embed/-nEZsZAjCrk" title="Instituto Civitas Solis" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    (org.querySelector(".max-w-4xl")||org.firstElementChild||org).appendChild(wrap);
  };

  const ensureGlobal=()=>{
    const section=byHeading(["Trabalho Global","Global Work","Travail Global","Trabajo Global","Globale Arbeit","Lavoro Globale"]);
    if(!section)return;
    const data=localized();
    section.setAttribute("id","trabalho-global");
    clearBadCardMarks(section);
    const cards=data.items.map((item,index)=>{
      const card=cardFor(section,item);
      if(!card)return null;
      card.classList.add("ics-global-card");
      card.setAttribute("data-ics-global-card",String(index));
      const h3=card.querySelector("h3");
      const p=card.querySelector("p");
      if(h3)h3.textContent=item.title;
      if(p)p.textContent=item.body;
      card.querySelectorAll(".ics-global-detail").forEach(el=>el.remove());
      let button=card.querySelector(".ics-more-button");
      if(!button){
        button=document.createElement("button");
        button.type="button";
        button.className="ics-more-button";
        card.appendChild(button);
      }
      button.textContent=data.more;
      button.setAttribute("aria-controls","ics-global-info-panel");
      button.setAttribute("aria-expanded",card.classList.contains("ics-global-selected")?"true":"false");
      button.onclick=()=>{
        const selected=card.classList.contains("ics-global-selected");
        section.querySelectorAll(".ics-global-card").forEach(el=>el.classList.remove("ics-global-selected"));
        section.querySelectorAll(".ics-more-button").forEach(el=>el.setAttribute("aria-expanded","false"));
        const panel=section.querySelector(".ics-global-info-panel");
        if(selected){
          if(panel)panel.hidden=true;
          return;
        }
        card.classList.add("ics-global-selected");
        button.setAttribute("aria-expanded","true");
        if(panel){
          panel.hidden=false;
          updatePanel(panel,data.items[index],index,data.lang);
          placeGlobalPanel(panel,card,card.parentElement);
        }
      };
      return card;
    }).filter(Boolean);
    if(cards.length){
      const grid=cards[0].parentElement;
      grid.classList.add("ics-global-grid");
      let panel=section.querySelector(".ics-global-info-panel");
      if(!panel){
        panel=document.createElement("div");
        panel.className="ics-global-info-panel";
        panel.id="ics-global-info-panel";
        panel.hidden=true;
        grid.insertAdjacentElement("afterend",panel);
      }
      const selected=section.querySelector(".ics-global-card.ics-global-selected");
      if(selected&&!panel.hidden){
        const index=Number(selected.getAttribute("data-ics-global-card")||0);
        updatePanel(panel,data.items[index],index,data.lang);
        placeGlobalPanel(panel,selected,grid);
      }else if(!selected){
        placeGlobalPanel(panel,null,grid);
      }
    }
    [...section.querySelectorAll("a[href='/trabalho-global']")].forEach(a=>(a.closest(".text-center")||a).remove());
    [...section.querySelectorAll("h2")].filter(h=>has(h.innerText,["Parceria Internacional","International Partnership","Partenariat International","Alianza Internacional","Internationale Partnerschaft","Partnership Internazionale"])).forEach(h=>(h.closest(".max-w-4xl")||h).remove());
  };

  const mvvTitleTerms=["Missão, Visão e Valores","Mission, Vision","Mission, Vision et Valeurs","Misión, Visión","Mission, Vision und Werte","Missione, Visione"];
  const isMvvPage=()=>location.pathname==="/missao-visao-valores"||byHeading(mvvTitleTerms);
  const removeIconBubble=el=>{
    if(!el)return;
    const bubble=el.closest(".inline-flex.rounded-full,.rounded-full");
    const target=bubble&&bubble.querySelector&&bubble.querySelector("svg")&&!bubble.querySelector("h1,h2,h3,p")?bubble:el;
    if(target&&target.parentNode)target.parentNode.removeChild(target);
  };
  const fixMvvHero=()=>{
    if(!isMvvPage())return;
    const hero=byHeading(mvvTitleTerms);
    if(hero)hero.querySelectorAll("svg").forEach(removeIconBubble);
  };
  const fixMissionVision=()=>{
    if(!isMvvPage())return;
    [...document.querySelectorAll("h2")].filter(h=>has(h.innerText,["Nossa Missão","Nossa Visão","Our Mission","Our Vision","Notre Mission","Notre Vision","Nuestra Misión","Nuestra Visión","Unsere Mission","Unsere Vision","La Nostra Missione","La Nostra Visione"])).forEach(h=>{
      const row=h.closest(".flex.items-center");
      if(row)row.querySelectorAll("svg").forEach(removeIconBubble);
      if(!h.classList.contains("ics-mvv-heading-no-icon"))h.classList.add("ics-mvv-heading-no-icon");
    });
  };
  const fixValues=()=>{
    if(!isMvvPage())return;
    document.querySelectorAll(".values-constellation").forEach(el=>{if(!el.classList.contains("ics-values-spaced"))el.classList.add("ics-values-spaced")});
  };
  const ensureFixedYouTubeGallery=scope=>{
    if(!scope)return;
    const widget=scope.querySelector(".youtube-widget-card");
    if(widget&&!widget.querySelector("[data-ics-video-gallery]"))widget.innerHTML='<div data-ics-video-gallery translate="no"></div>';
    scope.querySelectorAll(".elfsight-app-a0895143-ea93-4311-9987-4bd3b9f4ee8d").forEach(el=>{
      const host=document.createElement("div");
      host.setAttribute("data-ics-video-gallery","");
      host.setAttribute("translate","no");
      el.replaceWith(host);
    });
  };
  const fixHomeYouTube=()=>{
    const section=byHeading(["Nosso YouTube","Our YouTube","Nuestro YouTube","Notre YouTube","Unser YouTube","Il Nostro YouTube"]);
    if(!section||section.classList.contains("youtube-page"))return;
    [...section.querySelectorAll("p")].forEach(p=>{if(has(p.innerText,["Explore nossos conteúdos sobre arte, espiritualidade e ciência.","Explore our content on art, spirituality and science.","Explore nuestros contenidos sobre arte, espiritualidad y ciencia.","Explorez nos contenus sur l'art, la spiritualité et la science.","Entdecken Sie unsere Inhalte zu Kunst, Spiritualität und Wissenschaft.","Esplora i nostri contenuti su arte, spiritualità e scienza."]))p.remove()});
    ensureFixedYouTubeGallery(section);
  };

  const fixInstagram=()=>{
    [...document.querySelectorAll("h1,h2,h3")].filter(el=>has(el.innerText,["Feed Oficial do Instagram","Official Instagram Feed"])).forEach(el=>el.remove());
    [...document.querySelectorAll("p")].forEach(el=>{if(has(el.innerText,["Acompanhe nossas últimas postagens diretamente do perfil @institutocivitassolis","Follow our latest posts directly from @institutocivitassolis"]))el.remove()});
  };
  const fixContactPage=()=>{
    if(location.pathname!=="/contato")return;
    const emailTerms=["E-mail","Email","Correo electrónico","E-Mail"];
    const scheduleTerms=["Horário","Schedule","Horario","Horaires","Öffnungszeiten","Orari"];
    [...document.querySelectorAll("section")].filter(section=>{
      const headings=[...section.querySelectorAll("h2,h3")].map(h=>normalize(h.innerText));
      return headings.some(text=>emailTerms.includes(text))&&headings.some(text=>scheduleTerms.includes(text));
    }).forEach(section=>section.remove());
  };
  const fixYouTube=()=>{
    document.querySelectorAll(".youtube-hero h1").forEach(el=>{if(!el.classList.contains("ics-youtube-title"))el.classList.add("ics-youtube-title")});
    document.querySelectorAll(".youtube-hero p").forEach(el=>{if(!el.classList.contains("ics-youtube-subtitle"))el.classList.add("ics-youtube-subtitle")});
    document.querySelectorAll(".youtube-about").forEach(el=>el.remove());
    ensureFixedYouTubeGallery(document.querySelector(".youtube-page")||document);
  };
  const languageNames=["Português","English","Español","Français","Deutsch","Italiano"];
  const isLanguageButton=button=>button&&button.querySelector("svg")&&languageNames.some(name=>button.innerText.includes(name));
  const positionLanguageSelector=()=>{
    const header=document.querySelector("header");
    if(!header)return;
    const button=[...header.querySelectorAll("button")].find(isLanguageButton);
    const nav=header.querySelector("nav");
    const wrapper=button&&(button.closest(".relative")||button.parentElement);
    if(!button||!nav||!wrapper)return;
    wrapper.classList.add("ics-language-selector-right");
    if(nav.nextElementSibling!==wrapper)nav.insertAdjacentElement("afterend",wrapper);
  };
  const safe=fn=>{try{fn()}catch(error){}};
  const apply=()=>{safe(bindPublicationsNavigation);safe(positionLanguageSelector);safe(ensurePublicationsLinks);if(renderPublicationsPage())return;document.documentElement.classList.remove("ics-route-publications");document.documentElement.classList.toggle("ics-route-mvv",location.pathname==="/missao-visao-valores");safe(fixValues);safe(fixMvvHero);safe(fixMissionVision);safe(ensureVideo);safe(ensureGlobal);safe(fixHomeYouTube);safe(fixInstagram);safe(fixYouTube);safe(fixContactPage)};
  const schedule=()=>{clearTimeout(window.__icsHomeAdjustTimer);window.__icsHomeAdjustTimer=setTimeout(apply,120)};
  window.__icsHomeApply=apply;
  document.addEventListener("DOMContentLoaded",schedule);
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  let tries=0;
  const interval=setInterval(()=>{apply();tries+=1;if(tries>24)clearInterval(interval)},250);
  setTimeout(apply,0);
  setTimeout(apply,700);
  schedule();
})();`;

source = source.slice(0, hookIndex) + runtime + source.slice(hookIndex);

fs.writeFileSync(outputAssets, source);
fs.copyFileSync(outputAssets, outputDist);

const cssInput = path.join(root, "assets", "index-i18n-selector-d9754a4.css");
const cssOutputAssets = path.join(root, "assets", cssOutputName);
const cssOutputDist = path.join(root, "dist", "assets", cssOutputName);
const cssAdditions = `
.ics-organization-video{width:min(860px,100%);margin:3rem auto 0;aspect-ratio:16/9;border-radius:8px;overflow:hidden;box-shadow:0 18px 45px rgba(17,24,39,.16);background:#111827}.ics-organization-video iframe{width:100%;height:100%;border:0;display:block}.ics-global-grid{align-items:stretch!important;margin-bottom:0!important}.ics-global-card{display:flex!important;flex-direction:column!important;justify-content:flex-start!important;min-height:280px!important;height:100%;position:relative;overflow:visible!important;border:1px solid rgba(249,115,22,.14)!important;border-radius:8px!important;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease,background .25s ease}.ics-global-card:hover{transform:translateY(-4px);box-shadow:0 18px 35px rgba(17,24,39,.14)!important;border-color:rgba(249,115,22,.34)!important}.ics-global-card.ics-global-selected{border-color:rgba(249,115,22,.65)!important;box-shadow:0 20px 40px rgba(249,115,22,.16)!important}.ics-global-card h3{text-transform:uppercase;letter-spacing:.04em;min-height:1.6em}.ics-global-card p{flex:1}.ics-more-button{display:inline-flex;align-items:center;justify-content:center;align-self:center;margin-top:1.35rem;padding:.72rem 1.15rem;border-radius:6px;background:#f97316;color:#fff;font-weight:700;font-size:.9rem;line-height:1;transition:background .2s ease,transform .2s ease}.ics-more-button:hover{background:#ea580c;transform:translateY(-1px)}.ics-global-info-panel{max-width:1120px;margin:2.2rem auto 0;padding:1.25rem;background:#fff;border:1px solid rgba(249,115,22,.18);border-radius:8px;box-shadow:0 20px 45px rgba(17,24,39,.12);display:grid;grid-template-columns:minmax(0,1.35fr) minmax(220px,.65fr);gap:1.2rem;align-items:center;animation:icsPanelIn .26s ease both}.ics-global-info-panel[hidden]{display:none!important}.ics-global-panel-media{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:.75rem;align-items:center}.ics-global-panel-media-count-7{grid-template-columns:repeat(4,minmax(96px,1fr))}.ics-global-panel-media-count-3{grid-template-columns:repeat(3,minmax(145px,1fr))}.ics-global-panel-media-count-1{grid-template-columns:minmax(220px,360px);justify-content:center}.ics-global-panel-media img{width:100%;height:clamp(145px,16vw,210px);object-fit:contain;object-position:center;border-radius:6px;border:1px solid rgba(17,24,39,.08);background:#fff;box-shadow:0 10px 22px rgba(17,24,39,.08)}.ics-global-panel-copy h3{font-family:Georgia,serif;font-size:1.45rem;font-weight:700;color:#111827;margin:0 0 .75rem}.ics-global-panel-copy p{font-family:Georgia,serif;color:#4b5563;font-size:.98rem;line-height:1.65;margin:0}.ics-mvv-heading-no-icon{margin-left:0!important}.ics-route-mvv section svg{display:none!important}.ics-values-spaced{min-height:940px;max-width:1320px!important}.ics-values-spaced .values-geometry{top:170px;width:520px;max-width:40vw}.ics-values-spaced .values-orbit-item{width:340px}.ics-values-spaced .values-orbit-item p{line-height:1.34}.youtube-page,.youtube-page *:not(svg):not(path){font-family:Georgia,serif!important}.youtube-page h1,.youtube-page h2,.youtube-page h3,.ics-youtube-title{font-family:Georgia,serif!important;font-weight:700!important;letter-spacing:0!important}.youtube-page p,.youtube-page a,.youtube-page button,.youtube-section-subtitle,.ics-youtube-subtitle{font-family:Georgia,serif!important;letter-spacing:0!important}.youtube-page .youtube-subscribe,.youtube-page .youtube-visit,.youtube-page .youtube-all-link,.youtube-page .youtube-community-button{font-family:Georgia,serif!important}.youtube-about-cards p,.youtube-topic-card p{line-height:1.55!important}@keyframes icsPanelIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (min-width:1024px){.ics-values-spaced .values-orbit-respeitar{top:0;left:50%;width:520px}.ics-values-spaced .values-orbit-transformar{top:160px;left:0}.ics-values-spaced .values-orbit-coexistir{top:160px;right:0}.ics-values-spaced .values-orbit-inspirar{top:370px;left:0}.ics-values-spaced .values-orbit-compartilhar{top:370px;right:0}.ics-values-spaced .values-orbit-entusiasmar{top:710px;left:110px;width:380px}.ics-values-spaced .values-orbit-reconhecer{top:710px;right:110px;width:420px}}@media (min-width:1181px) and (max-width:1440px){.ics-values-spaced{min-height:900px;max-width:1160px!important}.ics-values-spaced .values-geometry{top:185px;width:470px;max-width:38vw}.ics-values-spaced .values-orbit-item{width:315px}.ics-values-spaced .values-orbit-respeitar{top:0;width:500px}.ics-values-spaced .values-orbit-transformar{top:175px;left:70px}.ics-values-spaced .values-orbit-coexistir{top:175px;right:70px}.ics-values-spaced .values-orbit-inspirar{top:405px;left:70px}.ics-values-spaced .values-orbit-compartilhar{top:405px;right:70px}.ics-values-spaced .values-orbit-entusiasmar{top:690px;left:140px;width:340px}.ics-values-spaced .values-orbit-reconhecer{top:690px;right:140px;width:360px}}@media (min-width:1024px) and (max-width:1180px){.ics-values-spaced{min-height:940px}.ics-values-spaced .values-geometry{top:205px;width:400px;max-width:34vw}.ics-values-spaced .values-orbit-item{width:300px}.ics-values-spaced .values-orbit-respeitar{width:430px}.ics-values-spaced .values-orbit-transformar{top:185px;left:0}.ics-values-spaced .values-orbit-coexistir{top:185px;right:0}.ics-values-spaced .values-orbit-inspirar{top:410px;left:0}.ics-values-spaced .values-orbit-compartilhar{top:410px;right:0}.ics-values-spaced .values-orbit-entusiasmar{top:680px;left:30px;width:340px}.ics-values-spaced .values-orbit-reconhecer{top:680px;right:30px;width:360px}}@media (max-width:900px){.ics-global-info-panel{grid-template-columns:1fr}.ics-global-panel-media-count-7{display:grid;position:static;width:100%;height:auto;grid-template-columns:repeat(2,minmax(120px,1fr));border:0;overflow:visible}.ics-global-panel-media-count-7 img{position:static;width:100%;height:auto;max-height:260px;border-radius:6px;border:1px solid rgba(17,24,39,.08);background:#fff}.ics-global-panel-media-count-3{grid-template-columns:1fr}.ics-global-panel-media img{height:auto;max-height:260px}}@media (min-width:901px){.ics-global-info-panel:has(.ics-global-panel-media-count-7){max-width:1180px;grid-template-columns:minmax(660px,1.48fr) minmax(300px,.72fr);gap:1.05rem}.ics-global-panel-media-count-7{display:block;position:relative;width:min(700px,100%);height:270px;justify-self:end;border:1px solid rgba(17,24,39,.12);border-radius:8px;background:#fff;overflow:hidden}.ics-global-panel-media-count-7 img{position:absolute;width:auto;height:auto;max-width:none;object-fit:contain;border-radius:0;border:0;background:transparent;box-shadow:0 8px 18px rgba(17,24,39,.12);cursor:zoom-in;transition:none;outline:0}.ics-global-panel-media-count-7 img:hover,.ics-global-panel-media-count-7 img:focus-visible{z-index:30!important;transform:none!important;box-shadow:0 8px 18px rgba(17,24,39,.12);filter:none;outline:0!important}.ics-global-panel-media-count-7 img:nth-child(1){left:2%;top:0;width:22%;height:74%;z-index:2}.ics-global-panel-media-count-7 img:nth-child(2){left:18%;top:34%;width:19%;height:72%;z-index:6}.ics-global-panel-media-count-7 img:nth-child(3){left:32%;top:0;width:22%;height:74%;z-index:3}.ics-global-panel-media-count-7 img:nth-child(4){left:47%;top:38%;width:20%;height:66%;z-index:7}.ics-global-panel-media-count-7 img:nth-child(5){left:55%;top:0;width:23%;height:74%;z-index:4}.ics-global-panel-media-count-7 img:nth-child(6){left:70%;top:38%;width:17%;height:60%;z-index:8}.ics-global-panel-media-count-7 img:nth-child(7){left:80%;top:0;width:20%;height:74%;z-index:5}.ics-global-info-panel:has(.ics-global-panel-media-count-1){max-width:820px;grid-template-columns:minmax(220px,300px) minmax(0,1fr);gap:.85rem;padding:1.15rem 1.25rem}.ics-global-panel-media-count-1{grid-template-columns:minmax(190px,270px);justify-content:end}.ics-global-panel-media-count-1 img{height:clamp(145px,14vw,190px)}}@media (max-width:767px){.ics-organization-video{margin-top:2rem}.ics-global-grid{gap:1.25rem!important}.ics-global-card{min-height:auto!important}.ics-global-info-panel{padding:1rem;margin-top:1.4rem}.ics-global-panel-media{grid-template-columns:1fr}.ics-global-card h3{font-size:1.05rem}}
`;
const dialoguesCss = `
@media (min-width:901px){.ics-global-info-panel:has(.ics-global-panel-media-count-3){max-width:1120px;grid-template-columns:minmax(620px,1.42fr) minmax(270px,.58fr);gap:1.15rem}.ics-global-panel-media-count-3{display:block;position:relative;width:min(690px,100%);height:280px;justify-self:end;overflow:visible}.ics-global-panel-media-count-3 img{position:absolute;width:56%;height:225px;max-height:none;object-fit:contain;border:0;border-radius:7px;background:#fff;box-shadow:0 14px 30px rgba(17,24,39,.18);cursor:zoom-in;outline:0;transition:transform .2s ease,filter .2s ease,opacity .2s ease,box-shadow .2s ease}.ics-global-panel-media-count-3 img:nth-child(1){left:0;top:38px;z-index:1}.ics-global-panel-media-count-3 img:nth-child(2){left:22%;top:0;z-index:2}.ics-global-panel-media-count-3 img:nth-child(3){left:44%;top:44px;z-index:3}.ics-global-panel-media-count-3:has(img:hover) img:not(:hover),.ics-global-panel-media-count-3:has(img:focus-visible) img:not(:focus-visible){filter:saturate(.72) brightness(.82);opacity:.72}.ics-global-panel-media-count-3 img:hover,.ics-global-panel-media-count-3 img:focus-visible{z-index:20;transform:translateY(-7px) scale(1.035);filter:none;opacity:1;box-shadow:0 20px 42px rgba(17,24,39,.25);outline:2px solid rgba(249,115,22,.7);outline-offset:3px}}
`;
const approvedPanelsCss = `
.ics-global-info-panel{grid-column:1/-1;width:100%;box-sizing:border-box}.ics-global-panel-media-count-6{isolation:isolate}@media (max-width:900px){.ics-global-panel-media-count-6{display:grid;position:static;width:100%;height:auto;grid-template-columns:1fr;gap:.85rem;border:0;overflow:visible}.ics-global-panel-media-count-6 img{position:static;width:100%;height:auto;max-height:280px;object-fit:contain;border-radius:6px;border:1px solid rgba(17,24,39,.08);background:#fff}}@media (min-width:901px){#trabalho-global .ics-global-info-panel{width:100%;max-width:none;box-sizing:border-box;padding:1.25rem;min-height:332px}#trabalho-global .ics-global-info-panel:has(.ics-global-panel-media-count-6){grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:1.05rem}#trabalho-global .ics-global-info-panel:has(.ics-global-panel-media-count-3){grid-template-columns:minmax(620px,1.42fr) minmax(270px,.58fr);gap:1.15rem}#trabalho-global .ics-global-info-panel:has(.ics-global-panel-media-count-1){grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:1.5rem}#trabalho-global .ics-global-panel-media-count-6{display:block;position:relative;width:min(700px,100%);height:290px;justify-self:end;border:1px solid rgba(17,24,39,.12);border-radius:8px;background:#fff;overflow:hidden}#trabalho-global .ics-global-panel-media-count-6 img{position:absolute;width:auto;height:auto;max-width:none;object-fit:contain;border-radius:0;border:0;background:transparent;box-shadow:0 8px 18px rgba(17,24,39,.12);cursor:zoom-in;transition:filter .18s ease,box-shadow .18s ease;outline:0}#trabalho-global .ics-global-panel-media-count-6 img:hover,#trabalho-global .ics-global-panel-media-count-6 img:focus-visible{z-index:30!important;filter:brightness(1.03);box-shadow:0 14px 28px rgba(17,24,39,.2);outline:0}#trabalho-global .ics-global-panel-media-count-6 img:nth-child(1){left:12%;top:0;width:22%;height:88%;z-index:10}#trabalho-global .ics-global-panel-media-count-6 img:nth-child(2){left:30%;top:8%;width:22%;height:84%;z-index:11}#trabalho-global .ics-global-panel-media-count-6 img:nth-child(3){left:48%;top:0;width:22%;height:88%;z-index:12}#trabalho-global .ics-global-panel-media-count-6 img:nth-child(4){left:65%;top:10%;width:21%;height:82%;z-index:13}#trabalho-global .ics-global-panel-media-count-6 img:nth-child(5){left:1%;top:14%;width:22%;height:76%;z-index:2}#trabalho-global .ics-global-panel-media-count-6 img:nth-child(6){left:78%;top:14%;width:21%;height:76%;z-index:3}#trabalho-global .ics-global-panel-media-count-1{width:100%;max-width:none;grid-template-columns:minmax(0,1fr);justify-content:stretch}#trabalho-global .ics-global-panel-media-count-1 img{width:100%;max-width:100%;height:auto;max-height:290px;object-fit:contain}#trabalho-global .ics-global-panel-copy{min-width:0}}
`;
const publicationsCss = `
.ics-route-publications body{background:#fff}.ics-publications-active{color:#f06423!important;border-color:#f06423!important}.ics-publications-hero{background:linear-gradient(180deg,#fff7ed 0%,#fff 100%);padding:5rem 1.5rem 4rem;border-bottom:1px solid rgba(249,115,22,.12)}.ics-publications-hero-inner{max-width:960px;margin:0 auto;text-align:center}.ics-publications-eyebrow{margin:0 0 .85rem;color:#f06423;font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:.82rem}.ics-publications-hero h1{font-family:Georgia,serif;font-size:clamp(2.3rem,4vw,4.25rem);line-height:1.08;color:#111827;margin:0 0 1rem}.ics-publications-hero p{max-width:760px;margin:0 auto;color:#4b5563;font-size:1.1rem;line-height:1.75}.ics-publications-intro{padding:4rem 1.5rem 2rem}.ics-publications-intro>div{max-width:880px;margin:0 auto;text-align:center}.ics-publications-intro h2{font-family:Georgia,serif;font-size:2.2rem;color:#111827;margin:0 0 .85rem}.ics-publications-intro p{margin:0;color:#5b6472;font-size:1.02rem;line-height:1.75}.ics-publications-list{max-width:1120px;margin:0 auto;padding:1rem 1.5rem 5rem;display:grid;gap:1.5rem}.ics-publication-card{display:grid;grid-template-columns:minmax(180px,260px) minmax(0,1fr);gap:2rem;align-items:center;background:#fff;border:1px solid rgba(17,24,39,.08);border-radius:8px;box-shadow:0 18px 45px rgba(17,24,39,.08);padding:1.25rem}.ics-publication-card-alt{background:#fffaf5}.ics-publication-cover-wrap{display:flex;justify-content:center;align-items:center;background:linear-gradient(180deg,#fff,#f8fafc);border:1px solid rgba(17,24,39,.08);border-radius:8px;min-height:310px;padding:1rem}.ics-publication-cover-wrap img{max-width:100%;max-height:285px;width:auto;height:auto;object-fit:contain;box-shadow:0 12px 26px rgba(17,24,39,.18)}.ics-publication-copy{padding:.5rem .35rem}.ics-publication-kicker{margin:0 0 .7rem;color:#f06423;font-size:.86rem;font-weight:700;letter-spacing:.02em}.ics-publication-copy h2{font-family:Georgia,serif;color:#111827;font-size:2rem;line-height:1.14;margin:0 0 .35rem}.ics-publication-copy h3{font-family:Georgia,serif;color:#4b5563;font-size:1.15rem;font-weight:600;line-height:1.35;margin:0 0 .55rem}.ics-publication-author{font-weight:700;color:#111827;margin:.35rem 0 1rem}.ics-publication-copy p{color:#4b5563;line-height:1.72;margin:0 0 1rem}.ics-publication-actions{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-top:1.2rem}.ics-amazon-button,.ics-store-button{display:inline-flex;align-items:center;justify-content:center;gap:.65rem;min-height:42px;padding:.68rem 1.15rem;border-radius:999px;text-decoration:none;font-weight:700;line-height:1;box-shadow:0 2px 4px rgba(17,24,39,.12);transition:background .15s ease,box-shadow .15s ease,transform .15s ease}.ics-amazon-button{background:#ffd814;border:1px solid #fcd200;color:#111827}.ics-amazon-button:hover,.ics-amazon-button:focus-visible{background:#f7ca00;color:#111827;box-shadow:0 4px 10px rgba(17,24,39,.16);transform:translateY(-1px)}.ics-store-button{background:#f06423;border:1px solid #ea580c;color:#fff}.ics-store-button:hover,.ics-store-button:focus-visible{background:#ea580c;color:#fff;box-shadow:0 4px 10px rgba(17,24,39,.16);transform:translateY(-1px)}.ics-amazon-icon{width:24px;height:24px;object-fit:contain;display:block}@media (max-width:820px){.ics-publications-hero{padding:4rem 1.25rem 3rem}.ics-publications-intro{padding:3rem 1.25rem 1.25rem}.ics-publications-list{padding:1rem 1rem 4rem}.ics-publication-card{grid-template-columns:1fr;gap:1.2rem;padding:1rem}.ics-publication-cover-wrap{min-height:auto}.ics-publication-cover-wrap img{max-height:340px}.ics-publication-copy{text-align:left}.ics-publication-copy h2{font-size:1.75rem}.ics-amazon-button,.ics-store-button{width:100%}}
`;const css = fs.readFileSync(cssInput, "utf8") + cssAdditions + dialoguesCss + approvedPanelsCss + publicationsCss;
fs.writeFileSync(cssOutputAssets, css);
fs.copyFileSync(cssOutputAssets, cssOutputDist);

for (const htmlPath of [path.join(root, "index.html"), path.join(root, "dist", "index.html")]) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const newline = html.includes("\r\n") ? "\r\n" : "\n";
  html = html.replace(/\r*\n/g, newline);
  html = html
    .replace(/\r?\n\s*<meta http-equiv="Cache-Control"[^>]*>/g, "")
    .replace(/\r?\n\s*<meta http-equiv="Pragma"[^>]*>/g, "")
    .replace(/\r?\n\s*<meta http-equiv="Expires"[^>]*>/g, "");
  html = html.replace(
    /(<meta name="deploy-revision" content="[^"]*" \/>)/,
    `$1${newline}    <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0" />${newline}    <meta http-equiv="Pragma" content="no-cache" />${newline}    <meta http-equiv="Expires" content="0" />`
  );
  html = html
    .replace(/<title>[^<]*<\/title>/, "<title>Instituto Civitas Solis - Arte, Espiritualidade e Ciência</title>")
    .replace(/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="Instituto Civitas Solis - Organização dedicada ao desenvolvimento humano integral por meio da arte, espiritualidade e ciência" />')
    .replace(/(<meta name="deploy-revision" content=")[^"]*(" \/>)/, `$1${revision}$2`)
    .replace(/(<link rel="icon" type="image\/png" href=")[^"]*(" \/>)/, `$1${logoUrl}$2`)
    .replace(/\/assets\/index-[^"]+\.js/, `/assets/${outputName}`)
    .replace(/\/assets\/index-[^"]+\.css/, `/assets/${cssOutputName}`);
  html = html
    .replace(/\s*<script src="https:\/\/elfsightcdn\.com\/platform\.js" async><\/script>/, `${newline}    <script>if(location.pathname==="/instagram"){const loader=document.createElement("script");loader.src="https://elfsightcdn.com/platform.js";loader.async=true;document.head.appendChild(loader)}</script>`)
    .replace(/\r?\n\s*<link rel="stylesheet" href="\/assets\/youtube-gallery\.css[^"]*">/g, "")
    .replace(/\r?\n\s*<script type="module" src="\/assets\/youtube-gallery\.js[^"]*"><\/script>/g, "")
    .replace(/\s*<\/head>/, `${newline}    <link rel="stylesheet" href="/assets/youtube-gallery.css?v=fixed-20261106">${newline}    <script type="module" src="/assets/youtube-gallery.js?v=fixed-20261106"></script>${newline}  </head>`);
  fs.writeFileSync(htmlPath, html);
}

const approvedHomeBooks = 'images:["/assets/home-books/geometria-sagrada.jpg","/assets/home-books/a-renascenca-oculta.jpg","/assets/home-books/a-gnose-ocidental.jpg","/assets/home-books/o-catarismo.jpg","/assets/home-books/as-cores-da-alma.jpg","/assets/home-books/a-menina-dos-baloes.jpg"]';
const generatedHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const checks = [
  ["ordem aprovada dos seis livros na home", source.includes(approvedHomeBooks)],
  ["painel de Parcerias com imagem ampliada", css.includes("#trabalho-global .ics-global-panel-media-count-1 img{width:100%;max-width:100%;height:auto;max-height:290px")],
  ["painéis internos com altura e largura comuns", css.includes("#trabalho-global .ics-global-info-panel{width:100%;max-width:none;box-sizing:border-box;padding:1.25rem;min-height:332px")],
  ["painel de Diálogos sobreposto", css.includes(".ics-global-panel-media-count-3 img:nth-child(3){left:44%;top:44px;z-index:3}")],
  ["detalhes mobile posicionados após o card", source.includes('placeGlobalPanel(panel,card,card.parentElement)')],
  ["bloco de contato removido", source.includes("const fixContactPage=()=>")&&source.includes("safe(fixContactPage)")],
  ["menu Publicações multilíngue", source.includes('publicationNavLabels={pt:"Publicações",en:"Publications",es:"Publicaciones",fr:"Publications",de:"Publikationen",it:"Pubblicazioni"}')],
  ["galeria fixa do YouTube", generatedHtml.includes("/assets/youtube-gallery.js?v=fixed-20261106")&&fs.existsSync(path.join(root,"dist","assets","youtube-gallery-data.js"))],
  ["metadados institucionais aprovados", generatedHtml.includes("Instituto Civitas Solis - Arte, Espiritualidade e Ciência")&&generatedHtml.includes("por meio da arte, espiritualidade e ciência")],
  ["Elfsight restrito ao Instagram", !generatedHtml.includes('<script src="https://elfsightcdn.com/platform.js" async></script>')&&generatedHtml.includes('if(location.pathname==="/instagram")')]
];
const failedChecks = checks.filter(([,passed])=>!passed).map(([name])=>name);
if(failedChecks.length)throw new Error("Approved-state regression: "+failedChecks.join(", "));

console.log(outputName);
















