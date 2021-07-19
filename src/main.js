import { filterDataNome, sortData, filterNestedObj, filterNestedArr } from './data.js';
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

  document.getElementById("cardContainer").innerHTML = "";

  for (let champ of cartoes) {
    const champImg = champ.splash;
    const champName = champ.name;
    const champImgBack = champ.img;
    const champFunction = champ.tags;
    const champTitle = champ.title;

    let champInfo = "";
    Object.keys(champ.info).forEach(key => {
      champInfo += (key + ": " + champ.info[key] + "<br>")
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

  const dadosFiltrados = filterDataNome(champs, "name", textoDigitado)

  const caixaPesquisa = document.getElementById("campoPesquisar");
  caixaPesquisa.scrollIntoView();

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
  iniciar();
}

// FILTRAR NÍVEL DE DIFICULDADE
function filtrarDificuldade(cartoes) {

  const nivelDificuldade = document.getElementById('campoFiltrar').value;

  let dadosFiltrados;

  if (nivelDificuldade == "difBaixa") {
    dadosFiltrados = filterNestedObj(cartoes, [1, 2, 3], (champ) => champ.info.difficulty)
  }
  else if (nivelDificuldade == "difMedia") {
    dadosFiltrados = filterNestedObj(cartoes, [4, 5, 6, 7], (champ) => champ.info.difficulty);
  }
  else if (nivelDificuldade == "difAlta") {
    dadosFiltrados = filterNestedObj(cartoes, [8, 9, 10], (champ) => champ.info.difficulty);
  }
  else if (nivelDificuldade == "nivel") {
    dadosFiltrados = cartoes;
  }

  return dadosFiltrados;
}

document.getElementById('campoFiltrar').addEventListener('change', todosFiltros)


//FUNÇÕES PARA MOSTRAR CONTÉUDO NAS ABAS
function abas(funcaoDoCampeao) {

  const cartoes = filterNestedArr(champs, "tags", funcaoDoCampeao);
  cartoesFiltradosPorFuncao = cartoes;
  todosFiltros();
}


function mostrarAbaAtual(value) {

  let funcaoDoCampeao;
  switch (value) {
    case "btn-todos":
      funcaoDoCampeao = ["Marksman", "Assassin", "Fighter", "Mage", "Support", "Tank"];
      break;

    case "btn-atiradores":
      funcaoDoCampeao = "Marksman";
      break;

    case "btn-assassinos":
      funcaoDoCampeao = "Assassin";
      break;

    case "btn-lutadores":
      funcaoDoCampeao = "Fighter";
      break;

    case "btn-magos":
      funcaoDoCampeao = "Mage";
      break;

    case "btn-suportes":
      funcaoDoCampeao = "Support";
      break;

    case "btn-tanques":
      funcaoDoCampeao = "Tank";
      break;
  }
  return abas(funcaoDoCampeao);
}

function removerClasseAtiva() {
  botoesAbas.forEach(aba => {
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

const botoesAbas = document.querySelectorAll(".btn");

//ADICIONA EVENTO "CLICK" A CADA BOTÃO DA NAV
for (let botao of botoesAbas) {
  botao.addEventListener("click", selecionarAba);
}


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