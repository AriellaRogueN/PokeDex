//Variables HTML
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
//LLamando datos desde API
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
//Variables API-Funcion Principal
function addPokemon() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const name = data.name
    console.log(name)
    const ability=data.abilities[0].ability.name
    console.log(ability)
    const otherability=data.abilities[1].ability.name
    console.log(otherability)
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
    figcaption.setAttribute('class','caption');
    const named = document.createTextNode(name)
    const view = document.createElement('p');
    view.setAttribute('data-toggle', 'collapse')
    view.setAttribute('data-target', '#collapsePokemon')
    const more = document.createTextNode('ver más')
    const collapse = document.createElement('div');
    collapse.setAttribute('class','collapse');
    collapse.setAttribute('id', 'collapsePokemon');
    const well = document.createElement('div');
    well.setAttribute('class', 'well');
    const info1 = document.createElement('h5');
    const text1 = document.createTextNode('Tipo:' + type );
    const info2 = document.createElement('h5');
    const text2 = document.createTextNode('Habilidad-1:' + ability);
    const info3 = document.createElement('h5');
    const text3 = document.createTextNode('Habilidad-2:' + otherability);
    const info4 = document.createElement('h5');
    const text4 = document.createTextNode('Experiencia:' + experience);


    //agregando elementos a sus padres.
    insert.appendChild(figure);
    view.appendChild(more)
    collapse.appendChild(well)
    figure.appendChild(newImage);
    figure.appendChild(figcaption);
    figcaption.appendChild(named);
    insert.appendChild(view);
    insert.appendChild(collapse);
    info1.appendChild(text1);
    well.appendChild(info1);
    info2.appendChild(text2);
    well.appendChild(info2);
    info3.appendChild(text3);
    well.appendChild(info3);
    info4.appendChild(text4);
    well.appendChild(info4);
};
    


    
             