import { example } from './data.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const champsData = data.data;

let arrayChamps = [];
let index;
for (index in champsData) {
  arrayChamps.push(champsData[index]);
}

arrayChamps.map(function(){
  
})


console.log(arrayChamps);
//console.log(Object.keys(info));
