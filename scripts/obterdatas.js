// Preenche o ano atual dos direitos autorais no rodapé
const anoAtual = document.getElementById("anoatual");
if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// Preenche a data da última modificação do documento no rodapé
const ultimaModificacao = document.getElementById("ultimaModificacao");
if (ultimaModificacao) {
  ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
}
