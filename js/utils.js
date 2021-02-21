function formatPrice(preco){
    return preco.toFixed(2).toString().replace(".", ",")
}
function findProduto(id, produtos){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id == id){
            return produtos[i]   
        }
    }
    return null
}