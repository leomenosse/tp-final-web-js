$(document).ready(function() {

    let usuario = JSON.parse(sessionStorage.getItem('dadosUsuario'))
    console.log(usuario)

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

    let frete = document.createElement("div")
    frete.innerHTML = gerarFrete()
    frete.className = "total-frete"
    $(".lista-itens").append(frete)
})