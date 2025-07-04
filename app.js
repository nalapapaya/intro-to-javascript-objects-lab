const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};
// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58]);
// console.log(game)
game.difficulty = "Hard";

//identifying starter pokemon
const starterPokemon = (pokemon) => pokemon.starter === true;
game.party = pokemon.filter(starterPokemon);
// console.log(game.party);

//not using these
// Getting all pokemon types variety
// const getTypes = (pokemon) => pokemon.map(pokemon => pokemon.type);
// const pokemonTypes = getTypes(pokemon);
// console.log(pokemonTypes);

// Getting all pokemon hp range
// const getHP = (pokemon) => pokemon.map(pokemon => pokemon.hp);
// const pokemonHP = getHP(pokemon);
// console.log(pokemonHP);

// Getting index of desired pokemon by type
// const electricType = (pokemon) => pokemon.type === "electric";
// const electricPokemonID = pokemon.findIndex(electricType);
// console.log(electricPokemonID); //24

// const poisonType = (pokemon) => pokemon.type === "poison";
// const poisonPokemonID = pokemon.findIndex(poisonType);
// console.log(poisonPokemonID); //22

// const psychicType = (pokemon) => pokemon.type === "psychic";
// const psychicPokemonID = pokemon.findIndex(psychicType);
// console.log(psychicPokemonID); //62

// //Getting index of desired pokemon by HP
// const lowerthan50HP = (pokemon) => pokemon.hp <= 50;
// const lowerthan50HPPokemonID = pokemon.findIndex(lowerthan50HP);
// console.log(lowerthan50HPPokemonID);
//until here

//Finding out unique stats for each pokemon
const chosenPokemon = [];
const chosenType = [];
const chosenHP = [];

for (let i = 0; i < pokemon.length; i++) {
  const p = pokemon[i];
  if (!chosenType.includes(p.type) && !chosenHP.includes(p.hp)) {
    chosenPokemon.push(p);
    chosenType.push(p.type);
    chosenHP.push(p.hp);
  }
  if (chosenPokemon.length === 6) {
    break;
  }
}
// console.log(chosenPokemon);

//Adding 3 pokemon to party
game.party.push(chosenPokemon.slice(3, 5));
console.log(game.party);

for (let i = 0; i < game.gyms.length; i++) {
  const g = game.gyms[i];
  if (g.difficulty <= 3) {
    g.completed = true;
  }
}
console.log(game.gyms);

const evolvedPokemon = [pokemon.at(1), pokemon.at(4), pokemon.at(7)];
// console.log(evolvedPokemon)
game.party.splice(0, 3, ...evolvedPokemon);
console.log(game.party);

for (const p of game.party) {
  console.log(p.name);
}

console.log(pokemon.filter(starterPokemon));

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon[50]);
console.log(game.party);

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
  const pokeballItem = game.items.find((item) => item.name === "pokeball");
  pokeballItem.quantity--;
};
game.catchPokemon(pokemon[90]);
console.log(game.items);

for (let i = 0; i < game.gyms.length; i++) {
  const g = game.gyms[i];
  if (g.difficulty <= 6) {
    g.completed = true;
  }
}
console.log(game.gyms);

game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 };
  for (const gym of game.gyms) {
    if (gym.completed) {
      gymTally.completed++;
    } else {
    }
    gymTally.incomplete++;
  }
  console.log(gymTally);
};
game.gymStatus();

game.partyCount = function () {
  return game.party.length;
};

console.log(game.partyCount());

for (let i = 0; i < game.gyms.length; i++) {
  const g = game.gyms[i];
  if (g.difficulty <= 8) {
    g.completed = true;
  }
}
console.log(game.gyms);

console.log(game);
