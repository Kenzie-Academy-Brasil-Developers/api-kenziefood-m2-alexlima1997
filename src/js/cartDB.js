let local = JSON.parse(localStorage.getItem("cartArray"))

if (!local){
    local = []
}
const db = {
    cart:local
}


export {db}