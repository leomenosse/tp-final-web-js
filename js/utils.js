function formatPrice(preco) {
    return preco.toFixed(2).toString().replace(".", ",")
}

function findProduto(id, produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            return produtos[i]
        }
    }
    return null
}

function gerarFrete() {
    let frete = Math.floor(Math.random() * 10 + 1)

    return `Tempo de frete: entre ${frete} e ${frete + 3} dias`
}