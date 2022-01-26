import {Main} from './main.js';

let button             = document.getElementsByClassName('search-btn')[0]
let buttonTodos        = document.getElementById('todos')
let buttonPanificadora = document.getElementById('panificadora')
let buttonFrutas       = document.getElementById('frutas')
let buttonBebidas      = document.getElementById('bebidas')
let contextInput       = document.getElementsByClassName('search-txt')[0]

let main = new Main();

async function productsRequest(){
    
    await main.getProducts();
    eventsButtons();
    main.productsDom(main.products);
    
}

function search (){
    main.searchName(main._products, contextInput.value)
    main.productsDom(main._filteredProducts)
}

function searchButton(evt){
    let target = evt.target
    let value = target.innerText
    if(value == 'Todos'){
        this._input = "";
        main.searchType(main._products, this._input)
        main.productsDom(main._filteredProducts)
    }    
}

function searchPanificadora(){
    this._input = "Panificadora";
    main.searchType(main._products, this._input)
    main.productsDom(main._filteredProducts)
}

function searchFrutas(){
    this._input = "Frutas";
    main.searchType(main._products, this._input)
    main.productsDom(main._filteredProducts)
}

function searchBebidas(){
    this._input = "Bebidas";
    main.searchType(main._products, this._input)
    main.productsDom(main._filteredProducts)
}

function activeSearch(){
    main.searchName(main._products, contextInput.value)
    main.productsDom(main._filteredProducts)
}

function eventsButtons(){
    
    button.addEventListener('click', search)
    buttonTodos.addEventListener('click', searchButton)
    buttonPanificadora.addEventListener('click', searchPanificadora)
    buttonFrutas.addEventListener('click', searchFrutas)
    buttonBebidas.addEventListener('click', searchBebidas)
    contextInput.addEventListener('keyup', activeSearch)
}
productsRequest();
