import { dadosLol } from './data.js';

import data from './data/lol/lol.js';

let champs = Object.values(data.data);
let cartoesFiltradosPorFuncao = champs;


// EXIBE CARTÕES NA TELA
// SE PASSAR PARAMETRO, EXIBE OS FILTRADOS
//SE NÃO PASSAR NENHUM PARAMETRO, EXIBE TODOS

function cards(cartoesFiltrados) {
  let cartoes;
  if (cartoesFiltrados != null) {
    cartoes = cartoesFiltrados
  } else {
    cartoes = champs
  }

  let i;
  let champName;
  let champImg;
  let card;
  let imagem;
  let nomePersonagem;

  document.getElementById("container").innerHTML = "";

  for (i = 0; i < cartoes.length; i++) {
    champImg = cartoes[i].splash;
    champName = cartoes[i].name;

    // CRIADO OS CARDS
    card = document.createElement("div");
    card.setAttribute("class", "card")
    document.getElementById("container").appendChild(card);

    //COLOCANDO IMAGEM DOS PERSONAGENS NO CARD
    imagem = document.createElement("img");
    imagem.setAttribute("src", champImg);
    card.appendChild(imagem)

    // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS
    nomePersonagem = document.createElement("SPAN");
    nomePersonagem.setAttribute("class", "nomeEFuncao");
    nomePersonagem.innerHTML = champName; // + "<br>" 
    card.appendChild(nomePersonagem);
  }
}


// ORDENAR A a Z/ Z a A
function ordenar(event) {

  if (event.target.value == "crescente") {
    dadosLol.sortData(champs, "name", "crescente")
  } else {
    dadosLol.sortData(champs, "name", "decrescente")
  }

  document.querySelector(".ativo").click()

}

document.getElementById("ordenar").addEventListener("change", ordenar)

// PESQUISAR PELO NOME
function pesquisar() {
  let textoDigitado = document.getElementById("campoPesquisar").value.toUpperCase();
  let dadosFiltrados = [];

  dadosFiltrados = champs.filter(function (cartaoAtual) {
    if (cartaoAtual.name.toUpperCase().includes(textoDigitado)) {
      return true;
    }
    else {
      return false;
    }
  })

  cards(dadosFiltrados);

  // CRIADO BOTÃO VOLTAR (APARECER SÓ QUANDO FILTRAR)
  let botaoVoltar = document.createElement('button')
  botaoVoltar.setAttribute('class', 'btnVoltar')
  botaoVoltar.addEventListener("click", voltarCard)
  botaoVoltar.innerHTML = "Voltar"
  document.getElementById('container').appendChild(botaoVoltar)
  console.log(botaoVoltar)
}

document.getElementById('campoPesquisar').addEventListener('keypress', pesquisar)


// VOLTAR A PÁGINA INICIAL
function voltarCard() {
  cards()
}

voltarCard()

// FILTRAR NÍVEL DE DIFICULDADE
function filtrarDificuldade(cartoes) {

  let nivelDificuldade = document.getElementById('campoFiltrar').value;
  let dadosFiltrados = [];

  dadosFiltrados = dadosLol.filterData(cartoes, dificuldade)
  function dificuldade(cartaoAtual) {
    let numDificuldade = (cartaoAtual.info.difficulty);

    if (nivelDificuldade == "difBaixa" && numDificuldade >= 1 && numDificuldade <= 3) {
      return true;
    }
    else if (nivelDificuldade == "difMedia" && numDificuldade >= 4 && numDificuldade <= 7) {
      return true;
    }
    else if (nivelDificuldade == "difAlta" && numDificuldade >= 8 && numDificuldade <= 10) {
      return true;
    }
    else if (nivelDificuldade == "nivel") {
      return true;
    }

  }

  return dadosFiltrados;

}

document.getElementById('campoFiltrar').addEventListener('change', todosFiltros)


const botoes = [document.querySelectorAll("nav button")];

//FUNÇÃO DAS ABAS EM GERAL EXCETO ABA TODOS
function abas(funcaoDoCampeao) {
  function tag(funcao) {
    return funcaoDoCampeao.includes(funcao);
  }

  function funcaoPersonagem(champ) {
    return champ.tags.some(tag);
  }

  const cartoes = dadosLol.filterData(champs, funcaoPersonagem);
  cartoesFiltradosPorFuncao = cartoes
  todosFiltros()

}


function mostrarAbaAtual(id) {
  switch (id) {
    case "btn-todos":
      cartoesFiltradosPorFuncao = champs
      todosFiltros()
      break;

    case "btn-atiradores":
      const funcaoAtirador = "Marksman";
      abas(funcaoAtirador);
      break;

    case "btn-assassinos":
      const funcaoAssassino = "Assassin";
      abas(funcaoAssassino);
      break;

    case "btn-lutadores":
      const funcaoLutador = "Fighter";
      abas(funcaoLutador);
      break;

    case "btn-magos":
      const funcaoMago = "Mage";
      abas(funcaoMago);
      break;

    case "btn-suportes":
      const funcaoSuporte = "Support";
      abas(funcaoSuporte);
      break;

    case "btn-tanques":
      const funcaoTanque = "Tank";
      abas(funcaoTanque);
      break;
  }
}

function removerClasseAtiva() {
  const abaAtiva = document.querySelectorAll("nav button");
  abaAtiva.forEach(aba => {
    aba.className = aba.className.replace(" ativo", "");
  })
}

function selecionarAba(event) {
  removerClasseAtiva();
  const abaId = event.target;
  mostrarAbaAtual(abaId.id);
  abaId.classList.add("ativo")
}

//ADICIONA EVENTO "CLICK" A CADA BOTÃO
botoes.forEach(aba => {
  for (let i = 0; i < aba.length; i++) {
    aba[i].addEventListener("click", selecionarAba);
  }
});


function iniciar() {
  document.getElementById("btn-todos").click();
}
iniciar();


//REALIZA TODOS OS FILTROS ,QUALQUER ABA, QUALQUER NÍVEL DE DIFICULDADE
function todosFiltros() {
  let cartoesFiltradosPorNivel = filtrarDificuldade(cartoesFiltradosPorFuncao)
  cards(cartoesFiltradosPorNivel)
}




