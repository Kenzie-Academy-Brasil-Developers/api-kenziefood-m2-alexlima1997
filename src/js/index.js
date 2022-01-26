import {Main} from './main.js';

let button   = document.getElementsByClassName('search-btn')[0]


let main = new Main();

async function productsRequest(){
    
    await main.getProducts();
    console.log(main.products)
    searchButton();
    main.productsDom(main.products);
    
}

function search (){

    main.searchAction(main._products)
    main.productsDom(main._filteredProducts)
}

function searchButton(){
    
    button.addEventListener('click', search)
}
productsRequest();
