import { sortData } from '../src/data.js';


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





