// Valores estáticos do clima (iguais aos exibidos no HTML)
const temperatura = 8; // °C
const velocidadeVento = 12; // km/h

// Sensação térmica em °C, com o vento em km/h
const calcularSensacaoTermica = (temp, vento) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);

// Só calcula quando temperatura <= 10 °C e vento > 4,8 km/h
let sensacao = "N/A";
if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacao = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
}
document.getElementById("sensacao").textContent = sensacao;

// Rodapé: ano atual e data da última modificação
document.getElementById("ano-atual").textContent = new Date().getFullYear();
document.getElementById("ultima-modificacao").textContent = new Date(document.lastModified).toLocaleString("pt-BR");
