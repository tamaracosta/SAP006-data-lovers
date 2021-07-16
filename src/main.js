
import {sortData, filterDataNome, filterData} from './data.js';
import data from './data/lol/lol.js';

const champs = Object.values(data.data);
let cartoesFiltradosPorFuncao = champs;


// EXIBE CARTÕES NA TELA
// SE PASSAR PARAMETRO, EXIBE OS FILTRADOS
//SE NÃO PASSAR NENHUM PARAMETRO, EXIBE TODOS
function cards(cartoesFiltrados) {
  let cartoes;
  if (cartoesFiltrados != null) {
    cartoes = cartoesFiltrados;
  } else {
    cartoes = champs;
  }

  let i;
  let champName;
  let champImg;
  let champImgBack;
  let champFunction;
  let champTitle;

  document.getElementById("cardContainer").innerHTML = "";

  for (i = 0; i < cartoes.length; i++) {
    champImg = cartoes[i].splash;
    champName = cartoes[i].name;
    champImgBack = cartoes[i].img;
    champFunction = cartoes[i].tags;
    champTitle = cartoes[i].title;

    let champInfo = "";
    Object.keys(cartoes[i].info).forEach(e => {
      champInfo += (e + ": " + cartoes[i].info[e] + "<br>")
    });

    //CRIANDO OS CARDS
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    document.getElementById("cardContainer").appendChild(card);
    card.addEventListener("click", virarCard);

    //CARD-FRONT
    const cardFront = document.createElement("div");
    cardFront.setAttribute("class", "card-front");
    card.appendChild(cardFront);


    //CARD-BACK
    const cardBack = document.createElement("div");
    cardBack.setAttribute("class", "card-back");
    card.appendChild(cardBack);

    //COLOCANDO IMAGEM DOS PERSONAGENS NO CARDFRONT
    const imagem = document.createElement("img");
    imagem.setAttribute("src", champImg);
    cardFront.appendChild(imagem);

    //COLOCANDO IMAGEM PEQUENA DOS PERSONAGENS NO CARDBACK
    const imagemPequena = document.createElement("img");
    imagemPequena.setAttribute("src", champImgBack);

    // COLOCANDO NOME DOS PERSONAGENS NO CARDFRONT
    const nomePersonagem = document.createElement("SPAN");
    nomePersonagem.setAttribute("class", "nomeEFuncao");
    nomePersonagem.innerHTML = champName;
    cardFront.appendChild(nomePersonagem);

    // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS NO CARDBACK
    const headerPersonagem = document.createElement("SPAN");
    headerPersonagem.setAttribute("class", "headerPersonagem");
    const funcaoPersonagem = document.createElement("P");
    funcaoPersonagem.setAttribute("class", "funcaoPersonagem")
    funcaoPersonagem.innerHTML = champName + "<br>" + champFunction;
    headerPersonagem.appendChild(imagemPequena);
    headerPersonagem.appendChild(funcaoPersonagem);

    cardBack.appendChild(headerPersonagem);

    //COLOCANDO TITLE E INFO AO CARDBACK
    const champTitleContainer = document.createElement("SPAN");
    champTitleContainer.setAttribute("class", "champTitle-container");
    champTitleContainer.innerHTML = '"' + champTitle + '"';

    const champInfoContainer = document.createElement("DIV");
    champInfoContainer.setAttribute("class", "champInfo-container");
    champInfoContainer.appendChild(champTitleContainer);

    const infoPersonagem = document.createElement("P");
    infoPersonagem.innerHTML = champInfo;
    infoPersonagem.setAttribute("class", "champInfo");
    champInfoContainer.appendChild(infoPersonagem);
    cardBack.appendChild(champInfoContainer);

  }
}

// FUNÇÃO VIRAR CARTA E ALTERNAR (TOGGLE) ENTRE AS CLASS 
// EVENT DELEGATION
function virarCard(x) {
  const divDoCartao = x.target.parentNode.parentNode;

  if (divDoCartao.classList.contains("card")) {
    divDoCartao.classList.toggle("flip");

  } else if (divDoCartao.parentNode.classList.contains("card")) {
    divDoCartao.parentNode.classList.toggle("flip");
  }
}


