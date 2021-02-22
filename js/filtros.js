let categoriasEscolhidas = []
let precosEscolhidos = []

//adiciona ou remove uma categoria à lista de categorias escolhidas
//utilizada para exibição dos produtos das categorias selecionadas pelo usuário
$(".checkbox-categoria").change(function(){
    limparProdutos()
    if(this.checked){
        categoriasEscolhidas.push(this.id)
        console.log("Categoria Adicionada")
    }
    else{
        let indexCategoria = categoriasEscolhidas.indexOf(this.id)
        if(indexCategoria > -1){
            categoriasEscolhidas.splice(indexCategoria, 1)
            console.log("Categoria Removida");
            console.log(categoriasEscolhidas)
        }
    }
    if(categoriasEscolhidas.length == 0){
        exibirProdutos(produtos, content)
    }
    else{
        exibirProdutos(filtrarPorCategoria(produtos, categoriasEscolhidas), content)
    }
})

$(".checkbox-preco").change(function(){
    limparProdutos()
    if(this.checked){
        precosEscolhidos.push(parseFloat(this.id))
    }
    else{
        let indexFaixaPreco = precosEscolhidos.indexOf(parseFloat(this.id))
        if(indexFaixaPreco > -1){
            precosEscolhidos.splice(indexFaixaPreco, 1)
        }
    }
    if(precosEscolhidos.length == 0){
        exibirProdutos(produtos, content)
    }
    else{
        exibirProdutos(filtrarPorPreco(produtos, precosEscolhidos), content)
    }
})

function limparProdutos(){
    const cardContainer = document.querySelector(".card-container")
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.lastChild)
    }
}

//recebe uma lista com todos os produtos e uma lista com os nomes
//das categorias escolhidas pelo usuário no checkbox
//retorna uma lista com os produtos daquelas categorias
function filtrarPorCategoria(produtos, categoriasEscolhidas){
    let produtosFiltradosPorCategoria = []

    for(let i = 0; i < produtos.length; i++){
        if(categoriasEscolhidas.includes(produtos[i]["categoria"])){
            produtosFiltradosPorCategoria.push(produtos[i])
        }
    }

    return produtosFiltradosPorCategoria
}

//recebe uma lista com todos os produtos e uma lista com o início dos intervalos
//de preço escolhidos pelo usuário no checkbox. ex: 500-999.99 -> 500
//retorna uma lista com os produtos naquela faixa de preço
function filtrarPorPreco(produtos, precosEscolhidos){
    let produtosFiltradosPorPreco = []

    for(let i = 0; i < produtos.length; i++){
        let inicioIntervalo = parseInt(produtos[i]["preco"] / 500) * 500
        if(precosEscolhidos.includes(inicioIntervalo)){
            produtosFiltradosPorPreco.push(produtos[i])
        }
    }

    return produtosFiltradosPorPreco
}