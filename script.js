/*
  PERSONALIZE SEUS PROJETOS AQUI:
  - title: nome do projeto
  - category: tipo de site/cliente
  - description: o que você desenvolveu
  - image: caminho da imagem/print do projeto (ex.: "imagens/projeto-1.jpg")
  - link: endereço do site publicado
  - tags: tecnologias utilizadas

  Para mostrar menos projetos, remova os itens que não for usar.
  O portfólio aceita até 5 projetos.
*/

const projects = [
  {
    title: "Landing Page — LR Studio Car",
    category: "LANDING PAGE",
    description: "Apresentação de uma empresa ou negócio, com informações, serviços e formas de contato.",
    image: "imagens/LR.png",
    link: "https://arthur-soares-ramos.github.io/LR-Studio-Car/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Landing Page — Projeto 02",
    category: "PÁGINA DE VENDAS",
    description: "Página criada para destacar uma solução, apresentar seus benefícios e incentivar o contato.",
    image: "imagens/projeto-2.jpg",
    link: "#",
    tags: ["HTML", "CSS"]
  },
  {
    title: "Landing Page — Projeto 03",
    category: "NEGÓCIO LOCAL",
    description: "Site para apresentar um negócio local, seus diferenciais e informações importantes para clientes.",
    image: "imagens/projeto-3.jpg",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Landing Page — Projeto 04",
    category: "PORTFÓLIO",
    description: "Página profissional organizada para destacar trabalhos, habilidades e canais de contato.",
    image: "imagens/projeto-4.jpg",
    link: "#",
    tags: ["HTML", "CSS"]
  },
  {
    title: "Landing Page — Projeto 05",
    category: "PROJETO PERSONALIZADO",
    description: "Experiência digital desenvolvida com identidade visual e conteúdo adaptados ao projeto.",
    image: "imagens/projeto-5.jpg",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const grid = document.getElementById("projectGrid");
const selectedProjects = projects.slice(0, 5);

grid.innerHTML = selectedProjects.map((project, index) => {
  const imageMarkup = project.image
    ? `<img src="${project.image}" alt="Prévia do ${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
    : "";
  const placeholderDisplay = project.image ? "none" : "flex";
  const safeLink = project.link && project.link !== "#" ? project.link : null;
  const linkMarkup = safeLink
    ? `<a class="project-link" href="${safeLink}" target="_blank" rel="noopener noreferrer">Ver projeto ↗</a>`
    : `<span class="project-link">Adicione o link ↗</span>`;

  return `
    <article class="project-card">
      <div class="project-preview">
        ${imageMarkup}
        <div class="preview-placeholder" style="display:${placeholderDisplay}">
          <span>Projeto ${String(index + 1).padStart(2, "0")}</span>
          <small>PRÉ-VISUALIZAÇÃO DO SITE</small>
        </div>
        <span class="project-number">${String(index + 1).padStart(2, "0")} / 05</span>
      </div>
      <div class="project-info">
        <span class="project-type">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-bottom">
          <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          ${linkMarkup}
        </div>
      </div>
    </article>
  `;
}).join("");

document.getElementById("projectCount").textContent =
  String(selectedProjects.length).padStart(2, "0");

document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
