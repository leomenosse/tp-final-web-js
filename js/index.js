let menuBar = document.querySelector(".left-menubar")
let content = document.querySelector(".card-container")

function getCategoriasUnicas(produtos){
    let categorias = []
    
    for (const produto of produtos) {
        categorias.push(produto["categoria"])
    }
    return [...new Set(categorias)]
}
let categoriasUnicas = getCategoriasUnicas(produtos)

//preenchendo os itens dinamicamente no menu da esquerda
for(let i = 0; i < categoriasUnicas.length; i++){
    let item = document.createElement("div")
    item.style.width = "100%"
    item.style.height = "10%"
    item.style.fontWeight = "bold"
 
    item.style.display = "flex"
    item.style.justifyContent = "center"
    item.style.alignItems = "center"
    item.innerHTML = categoriasUnicas[i]

    menuBar.appendChild(item)
}


//preenchendo dinamicamente o conteudo principal
for(let i = 0; i < produtos.length; i++){
    let card = document.createElement("div")
    card.className = "card"
    
    //card.innerHTML = produtos[i]["nome"] + "</br>"
    
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