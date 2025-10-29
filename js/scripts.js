  // Datos básicos de las clases
  const clases = [
    {
      nro: 1,
      titulo: "Introducción a la materia, fundamentos del desarrollo web",
      pptLink: "materiales/Clase01_2025.pdf",
      relatedLinks: [
        {url: "https://www.arsys.es/blog/desarrollo-pagina-web", label: "Fases del procesor de desarrollo web"},
        {url: "https://www.w3schools.com/html/", label: "W3Schools HTML"},
      ]
    },
    {
      nro: 2,
      titulo: "Información, wireframes y mockups. Intro a HTML y CSS",
      pptLink: "materiales/Clase02_2025.pdf",
      relatedLinks: [
        {url: "https://www.uifrommars.com/arquitectura-de-la-informacion/", label: "Que es la Arq. de la Información?"},
        {url: "https://www.uifrommars.com/que-es-wireframe/", label: "Que es un Wireframe?"},
        {url: "https://developer.mozilla.org/es/docs/Web/HTML", label: "MDN HTML"},
        {url:"https://moqups.com",label:"Moqups"},
        {url:"https://whimsical.com",label:"Whimsical"},
        // {url:"",label:""}
      ]
    },
    {
      nro: 3,
      titulo: "CSS, Hojas de estilo en cascada - Maquetacion",
      pptLink: "materiales/Clase02_2025.pdf",
      relatedLinks:[
        {url:"https://developer.mozilla.org/es/docs/Web/CSS", label:"Documentacion CSS"},
        {url: "https://lenguajecss.com/css/introduccion/que-es-css/", label:"Introduccion a CSS"},
        {url: "https://codepen.io/Alejandrogrd/pen/gMZbWp", label:"CodePen - entorno de desarrollo  social para front-end"}
      ]
    },
    {
      nro: 4,
      titulo: "Maquetacion y grilla - Github",
      pptLink: "materiales/Clase04_2025.pdf",
      relatedLinks:[
        {url:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/", label:"Flexbox"},
        {url: "https://lenguajecss.com/css/grid/que-es-grid/", label:"Grid System CSS"},
        {url: "https://github.com", label:"Github"},
        {url: "https://flexboxfroggy.com/#es", label:"Flexbox Froggy (🎮)"},
        {url: "https://codingfantasy.com/games/flexboxadventure/play", label:"Flexbox Adventura (🎮)"},
        {url: "https://cssgridgarden.com/#es", label:"Grid Garden (🎮)"},
        {url:"materiales/github.pps", label:"Presentacion Github"}
      ]
    },
    {
      nro: 5,
      titulo: "Responsive Design - Fonts",
      pptLink: "materiales/Clase04_2025.pdf",
      relatedLinks:[
        {url:"https://fonts.google.com/", label:"Google Fonts "},
        {url:"https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries", label:"Media queries "},
        
      ]
    },
    {
      nro: 6,
      titulo: "Formularios - Correcciones Momento 2",
      pptLink: "materiales/Clase05_2025.pdf",
      relatedLinks:[
        {url:"materiales/tpintegrador_momento2.pdf", label:"Guia de TP Integrador - Momento 2 "},
        {url:"https://www.palermo.edu/dyc/ciclo_asignatura/index.html", label:"Ciclo de Asignatura "},
        {url:"https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/form", label:"Formularios HTML "},
        
      ]
    },
    {
      nro: 7,
      titulo: "Frameworks - Bootstrap",
      pptLink: "materiales/Clase07_2025.pdf",
      relatedLinks:[
        {url:"https://getbootstrap.com/", label:"Bootstrap"},
        {url:"https://youtu.be/XAUBr0eegfQ?si=qf7YzCtRAtDtq0-R", label:"Bootstrap, Porque sí y porque no"},
        {url:"clases/clase07", label:"Archivos de Clase"},        
      ]
    },
    {
      nro: 8,
      titulo: "Bootstrap parte 2 - Componentes",
      pptLink: "materiales/Clase07_2025.pdf",
      relatedLinks:[
        {url:"https://getbootstrap.com/docs/5.3/components/", label:"Componentes Bootstrap"},
        {url:"clases/clase08/ejercicioBootstrap.jpg", label:"Ejercicio Maquetacion"},        
      ]
    },
    {
      nro: 9,
      titulo: "plugins JS",
      pptLink: "materiales/Clase09_2025_pluginsJS.pdf",
      relatedLinks:[
        {url:"https://fancyapps.com/fancybox/", label:"Fancybox"},
        {url:"https://kenwheeler.github.io/slick/", label:"Slick JS"},
        {url:"https://michalsnik.github.io/aos/", label:"AOS (Animate On Scroll)"},
        {url:"https://animate.style/", label:"Animate CSS"}        
      ]
    },
    // {
    //   nro: 3,
    //   titulo: "JavaScript: Introducción y Manipulación del DOM",
    //   pptLink: "materiales/clase3_presentacion.pptx",
    //   relatedLinks: [
    //     {url: "https://developer.mozilla.org/es/docs/Web/JavaScript", label: "MDN JavaScript"},
    //     {url: "https://www.javascript.com/", label: "JavaScript Oficial"},
    //   ]
    // },
    
    // Aquí podés ir agregando más clases
  ];

  const container = document.getElementById('classes-container');

  clases.forEach(clase => {
    // Crear tarjeta
    const card = document.createElement('section');
    card.classList.add('card');

    // Título
    const h2 = document.createElement('h2');
    h2.textContent = `Clase ${clase.nro}: ${clase.titulo}`;
    card.appendChild(h2);

    // Link a PPT
    const pptLink = document.createElement('a');
    pptLink.href = clase.pptLink;
    pptLink.textContent = "Descargar Presentación (PDF)";
    pptLink.className = "presentation-link";
    pptLink.target = "_blank";
    card.appendChild(pptLink);

    // Lista de links relacionados
    if (clase.relatedLinks && clase.relatedLinks.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'related-links';
      clase.relatedLinks.forEach(linkInfo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkInfo.url;
        a.textContent = linkInfo.label;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    container.appendChild(card);
  });
