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
  let dificuldade;


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


function iniciar(){
  document.getElementById("btn-todos").click();
}
iniciar();