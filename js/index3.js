$(document).ready(function() {

    let usuario = JSON.parse(sessionStorage.getItem('dadosUsuario'))
    console.log(usuario)

    setResumoItens()

    //criação da tabela para exibição dos dados do usuário
    let table = document.createElement("table")

    //linha nome
    let headerNome = document.createElement("tr")

    let trNome = document.createElement("th")
    trNome.innerHTML = "Nome"
    headerNome.appendChild(trNome)

    let valorNome = document.createElement("th")
    valorNome.innerHTML = usuario[0].nome
    headerNome.appendChild(valorNome)

    //linha cpf
    let headerCpf = document.createElement("tr")

    let trCpf = document.createElement("th")
    trCpf.innerHTML = "CPF"
    headerCpf.appendChild(trCpf)

    let valorCpf = document.createElement("th")
    valorCpf.innerHTML = usuario[0].cpf
    headerCpf.appendChild(valorCpf)

    //linha email
    let headerEmail = document.createElement("tr")

    let trEmail = document.createElement("th")
    trEmail.innerHTML = "E-mail"
    headerEmail.appendChild(trEmail)

    let valorEmail = document.createElement("th")
    valorEmail.innerHTML = usuario[0].email
    headerEmail.appendChild(valorEmail)

    //linha rua
    let headerRua = document.createElement("tr")

    let trRua = document.createElement("th")
    trRua.innerHTML = "Rua"
    headerRua.appendChild(trRua)

    let valorRua = document.createElement("th")
    valorRua.innerHTML = usuario[0].rua
    headerRua.appendChild(valorRua)

    //linha bairro
    let headerBairro = document.createElement("tr")

    let trBairro = document.createElement("th")
    trBairro.innerHTML = "Bairro"
    headerBairro.appendChild(trBairro)

    let valorBairro = document.createElement("th")
    valorBairro.innerHTML = usuario[0].bairro
    headerBairro.appendChild(valorBairro)

    //linha numero
    let headerNumero = document.createElement("tr")

    let trNumero = document.createElement("th")
    trNumero.innerHTML = "Numero"
    headerNumero.appendChild(trNumero)

    let valorNumero = document.createElement("th")
    valorNumero.innerHTML = usuario[0].numero
    headerNumero.appendChild(valorNumero)

    //linha cep
    let headerCep = document.createElement("tr")

    let trCep = document.createElement("th")
    trCep.innerHTML = "CEP"
    headerCep.appendChild(trCep)

    let valorCep = document.createElement("th")
    valorCep.innerHTML = usuario[0].cep
    headerCep.appendChild(valorCep)

    //linha cidade
    let headerCidade = document.createElement("tr")

    let trCidade = document.createElement("th")
    trCidade.innerHTML = "Cidade"
    headerCidade.appendChild(trCidade)

    let valorCidade = document.createElement("th")
    valorCidade.innerHTML = usuario[0].cidade
    headerCidade.appendChild(valorCidade)

    //linha estado
    let headerEstado = document.createElement("tr")

    let trEstado = document.createElement("th")
    trEstado.innerHTML = "Estado"
    headerEstado.appendChild(trEstado)

    let valorEstado = document.createElement("th")
    valorEstado.innerHTML = usuario[0].estado
    headerEstado.appendChild(valorEstado)

    table.appendChild(headerNome)
    table.appendChild(headerCpf)
    table.appendChild(headerEmail)
    table.appendChild(headerRua)
    table.appendChild(headerBairro)
    table.appendChild(headerNumero)
    table.appendChild(headerCep)
    table.appendChild(headerCidade)
    table.appendChild(headerEstado)

    $(".lista-dados").append(table)
    
    let produtosCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    
    if (produtosCarrinho != null || produtosCarrinho.length != 0) {
        let frete = document.createElement("div")
        frete.innerHTML = gerarFrete()
        frete.className = "total-frete"
        $(".lista-itens").append(frete)
    }

    $(".botaoVoltar").click(function(){
        sessionStorage.removeItem('carrinho')
        sessionStorage.removeItem('dadosUsuario')
    })
})

function setResumoItens(){
    let produtosCarrinho = JSON.parse(sessionStorage.getItem('carrinho'))
    let totalCompra = 0
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
        qtd.innerHTML = produtosCarrinho[i].qtd

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
