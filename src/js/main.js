import {SearchController} from './search.js';
import {cart} from "./cart.js";

const Main = class Main{
    constructor(products){
        this._products = products;
        this._filteredProducts = [];
        this._input = [];
    }

    set products(newArray) {
        this._products = newArray
    }
    
    get products(){
        return this._products
    }

    set filteredProducts(newArray) {
        this._filteredProducts = newArray
    }

    async getProducts(){

        await fetch("https://kenzie-food-api.herokuapp.com/product")
        .then(response => response.json())
        .then(data => this._products = data)
 
    }

    newInput(newInput) {
        this._input = newInput
    }

    cleanFilter(){
        this._filteredProducts = [];
    }

    numberToString(value){
        let holder = value.toString()
        let string = "R$ " + holder.replace(/\./g, ',')
        if(string.includes(',')){
            string += "0"
        }else{
            string += ",00"
        }
        return(string)
    }

    searchName(data, context){
        this._filteredProducts = SearchController.filterName(data, context)
    }

    searchType(data, context){
        this._filteredProducts = SearchController.filterType(data, context)
    }

    productsDom(data){
        let section = document.getElementsByClassName('products')[0]
        section.innerHTML = "";

        data.forEach(product => {
            let card = document.createElement('article')
            let img = document.createElement('img')
            let li = document.createElement('li')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            let div = document.createElement('div')
            let span = document.createElement('span')
            let button = document.createElement('button')
            let i = document.createElement('i')

            card.classList.add('card')
            section.appendChild(card)

            img.src = product.imagem
            card.appendChild(img)

            if(product.categoria === 'Panificadora'){
                li.innerHTML = `&#x1F956 ${product.categoria}`
            }else if(product.categoria === 'Frutas'){
                li.innerHTML = `&#x1F34E ${product.categoria}`
            }else if(product.categoria === 'Bebidas'){
                li.innerHTML = `&#x1F377 ${product.categoria}`
            }

            card.appendChild(li)

            h3.innerText = product.nome
            card.appendChild(h3)

            p.innerText = product.descricao
            card.appendChild(p)

            div.classList.add('div-price')
            card.appendChild(div)

            span.classList.add('price')
            let priceHolder = this.numberToString(product.preco)
            span.innerText = priceHolder
            div.appendChild(span)

            button.classList.add('btn-buy')
            div.appendChild(button)

            i.classList.add('fas')
            i.classList.add('fa-cart-plus')
            button.appendChild(i)
            button.addEventListener("click", () => cart.addCart(product))
            
        });

    }
    
}

export {Main}