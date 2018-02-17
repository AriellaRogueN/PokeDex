const form = document.getElementById("search-form");
const searchPokemon = document.getElementById("pokemon-search");
const insert = document.getElementById("insertPokemon");
let searchedPokemon;

form.addEventListener('submit', function (e) {

    e.preventDefault();
    insert.innerHTML = "";
    searchedPokemon = searchPokemon.value;
    getPokemon();
    
});

function getPokemon() {
    const pokemonRequest = new XMLHttpRequest();
    pokemonRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
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
    const image = data.sprites.front_default
    console.log(image)
    const type = data.types[0].type.name
    console.log(type)
    const experience = data.base_experience
    console.log(experience)
    const weight= data.weight
    console.log(weight)
    

    //creando elementos.

    const figure = document.createElement('figure');
    const newImage = document.createElement('img')
    newImage.setAttribute('src', image);
    newImage.setAttribute('class', 'pknImg')
    const figcaption = document.createElement('figcaption')
    const named = document.createTextNode(name)

    //agregando elementos a sus padres.
    insert.appendChild(figure);
    figure.appendChild(newImage);
    figure.appendChild(figcaption);
    figcaption.appendChild(named);
    
};
    


    
             