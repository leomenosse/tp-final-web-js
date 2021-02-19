let categoriasEscolhidas = []

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
        exibirProdutos(produtosDeCategorias(produtos, categoriasEscolhidas), content)
    }
})

function limparProdutos(){
    $(".card-container").empty() //removendo todos os produtos
}

//recebe uma lista com todos os produtos e uma lista com os nomes
//das categorias escolhidas pelo usuário no checkbox
//retorna uma lista com os produtos daquelas categorias
function produtosDeCategorias(produtos, categoriasEscolhidas){
    let produtosEscolhidosPorCategoria = []

    if(categoriasEscolhidas.length > 0){ //se há alguma categoria escolhida
        for(let i = 0; i < produtos.length; i++){
            if(categoriasEscolhidas.includes(produtos[i]["categoria"])){
                produtosEscolhidosPorCategoria.push(produtos[i])
            }
        }
    }

    return produtosEscolhidosPorCategoria
}