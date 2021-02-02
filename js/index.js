let menuBar = document.querySelector(".left-menubar")
let content = document.querySelector(".content")

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
    card.style.backgroundColor = "rgba(255,255,255,0.8)"
    card.style.borderRadius = "5px"
    card.style.padding = "20px 0"
    card.style.fontWeight = "bold"
    card.style.minHeight = "300px"
    
    card.style.display = "flex"
    card.style.justifyContent = "center"
    card.style.alignItems = "center"
    
    card.innerHTML = produtos[i]["nome"]

    content.appendChild(card)
}