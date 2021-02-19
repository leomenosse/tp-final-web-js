let menuBar = document.querySelector(".left-menubar")
let filtroCategorias = document.querySelector("#categorias")
let content = document.querySelector(".card-container")

function getCategorias(produtos) {
    let categorias = []

    for (const produto of produtos) {
        categorias.push(produto["categoria"])
    }
    return [...new Set(categorias)]
}
let categorias = getCategorias(produtos)

//preenchendo os itens dinamicamente no menu da esquerda
for(let i = 0; i < categorias.length; i++){
    let categoria = document.createElement("input")
    categoria.type = "checkbox" 
    categoria.value = categorias[i]
    categoria.id = categorias[i]
    categoria.name = categorias[i]
    
    let label = document.createElement("label")
    label.setAttribute("for", categorias[i])
    label.innerHTML = categorias[i]

    let lineBreak = document.createElement("br")

    filtroCategorias.appendChild(categoria)
    filtroCategorias.appendChild(label)
    filtroCategorias.appendChild(lineBreak)
}


//preenchendo dinamicamente o conteudo principal
for (let i = 0; i < produtos.length; i++) {
    let card = document.createElement("div")
    card.className = "card"

    let img = document.createElement("img")
    img.className = "fotoProduto"
    img.src = produtos[i]["imgPath"]

    let nome = document.createElement("div")
    nome.className = "nome"
    nome.innerHTML = produtos[i]["nome"]

    let preco = document.createElement("p")
    preco.className = "preco"
    preco.innerHTML = `R$${produtos[i]["preco"].toFixed(2)}`

    let comprar = document.createElement("button")
    comprar.className = "botaoComprar"
    comprar.innerHTML = "Adicionar ao carrinho"

    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(preco)
    card.appendChild(comprar)

    content.appendChild(card)
}