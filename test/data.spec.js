import { sortData, computeStats } from '../src/data.js';

const dataTeste = [{
  Alistar: {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    difficulty: 7,
    tags: ["Tank", "Support"],
  },

  Jayce: {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    difficulty: 7,
    tags: ["Fighter", "Marksman"],
  },

  Evelynn: {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    difficulty: 10,
    tags: ["Assassin", "Tank"],
  },

  Eva: {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    difficulty: 10,
    tags: ["Assassin", "Tank"],
  },
}]

const ordemDeAZ = [{
  Alistar: {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    difficulty: 7,
    tags: ["Tank", "Support"],
  },

  Eva: {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    difficulty: 10,
    tags: ["Assassin", "Tank"],
  },

  Evelynn: {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    difficulty: 10,
    tags: ["Assassin", "Tank"],
  },

  Jayce: {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    difficulty: 7,
    tags: ["Fighter", "Marksman"],
  },
}]

const ordemDeZA = [{
  Jayce: {
    key: "126",
    name: "Jayce",
    title: "the Defender of Tomorrow",
    difficulty: 7,
    tags: ["Fighter", "Marksman"],
  },

  Evelynn: {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    difficulty: 10,
    tags: ["Assassin", "Tank"],
  },

  Eva: {
    key: "28",
    name: "Evelynn",
    title: "the Widowmaker",
    difficulty: 10,
    tags: ["Assassin", "Tank"],
  },

  Alistar: {
    key: "12",
    name: "Alistar",
    title: "the Minotaur",
    difficulty: 7,
    tags: ["Tank", "Support"],
  },
}]



const personagens = Object.values(dataTeste)
describe('teste com ordem alfabética', () => {
  it('ordena de A-Z', () => {
    expect(sortData(personagens, "name", "crescente")).toStrictEqual(ordemDeAZ);
  });

  it('ordena de Z-A', () => {
    expect(sortData(personagens, "name", "decrescente")).toStrictEqual(ordemDeZA);
  });
});


describe('computeStats', () => {
  it('deve ser uma função', () => {
    expect(typeof computeStats).toBe("function");
  });

  it('deve jogar um TypeError quando invocado com tipos de argumentos errados', () => {
    expect(() => computeStats(4)).toThrow(TypeError); //argumento tipo number
    expect(() => computeStats('string')).toThrow(TypeError); //argumento tipo string
    expect(() => computeStats()).toThrow(TypeError); //argumento vazio 
    expect(() => computeStats(null)).toThrow(TypeError); //argumento null
    expect(() => computeStats({})).toThrow(TypeError);
  });

  it('deve retornar media 8.00 para data [7,10,7]', () => {
    expect(computeStats([7,10,7])).toBe('8.00');
  })
})

