import { pokemons } from "./data.js"


const inp = document.querySelector(".inp")
const sort = document.querySelector(".sort")
const seach = document.querySelector(".seach")
const cardsBox = document.querySelector('.cards-box')

let cards = pokemons

function ABD() {
    cardsBox.innerHTML = ""
    cards.map((pokemon) => {
        cardsBox.innerHTML += `
        <div class="card">
            <h2 class="card-name">${pokemon.name}</h2>
            <img src="${pokemon.img}" alt="" class="card-img">
            <p class="card-type">${pokemon.type}</p>
            <p class="card-count"> Candy count:${pokemon.candy_count}</p>
            <p class="card-weight">${pokemon.weight}</p>
            <p class="card-weaknesses">${pokemon.weaknesses}</p>
        </div>
    `

    })
}
ABD()


seach.addEventListener('click', () => {

    let value = inp.value.toLowerCase()
    const filteredCards = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value))

    cards = filteredCards
    ABD()
})



sort.addEventListener('click',()=> {
    cards.sort((a,b)=>
        a.name.localeCompare(b.name)
    )
       ABD()


})






































