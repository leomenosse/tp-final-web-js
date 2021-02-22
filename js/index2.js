$(document).ready(function() {

    let produtosCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    let totalCompra = 0

    if(produtosCarrinho == null || produtosCarrinho.length == 0){
        $(".lista-itens").append("<div>Não há nenhum item no carrinho</div>")
    } else { //há produtos no carrinho

        //criação da tabela para exibição dos produtos do carrinho
        let table = document.createElement("table")
        let header = document.createElement("tr")
        let trProduto = document.createElement("th")
        trProduto.innerHTML = "Produto"
        header.appendChild(trProduto)

        let trPreco = document.createElement("th")
        trPreco.innerHTML = "Preço"
        header.appendChild(trPreco)

        let trQtd = document.createElement("th")
        trQtd.innerHTML = "Quantidade"
        header.appendChild(trQtd)

        let trSubtotal = document.createElement("th")
        trSubtotal.innerHTML = "Subtotal"
        header.appendChild(trSubtotal)

        table.appendChild(header)
        $(".lista-itens").append(table)

        for (let i = 0; i < produtosCarrinho.length; i++) {
            let produto = findProduto(produtosCarrinho[i].id, produtos)

            let linha = document.createElement("tr")
            let nome = document.createElement("td")
            nome.innerHTML = produto.nome

            let preco = document.createElement("td")
            preco.innerHTML = `R$${formatPrice(produto.preco)}`

            let qtd = document.createElement("td")
            qtd.innerHTML = produtosCarrinho[i].qtd

            let subtotal = document.createElement("td")
            subtotal.innerHTML = `R$${formatPrice(produto.preco * produtosCarrinho[i].qtd)}`

            linha.appendChild(nome)
            linha.appendChild(preco)
            linha.appendChild(qtd)
            linha.appendChild(subtotal)
            $("table").append(linha)

            totalCompra += produto.preco * produtosCarrinho[i].qtd
        }

        let totalLabel = document.createElement("div")
        totalLabel.innerHTML = `R$${formatPrice(totalCompra)}`
        totalLabel.className = "total-compra"
        $(".lista-itens").append(totalLabel)

    }
})

$(".botao").click(function() {
    dadosUsuario = []

    dadosUsuario.push({
        "nome": document.querySelector("#nome").value,
        "cpf": document.querySelector("#cpf").value,
        "email": document.querySelector("#email").value,
        "rua": document.querySelector("#rua").value,
        "bairro": document.querySelector("#bairro").value,
        "numero": document.querySelector("#numero").value,
        "cep": document.querySelector("#cep").value,
        "cidade": document.querySelector("#cidade").value,
        "estado": document.querySelector("#estado").value
    })

    //armazenamento dos dados do usuário na sessão
    sessionStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario))
})