const form = document.getElementById("search-form");
const searchPokemon = document.getElementById("pokemon-search");
const image = document.getElementById("image");
const info = document.getElementById("info");
let searchedPokemon;

form.addEventListener('submit', function (e) {

    e.preventDefault();
    info.innerHTML = "";
    searchedPokemon = searchPokemon.value;
    getPokemon();
});

function getPokemon() {
    const pokemonRequest = new XMLHttpRequest();
    pokemonRequest.open('GET', `https://pokeapi.co/api/v2/pokemon-species/${searchedPokemon}`);
    pokemonRequest.onload = addPokemon;
    pokemonRequest.onerror = handleError;
    pokemonRequest.send();

}

function handleError() {
    console.log('Se ha presentado un error');
}

function addPokemon() {
    const data = JSON.parse(this.responseText);
    console.log(data);
         const name = data.name
         console.log(name)
         const tipo = data.egg_groups[0].name
         const subtipo = data.egg_groups[1].name
         console.log(tipo)
         console.log(subtipo)
         const habitat = data.habitat.name
         console.log(habitat)
         const captura = data.capture_rate
         console.log(captura)
         const felicidad = data.base_happiness
         console.log(felicidad)

    }
