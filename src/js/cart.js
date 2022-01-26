import {db} from "./cartDB.js"


const cart = class cart{
    
    static createCart(products){
    const cart = document.querySelector(".cart-body")
    cart.innerHTML = ""
    products.forEach(product=>{

    const li = document.createElement('li');
    li.classList.add('cart-item')

    const img = document.createElement('img');
    img.classList.add('cart-item-img')

    const h3 = document.createElement('h3');
    h3.classList.add('cart-item-name')

    const p = document.createElement('p');
    p.classList.add('cart-item-price')

    const span = document.createElement('span');
    p.classList.add('cart-item-category')

    const button = document.createElement('button')
    button.classList.add('cart-item-removeButton')

    
    img.src = product.imagem
    h3.innerText = product.nome;
    p.innerText = this.numberToString(product.preco);
    span.innerText = product.categoria;
    button.innerText = "x"
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(button)
    cart.appendChild(li)

    button.addEventListener("click", () => this.removeCart(product))
    })
    
    const div1 = document.createElement('div')
    div1.classList.add('cart-div-quantity')

    const p1 = document.createElement('p');
    const span1 = document.createElement('span');

    const div2 = document.createElement('div')
    div2.classList.add('cart-div-totalPrice')

    const p2 = document.createElement('p');
    const span2 = document.createElement('span');

    span1.innerText = "Quantidade"
    p1.innerText = products.length
    span2.innerText = "Total"
    let total = this.calculatePrice(products)
    p2.innerText = this.numberToString(total)
    
    div1.appendChild(span1)
    div1.appendChild(p1)
    cart.appendChild(div1)
    div2.appendChild(span2)
    div2.appendChild(p2)
    cart.appendChild(div2)
}

    static addCart(product){
    db.cart.push(product)
    this.createCart(db.cart)
}

    static removeCart(product){
    let index = db.cart.indexOf(product)
    db.cart.splice(index,1)
    this.createCart(db.cart)
}

    static calculatePrice(products){
    let total = 0
    products.forEach(product=>{
        total += product.preco
    })
    return total
}
    static numberToString(value){
    let holder = value.toString()
    let string = "R$ " + holder.replace(/\./g, ',')
    if(string.includes(',')){
        string += "0"
    }else{
        string += ",00"
    }
    return(string)
}
}

export {cart}