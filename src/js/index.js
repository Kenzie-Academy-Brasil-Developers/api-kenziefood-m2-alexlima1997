import {Main} from './main.js';

let main = new Main();

async function productsRequest(){
    
    await main.getProducts();
    main.productsDom();

}
productsRequest();