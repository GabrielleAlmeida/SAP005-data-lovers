import {
  sortPokemonsByNameAscending,
  sortPokemonsByNameDescending,
  sortPokemonsByNumAscending,
  sortPokemonsByNumDescending,
  selectType,
  selectResistant,
  selectWeaknesses,
  search,
  getPercentage,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

//console.log(selectType, selectResistant, selectWeaknesses, search, data)

const selectOrderly = document.querySelector("#select-orderly");
const selectFilterType = document.querySelector("#select-filter-type");
const selectFilterResistant = document.querySelector(
  "#select-filter-resistant"
);
const selectFilterWeaknesses = document.querySelector(
  "#select-filter-weaknesses"
);
const inputSearch = document.querySelector("#input-search");

displayCards(data.pokemon);

function displayCards(pokemons) {
  let printCards = document.querySelector("#print-cards");
  printCards.innerHTML = "";

  const totalOfPokemons = data.pokemon.length;
  const filteredPokemons = pokemons.length;
  const filteredQuantityElement = document.getElementById("filtered-quantity");
  filteredQuantityElement.innerHTML = "";

  if (filteredPokemons < totalOfPokemons) {
    const filteredQuantityText = document.createElement("p");
    filteredQuantityText.innerText = `Foram encontrados ${filteredPokemons} de ${totalOfPokemons} pokémons (${getPercentage(
      filteredPokemons,
      totalOfPokemons
    ).toFixed(2)}%).`;
    filteredQuantityElement.append(filteredQuantityText);
  }

  for (let pokemon of pokemons) {
    const div = document.createElement("div");

    const image = document.createElement("img");
    image.src = pokemon.img;
    div.appendChild(image);

    const name = document.createElement("h2");
    name.innerHTML = pokemon.name;
    div.appendChild(name);

    const number = document.createElement("p");
    number.innerHTML = pokemon.num;
    div.appendChild(number);

    const type = document.createElement("p");
    type.innerHTML = pokemon.type;
    div.appendChild(type);
    //falta resistant e weaknesses
    printCards.appendChild(div);
  }
}

selectOrderly.addEventListener("change", () => {
  const orderly = selectOrderly.value;
  if (orderly === "NameAscending") {
    sortPokemonsByNameAscending(data.pokemon);
    displayCards(data.pokemon);
  } else if (orderly === "NameDescending") {
    sortPokemonsByNameDescending(data.pokemon);
    displayCards(data.pokemon);
  } else if (orderly === "NumAscending") {
    sortPokemonsByNumAscending(data.pokemon);
    displayCards(data.pokemon);
  } else if (orderly === "NumDescending") {
    sortPokemonsByNumDescending(data.pokemon);
    displayCards(data.pokemon);
  }
});

selectFilterType.addEventListener("change", () => {
  const filterType = selectFilterType.value;
  const pokemonType = selectType(filterType, data.pokemon);
  displayCards(pokemonType);
});

selectFilterResistant.addEventListener("change", () => {
  const filterResistant = selectFilterResistant.value;
  const pokemonResistant = selectResistant(filterResistant, data.pokemon);
  displayCards(pokemonResistant);
});

selectFilterWeaknesses.addEventListener("change", () => {
  const filterWeaknesses = selectFilterWeaknesses.value;
  const pokemonWeaknesses = selectWeaknesses(filterWeaknesses, data.pokemon);
  displayCards(pokemonWeaknesses);
});
// Falta fazer essa parte!!!
inputSearch.addEventListener("keyup", () => {
  const searchPokemon = inputSearch.value;
  const Pokemon = search(searchPokemon, data.pokemon);
  displayCards(Pokemon);
});

//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
