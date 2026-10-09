// Preenche o select de produtos a partir do array "products" (scripts/produtos.js)
const selectProduto = document.getElementById("produto");

products.forEach((produto) => {
  const opcao = document.createElement("option");
  opcao.value = produto.id;
  opcao.textContent = produto.name;
  selectProduto.appendChild(opcao);
});