function ordenar(event) {
  if (event.target.value == "crescente") {
    sortData(champs, "name", "crescente");
  } else {
    sortData(champs, "name", "decrescente");
  }
  mostrarAbaAtual(abaValue.value);
}

document.getElementById("ordenar").addEventListener("change", ordenar);


// PESQUISAR PELO NOME
function pesquisarNome() {
  const textoDigitado = document.getElementById("campoPesquisar").value.toUpperCase();

// const dadosFiltrados = filterDataNome(champs, filtrarNome)
const dadosFiltrados = filterDataNome(champs, "name", textoDigitado)

  // function filtrarNome(cartaoAtual) {
  //   if (cartaoAtual.name.toUpperCase().includes(textoDigitado)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  cards(dadosFiltrados);

  // CRIADO BOTÃO VOLTAR (APARECER SÓ QUANDO FILTRAR)
  const botaoVoltar = document.createElement('button');
  botaoVoltar.setAttribute('class', 'btnVoltar');
  botaoVoltar.addEventListener("click", voltarCard);
  botaoVoltar.innerHTML = "Voltar";
  document.getElementById('cardContainer').appendChild(botaoVoltar);
}

document.getElementById('campoPesquisar').addEventListener('keyup', pesquisarNome);


// VOLTAR A PÁGINA INICIAL
function voltarCard() {
  cards();
}

// FILTRAR NÍVEL DE DIFICULDADE
function filtrarDificuldade(cartoes) {

  const nivelDificuldade = document.getElementById('campoFiltrar').value;

  const dadosFiltrados = filterData(cartoes, dificuldade);
  function dificuldade(cartaoAtual) {
    const numDificuldade = (cartaoAtual.info.difficulty);

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


const botoesAbas = [document.querySelectorAll("nav button")];

//FUNÇÕES PARA MOSTRAR CONTÉUDO NAS ABAS
function abas(funcaoDoCampeao) {
  function tag(funcao) {
    return funcaoDoCampeao.includes(funcao);
  }

  function funcaoPersonagem(champ) {
    return champ.tags.some(tag);
  }

  const cartoes = filterData(champs, funcaoPersonagem);
  cartoesFiltradosPorFuncao = cartoes;
  todosFiltros();

}


function mostrarAbaAtual(value) {

  let funcaoPersonagemAba;
  switch (value) {
    case "btn-todos":
      funcaoPersonagemAba = ["Marksman", "Assassin", "Fighter", "Mage", "Support", "Tank"];
      break;

    case "btn-atiradores":
      funcaoPersonagemAba = "Marksman";
      break;

    case "btn-assassinos":
      funcaoPersonagemAba = "Assassin";
      break;

    case "btn-lutadores":
      funcaoPersonagemAba = "Fighter";
      break;

    case "btn-magos":
      funcaoPersonagemAba = "Mage";
      break;

    case "btn-suportes":
      funcaoPersonagemAba = "Support";
      break;

    case "btn-tanques":
      funcaoPersonagemAba = "Tank";
      break;
  }
  return abas(funcaoPersonagemAba);
}

function removerClasseAtiva() {
  const abaAtiva = document.querySelectorAll("nav button");
  abaAtiva.forEach(aba => {
    aba.className = aba.className.replace(" ativo", "");
  })
}

let abaValue;
function selecionarAba(event) {
  removerClasseAtiva();

  abaValue = event.target;
  mostrarAbaAtual(abaValue.value);
  abaValue.classList.add("ativo");
}

//ADICIONA EVENTO "CLICK" A CADA BOTÃO DA NAV
botoesAbas.forEach(botao => {
  for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener("click", selecionarAba);
  }
});

//ADICIONA EVENTO "CHANGE" AO SELECT de FUNCAO DO CAMPEAO @MEDIA
document.getElementById("funcao-do-campeao").addEventListener("change", selecionarAba);


function iniciar() {
  document.getElementById("btn-todos").click();
}
iniciar();


//REALIZA TODOS OS FILTROS ,QUALQUER ABA, QUALQUER NÍVEL DE DIFICULDADE
function todosFiltros() {
  const cartoesFiltradosPorNivel = filtrarDificuldade(cartoesFiltradosPorFuncao);
  cards(cartoesFiltradosPorNivel);
}

