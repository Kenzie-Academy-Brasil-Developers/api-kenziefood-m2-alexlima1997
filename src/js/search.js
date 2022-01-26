const SearchController = class SearchController {
    static
    filter(data, value){
        let filteredProducts = [];
        console.log(data)
        data.forEach(product => {
            
            let search = value.toLowerCase();
            let string = product.nome.toLowerCase();
            if(string.includes(search)){
                filteredProducts.push(product)
            }
        });
        return (filteredProducts)
    }
}

export {SearchController}