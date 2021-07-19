import { sortData, computeStats, filterDataNome, filterNestedArr, filterNestedObj } from '../src/data.js';


const personagens = [
  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 7
    },
    tags: ["Fighter", "Marksman"],
  },

  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    },
    tags: ["Tank", "Support"],
  },
]

const ordemDeAZ = [
  {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    },
    tags: ["Tank", "Support"],
  },

  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 7
    },
    tags: ["Fighter", "Marksman"],
  },
]

const ordemDeZA = [
  {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 7
    },
    tags: ["Fighter", "Marksman"],
  },

  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    },
    tags: ["Tank", "Support"],
  },
]

const tank = [
  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ["Assassin", "Tank"],
  },

  {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    },
    tags: ["Tank", "Support"],
  },
]

const dificuldadeSete = [
  {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 7
    },
    tags: ["Fighter", "Marksman"],
  },

  {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    },
    tags: ["Tank", "Support"],
  },
]


//TESTE FILTER NOME
describe('filterDataNome', () => {
  it('deve ser uma função', () => {
    expect(typeof filterDataNome).toBe("function");
  });

  it('retornar o nome Jayce', () => {
    expect(filterDataNome(personagens, "name", "Jayce")).toEqual([personagens[1]]);
  });

  it('retornar personagem quando digitado tudo em letra maiúscula', () => {
    expect(filterDataNome(personagens, "name", "JAYCE")).toEqual([personagens[1]]);
  });

  it('retornar personagem quando digitado tudo em letra minúscula', () => {
    expect(filterDataNome(personagens, "name", "jayce")).toEqual([personagens[1]]);
  });

  it('retornar personagem quando digitado parte do nome', () => {
    expect(filterDataNome(personagens, "name", "jay")).toEqual([personagens[1]]);
  });

});


//TEST SORT
describe('teste com ordem alfabética', () => {
  it('ordena de A-Z', () => {
    expect(sortData(personagens, "name", "crescente")).toStrictEqual(ordemDeAZ);
  });

  it('ordena de Z-A', () => {
    expect(sortData(personagens, "name", "decrescente")).toStrictEqual(ordemDeZA);
  });
});


//TESTE COMPUTESTATS
describe('computeStats', () => {
  it('deve ser uma função', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('deve jogar um TypeError quando invocado com tipos de argumentos errados', () => {
    expect(() => computeStats(4)).toThrow(TypeError); //argumento tipo number
    expect(() => computeStats('string')).toThrow(TypeError); //argumento tipo string
    expect(() => computeStats()).toThrow(TypeError); //argumento vazio 
    expect(() => computeStats(null)).toThrow(TypeError); //argumento null
  });

  it('deve retornar media 8.00 para data [7,10,7]', () => {
    expect(computeStats([7, 10, 7])).toBe('8.00');
  })
})


// TESTE FILTER FUNÇÃO DO PERSONAGEM
describe('filterNestedArr', () => {
  it('deve ser uma função', () => {
    expect(typeof filterNestedArr).toBe('function');
  });

  it('deve jogar um TypeError quando invocado com tipos de argumentos errados', () => {
    expect(() => filterNestedArr(13, 'string', 'string')).toThrow(TypeError);
    expect(() => filterNestedArr(null, 'string', 14)).toThrow(TypeError);
    expect(() => filterNestedArr()).toThrow(TypeError);
  });

  it('deve retornar personagens com função "tank" para filtro de tags "tank"', () => {
    expect(filterNestedArr(personagens, 'tags', 'Tank')).toStrictEqual(tank);
  });
})

// TESTE FILTER DIFICULDADE DO PERSONAGEM
describe('filterNestedObj', () => {
  it('deve ser uma função', () => {
    expect(typeof filterNestedObj).toBe('function');
  });

  it('deve jogar um TypeError quando invocado com tipos de argumentos errados', () => {
    expect(() => filterNestedObj(15, 'string', (a) => a)).toThrow(TypeError);
    expect(() => filterNestedObj([1, 2, 3], 'string', 'string')).toThrow(TypeError);
    expect(() => filterNestedObj([1, 2, 3], 14, (a) => a)).toThrow(TypeError);
  });

  it('deve retornar personagens com dificuldade 7 para filtro de dificuldade "7"', () => {
    expect(filterNestedObj(personagens, "7", (a) => a.info.difficulty)).toStrictEqual(dificuldadeSete);
  });
})
