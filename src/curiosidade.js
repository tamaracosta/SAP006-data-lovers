import data from './data/lol/lol.js';
import { computeStats } from './data.js';

const champs = Object.values(data.data);


// VIRAR CARD CURIOSIDADE
function virarCardCuriosidade() {
  const botaoDescubra = document.querySelector("#cardCuriosidade")
  botaoDescubra.classList.toggle('flip');
}
document.getElementById("descubra").addEventListener("click", virarCardCuriosidade)


// CRIAR FUNCAO PARA CALCULAR O NIVEL DE DIFICULDADE DOS PERSONAGENS
const arrDificuldadeCampeao = champs.map(function (campeao) {
  return campeao.info.difficulty;
});

const resultadoFinal = computeStats(arrDificuldadeCampeao);
document.getElementById('resultadoMedia').innerHTML = "A média é: " + resultadoFinal;