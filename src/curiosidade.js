import data from './data/lol/lol.js';
import { dadosLol } from './data.js';

const champs = Object.values(data.data);

// ESCONDER CARD FRENTE QUANDO VIRAR
function esconderCardFrente() {
  const cardFrente = document.getElementById("cardCuriosidadeFrente")
  setTimeout(function(){ cardFrente.style.display = "none"; }, 1);
}


// VIRAR CARD CURIOSIDADE
function virarCardCuriosidade() {
    const botaoDescubra = document.querySelector("#cardCuriosidade")
    botaoDescubra.classList.toggle('flip');

    esconderCardFrente()

}
document.getElementById("descubra").addEventListener("click", virarCardCuriosidade)


// CRIAR FUNCAO PARA CALCULAR O NIVEL DE DIFICULDADE DOS PERSONAGENS
let resultadoFinal = dadosLol.computeStats(champs)
document.getElementById('resultadoMedia').innerHTML = "A média é: " + resultadoFinal