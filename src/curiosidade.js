import data from './data/lol/lol.js';
import { dadosLol } from './data.js';

const champs = Object.values(data.data);

// VIRAR CARD CURIOSIDADE
function virarCardCuriosidade() {
    const botaoDescubra = document.querySelector("#cardCuriosidade")
    botaoDescubra.classList.toggle('flip');
  }
document.getElementById("descubra").addEventListener("click", virarCardCuriosidade)


// CRIAR FUNCAO PARA CALCULAR O NIVEL DE DIFICULDADE DOS PERSONAGENS
let resultadoFinal = dadosLol.computeStats(champs)
document.getElementById('resultadoMedia').innerHTML = "A média é: " + resultadoFinal