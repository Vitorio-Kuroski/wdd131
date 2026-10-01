// Rodapé: ano atual e data da última modificação
document.getElementById("ano-atual").textContent = new Date().getFullYear();
document.getElementById("ultima-modificacao").textContent = new Date(document.lastModified).toLocaleString("pt-BR");

const album = document.getElementById("album");
const titulo = document.getElementById("titulo-album");
const links = document.querySelectorAll("#site-nav a");

const anoDe = (templo) => Number.parseInt(templo.consagracao, 10);

const filtros = {
    todos: { titulo: "Álbum de Templos", testar: () => true },
    antigos: { titulo: "Templos Antigos", testar: (t) => anoDe(t) < 1900 },
    novos: { titulo: "Templos Novos", testar: (t) => anoDe(t) > 2000 },
    grandes: { titulo: "Templos Grandes", testar: (t) => t.area > 90000 },
    pequenos: { titulo: "Templos Pequenos", testar: (t) => t.area < 10000 }
};

// "2005, 7 de agosto" -> "7 de agosto de 2005"
const formatarData = (consagracao) => {
    const [ano, diaMes] = consagracao.split(", ");
    return `${diaMes} de ${ano}`;
};

const criarCartao = (templo) => `
    <figure>
        <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
        <figcaption>
            <h2>${templo.nomeDoTemplo}</h2>
            <p><strong>Localização:</strong> ${templo.localizacao}</p>
            <p><strong>Consagração:</strong> ${formatarData(templo.consagracao)}</p>
            <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados</p>
        </figcaption>
    </figure>`;

const exibirTemplos = (nomeDoFiltro) => {
    const filtro = filtros[nomeDoFiltro];
    const lista = templos.filter(filtro.testar);

    titulo.textContent = filtro.titulo;
    album.innerHTML = lista.length > 0
        ? lista.map(criarCartao).join("")
        : `<p class="sem-resultados">Nenhum templo encontrado.</p>`;

    links.forEach((link) => {
        if (link.dataset.filtro === nomeDoFiltro) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
};

// Menu hambúrguer (visível apenas em telas pequenas via CSS)
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const toggleIcon = navToggle.querySelector(".nav-toggle-icon");

const alternarMenu = (abrir) => {
    siteNav.classList.toggle("is-open", abrir);
    navToggle.setAttribute("aria-expanded", abrir);
    toggleIcon.textContent = abrir ? "✕" : "☰";
};

navToggle.addEventListener("click", () => alternarMenu(!siteNav.classList.contains("is-open")));

links.forEach((link) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();
        exibirTemplos(link.dataset.filtro);
        alternarMenu(false);
    });
});

exibirTemplos("todos");
