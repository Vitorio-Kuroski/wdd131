document.addEventListener("DOMContentLoaded", () => {
    // Rodapé dinâmico: ano atual e data da última modificação do arquivo
    const anoAtual = document.getElementById("ano-atual");
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    const ultimaModificacao = document.getElementById("ultima-modificacao");
    if (ultimaModificacao) {
        const dataModificacao = new Date(document.lastModified);
        ultimaModificacao.textContent = dataModificacao.toLocaleString("pt-BR");
    }

    // Menu hambúrguer (visível apenas em telas pequenas via CSS)
    const navToggle = document.getElementById("nav-toggle");
    const siteNav = document.getElementById("site-nav");
    const toggleIcon = navToggle ? navToggle.querySelector(".nav-toggle-icon") : null;

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", () => {
            const estaAberto = siteNav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", estaAberto);
            if (toggleIcon) {
                toggleIcon.textContent = estaAberto ? "✕" : "☰";
            }
        });
    }
});
