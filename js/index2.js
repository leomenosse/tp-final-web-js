$(document).ready(function() {

    let produtosCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    let totalCompra = 0

    if (produtosCarrinho == null || produtosCarrinho.length == 0) {
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
            preco.id = `preco${produto.id}`
            preco.innerHTML = `R$${formatPrice(produto.preco)}`

            let qtd = document.createElement("td")
            let qtdInput = document.createElement("input")
            qtdInput.className = "qtdInput"
            qtdInput.type = "number"
            qtdInput.min = "0"
            qtdInput.step = "1"
            // qtdInput.disabled = "true"
            qtdInput.value = produtosCarrinho[i].qtd
            qtdInput.name = produto.id
            qtdInput.style.width = "60px"
            qtd.appendChild(qtdInput)

            let subtotal = document.createElement("td")
            subtotal.id = `subtotal${produto.id}`
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

    $(".qtdInput").change(atualizarQtd)
    $(".qtdInput").keyup(atualizarQtd)

    $(".botao").click(function() {
        dadosUsuario = []
        let camposVazios = false

        let user = {
            "nome": document.querySelector("#nome").value,
            "cpf": document.querySelector("#cpf").value,
            "email": document.querySelector("#email").value,
            "rua": document.querySelector("#rua").value,
            "bairro": document.querySelector("#bairro").value,
            "numero": document.querySelector("#numero").value,
            "cep": document.querySelector("#cep").value,
            "cidade": document.querySelector("#cidade").value,
            "estado": document.querySelector("#estado").value
        }

        for (const key in user) {
            if (Object.hasOwnProperty.call(user, key)) {
                const element = user[key];
                if(element == ""){
                    camposVazios = true
                }
            }
        }
    
        if(produtosCarrinho == null || produtosCarrinho.length == 0){
            alert("Adicione algum item no carrinho para concluir sua compra.")
            $(".botao a").prop("href", "#")
        }
        else if(camposVazios){
            alert("Todos os campos do formulário devem ser preenchidos.")
            $(".botao a").prop("href", "#")
        }
        else{
            dadosUsuario.push(user)
            //armazenamento dos dados do usuário na sessão
            sessionStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario))
            $(".botao a").prop("href", "index3.html")
        }
    })

})

function atualizarQtd(){
    let id = this.name
    let precoField = document.querySelector(`#preco${id}`)
    let subtotalField = document.querySelector(`#subtotal${id}`)
    let totalField = document.querySelector(".total-compra")

    if(this.value == 0){
        let produto = findProduto(id, produtos)
        let remover = confirm(`Deseja remover ${produto.nome} do carrinho?`)
        if(remover){
            removerDoCarrinho(id)
            location.reload()
        }
        else{
            this.value = 1
        }
    }

    let preco = parseFloat(precoField.innerHTML.replace("R$", "").replace(",","."))
    let subtotalAntigo = parseFloat(subtotalField.innerHTML.replace("R$", "").replace(",","."))
    let totalAntigo = parseFloat(totalField.innerHTML.replace("R$", "").replace(",",".")) - subtotalAntigo

    let subtotalNovo = this.value * preco
    let totalNovo = totalAntigo + subtotalNovo

    subtotalField.innerHTML = `R$${formatPrice(subtotalNovo)}`
    totalField.innerHTML = `R$${formatPrice(totalNovo)}`
}

//remove um item do carrinho
function removerDoCarrinho(id){
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    console.log(carrinho)

    if(carrinho != null && carrinho.length > 0){
        for(let i = 0; i < carrinho.length; i++){
            if(carrinho[i].id == id){
                carrinho.splice(i, 1)
            }
        }
    }
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
}
