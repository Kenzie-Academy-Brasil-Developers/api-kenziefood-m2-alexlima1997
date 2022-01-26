const SearchController = class SearchController {
    static
    filterName(data, value){
        let filteredProducts = [];
        data.forEach(product => {
            
            let search = value.toLowerCase();
            let string = product.nome.toLowerCase();
            if(string.includes(search)){
                filteredProducts.push(product)
            }
        });
        return (filteredProducts)
    }

    static
    filterType(data, value){
        let filteredProducts = [];
        data.forEach(product => {
            
            let search = value.toLowerCase();
            let string = product.categoria.toLowerCase();
            if(string.includes(search)){
                filteredProducts.push(product)
            }
        });
        return (filteredProducts)
    }
}

export {SearchController}