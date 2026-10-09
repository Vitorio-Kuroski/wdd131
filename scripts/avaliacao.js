// Conta as avaliações enviadas usando o localStorage
const parametros = new URLSearchParams(window.location.search);
const idProduto = parametros.get("produto");
const contador = document.getElementById("contador");
const resumo = document.getElementById("resumo");

let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;

// Só soma quando a página foi aberta pelo envio do formulário
if (idProduto) {
  totalAvaliacoes++;
  localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

  const produto = products.find((item) => item.id === idProduto);
  const nomeProduto = produto ? produto.name : idProduto;
  const nota = parametros.get("nota");
  resumo.textContent = `Produto avaliado: ${nomeProduto} · Nota: ${nota} de 5`;
}

const palavra = totalAvaliacoes === 1 ? "avaliação" : "avaliações";
contador.textContent = `${totalAvaliacoes} ${palavra}`;
