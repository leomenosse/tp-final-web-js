let carrinho = [] //armazena objetos que contém o id do item e a quantidade

$(".botaoComprar").click(function(){
    let estaNoCarrinho = false

    carrinho.forEach(item => {
        if(item.id == this.name){
            estaNoCarrinho = true
            item.qtd++
        }
    });

    if(!estaNoCarrinho){
        let item = {
            "id": this.name,
            "qtd": 1
        }
        carrinho.push(item)
    }

    console.log(carrinho)
})

$(".finalizar").click(function(){
    //armazenamento dos dados do carrinho na sessão
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
})