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
    cartoes = cartoesFiltrados
  } else {
    cartoes = champs
  }

  let i;
  let champName;
  let champImg;
  let card;
  let botaoFechar;
  let imagem;
  let nomePersonagem;


  document.getElementById("container").innerHTML = ""

  for (i = 0; i < cartoes.length; i++) {
    champImg = cartoes[i].splash;
    champName = cartoes[i].name;
    // dificuldade = cartoes[i].difficulty;
    // console.log(champName)


    // CRIADO OS CARDS
    card = document.createElement("div");
    card.setAttribute("class", "card")
    card.addEventListener("click", aumentarCard);
    document.getElementById("container").appendChild(card);

    //COLOCANDO IMAGEM DOS PERSONAGENS NO CARD
    imagem = document.createElement("img");
    imagem.setAttribute("src", champImg)
    card.appendChild(imagem)

    // COLOCANDO NOME E FUNÇÃO DOS PERSONAGENS
    nomePersonagem = document.createElement("div");
    nomePersonagem.setAttribute("class", "nomeEFuncao");
    nomePersonagem.innerHTML = champName + "<br>"
    card.appendChild(nomePersonagem)

    // CRIADO O BOTAO E ADD EVENTO DE FECHAR
    botaoFechar = document.createElement("button")
    botaoFechar.setAttribute("class", "btnFechar")
    botaoFechar.addEventListener("click", normalCard)
    botaoFechar.innerHTML = "Fechar"
    card.appendChild(botaoFechar)
    nomePersonagem.appendChild(botaoFechar);

  }
}
cards();


function ordenar(event) {

  if (event.target.value == "decrescente") {
    champs.sort(function (a, b) {

      if (a.name < b.name) {
        return 1;
      } else {
        return -1;
      }
    }
    );
  }
  else {
    champs.sort(function (a, b) {

      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    }
    );
  }

  cards()

}

document.getElementById("ordenar").addEventListener("change", ordenar)


function aumentarCard(x) {

  const divDoCartao = x.target.parentNode;

  if (divDoCartao.classList.contains("card")) {
    divDoCartao.classList.add("cartaoAberto");
  }
}

function normalCard(x) {

  const divDoCartao = x.target.parentNode.parentNode;
  divDoCartao.classList.remove("cartaoAberto");

}


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

document.getElementById('botaoPesquisar').addEventListener('click', pesquisar)



function voltarCard() {
  cards()
}

voltarCard()


/*
for(let personagens of champs){
  console.log(personagens.info.difficulty)
}
*/

function filtrarDificuldade() {

  let nivelDificuldade = document.getElementById('campoFiltrar').value;
  let dadosFiltrados = [];

  dadosFiltrados = champs.filter(function (cartaoAtual) {
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

  })

  cards(dadosFiltrados);

}

document.getElementById('campoFiltrar').addEventListener('change', filtrarDificuldade)




function filtrarFuncoes(funcaoPersonagem) {
  let dadosFiltrados = [];
  dadosFiltrados = champs.filter(function (cartaoAtual) {

    if (cartaoAtual.tags.includes(funcaoPersonagem)) {
      return true;
    }
    
  })

  cards(dadosFiltrados);
}


function filtrarAtiradores() {
  filtrarFuncoes("Fighter")
}


document.getElementById('atiradores').addEventListener('click', filtrarAtiradores)












