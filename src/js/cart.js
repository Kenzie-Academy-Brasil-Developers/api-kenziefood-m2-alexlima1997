import {db} from "./cartDB.js"


const cart = class cart{
    
    static createCart(products){
    const cart = document.querySelector(".cart-body")
    const cartQtd = document.querySelector(".cart-body-quantity")
    cart.innerHTML = ""
    cart.style.backgroundColor = 'var(--grey-1)'
    products.forEach(product=>{
    
    const article = document.createElement('article');
    const img = document.createElement('img');
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    const span = document.createElement('span')
    const button = document.createElement('button')
    const i = document.createElement('i')
    
    img.src = product.imagem
    h4.innerText = product.nome;
    span.innerText = this.numberToString(product.preco);
    p.innerText = product.categoria;
    i.classList.add('fa')
    i.classList.add('fa-trash')

    article.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(span);
    article.appendChild(div);
    button.appendChild(i)
    article.appendChild(button);
    cart.appendChild(article)

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
    
    cartQtd.innerHTML = ""
    div1.appendChild(span1)
    div1.appendChild(p1)
    cartQtd.appendChild(div1)
    div2.appendChild(span2)
    div2.appendChild(p2)
    cartQtd.appendChild(div2)
}

    static addCart(product){
    db.cart.push(product)
    localStorage.setItem("cartArray", JSON.stringify(db.cart))
    this.createCart(db.cart)
}

    static removeCart(product){
    let index = db.cart.indexOf(product)
    db.cart.splice(index,1)
    localStorage.setItem("cartArray", JSON.stringify(db.cart))
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