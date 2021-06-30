import { dadosLol } from './data.js';

// import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';


const champs = Object.values(data.data);

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
  let card;
  let imagem;
  let nomePersonagem;
  let cardBack;
  let cardFront;
  let champImgBack;
  let imagemPequena;
  let champFunction;
  let funcaoPersonagem;
  let champTitle;
  let tituloPersonagem;
  let infoPersonagem;
  let headerPersonagem;
  let champTitleContainer;
  let champInfoContainer;

  document.getElementById("container").innerHTML = "";

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

    // CRIANDO OS CARDS
    card = document.createElement("div");
    card.setAttribute("class", "card");
    document.getElementById("container").appendChild(card);

    //FRONT
    cardFront = document.createElement("div");
    cardFront.setAttribute("class", "card-front");
    card.appendChild(cardFront);
    cardFront.addEventListener("click", virarCard);

    //BACK
    cardBack = document.createElement("div");
    cardBack.setAttribute("class", "card-back");
    card.appendChild(cardBack);
    cardBack.addEventListener("click", virarCard);

    //COLOCANDO IMAGEM DOS PERSONAGENS NO CARD
    imagem = document.createElement("img");
    imagem.setAttribute("src", champImg);
    cardFront.appendChild(imagem);

    imagemPequena = document.createElement("img");
    imagemPequena.setAttribute("src", champImgBack);
    //cardBack.appendChild(imagemPequena);

    // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS
    nomePersonagem = document.createElement("SPAN");
    nomePersonagem.setAttribute("class", "nomeEFuncao");
    nomePersonagem.innerHTML = champName; // + "<br>" 
    cardFront.appendChild(nomePersonagem);

    headerPersonagem = document.createElement("SPAN");
    headerPersonagem.setAttribute("class", "headerPersonagem");
    funcaoPersonagem = document.createElement("P");
    funcaoPersonagem.setAttribute("class", "funcaoPersongem")
    funcaoPersonagem.innerHTML = champName + "<br>" + champFunction;
    headerPersonagem.appendChild(imagemPequena);
    headerPersonagem.appendChild(funcaoPersonagem);
    cardBack.appendChild(headerPersonagem);

    //COLOCANDO TITLE E INFO AO CARDBACK
    champTitleContainer = document.createElement("SPAN");
    champTitleContainer.setAttribute("class", "champTitle-container");
    tituloPersonagem = document.createElement("h3");
    tituloPersonagem.innerHTML = '"' + champTitle + '"';
    champTitleContainer.appendChild(tituloPersonagem);
    
    champInfoContainer = document.createElement("DIV");
    infoPersonagem = document.createElement("P");
    infoPersonagem.innerHTML = champInfo;
    infoPersonagem.setAttribute("class", "champInfo");
    champInfoContainer.appendChild(infoPersonagem);

    cardBack.appendChild(champTitleContainer);
    cardBack.appendChild(champInfoContainer);

    //FUNÇÃO VIRAR CARTA E ALTERNAR (TOGGLE) ENTRE AS CLASS 
    //EVENT DELEGATION

    function virarCard(x) {
      const divDoCartao = x.target.parentNode.parentNode;
      if (divDoCartao.classList.contains("card")) {
        divDoCartao.classList.toggle("flip");
      }
    }
  }
}
cards();


function ordenar(event) {

  if (event.target.value == "crescente") {
    dadosLol.sortData(champs, "name", "crescente");
  } else {
    dadosLol.sortData(champs, "name", "decrescente");
  }
  document.querySelector(".ativo").click();

}

document.getElementById("ordenar").addEventListener("change", ordenar);


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
  let botaoVoltar = document.createElement('button');
  botaoVoltar.setAttribute('class', 'btnVoltar');
  botaoVoltar.addEventListener("click", voltarCard);
  botaoVoltar.innerHTML = "Voltar";
  document.getElementById('container').appendChild(botaoVoltar);
  console.log(botaoVoltar);
}
document.getElementById('botaoPesquisar').addEventListener('click', pesquisar);


function voltarCard() {
  cards();
}

voltarCard();


function filtrarDificuldade() {

  let nivelDificuldade = document.getElementById('campoFiltrar').value;
  let dadosFiltrados = [];

  dadosFiltrados = dadosLol.filterData(champs, dificuldade);
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

  }

  if (dados);
  function cartasFiltradas(v, i) {
    v.dadosFiltrados
  }


  //cards(dadosFiltrados);
  //document.querySelector(".ativo").click();
}

document.getElementById('campoFiltrar').addEventListener('change', filtrarDificuldade);

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
  cards(cartoes);
}


function mostrarAbaAtual(id) {
  switch (id) {
    case "btn-todos":
      cards();
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
  abaId.className = " ativo";
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