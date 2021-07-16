import { sortData, computeStats, filterDataNome } from '../src/data.js';

const personagens = [
  {
   key: "28",
   name: "Evelynn",
   title: "the Widowmaker",
   difficulty: 10,
   tags: ["Assassin", "Tank"],
 },

 {
   key: "126",
   name: "Jayce",
   title: "the Defender of Tomorrow",
   difficulty: 7,
   tags: ["Fighter", "Marksman"],
 },

 {
   key: "28",
   name: "Evelynn",
   title: "the Widowmaker",
   difficulty: 10,
   tags: ["Assassin", "Tank"],
 },

 {
   key: "12",
   name: "Alistar",
   title: "the Minotaur",
   difficulty: 7,
   tags: ["Tank", "Support"],
 },
]

const ordemDeAZ = [
 {
   key: "12",
   name: "Alistar",
   title: "the Minotaur",
   difficulty: 7,
   tags: ["Tank", "Support"],
 },

 {
   key: "28",
   name: "Evelynn",
   title: "the Widowmaker",
   difficulty: 10,
   tags: ["Assassin", "Tank"],
 },

 {
   key: "28",
   name: "Evelynn",
   title: "the Widowmaker",
   difficulty: 10,
   tags: ["Assassin", "Tank"],
 },

 {
  key: "126",
  name: "Jayce",
  title: "the Defender of Tomorrow",
  difficulty: 7,
  tags: ["Fighter", "Marksman"],
},
]
  
const ordemDeZA = [
{
  key: "126",
  name: "Jayce",
  title: "the Defender of Tomorrow",
  difficulty: 7,
  tags: ["Fighter", "Marksman"],
},

{
  key: "28",
  name: "Evelynn",
  title: "the Widowmaker",
  difficulty: 10,
  tags: ["Assassin", "Tank"],
},

{
  key: "28",
  name: "Evelynn",
  title: "the Widowmaker",
  difficulty: 10,
  tags: ["Assassin", "Tank"],
},

{
  key: "12",
  name: "Alistar",
  title: "the Minotaur",
  difficulty: 7,
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

//TESTE SORT
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


 