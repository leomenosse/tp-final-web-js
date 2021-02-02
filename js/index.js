let menuBar = document.querySelector(".left-menubar")

//preenchendo os itens dinamicamente no menu da esquerda
for(let i = 0; i < 10; i++){
    let item = document.createElement("div")
    item.style.width = "100%"
    item.style.height = "10%"
    item.style.fontWeight = "bold"
 
    item.style.display = "flex"
    item.style.justifyContent = "center"
    item.style.alignItems = "center"
    item.innerHTML = `Item ${i + 1}`

    menuBar.appendChild(item)
}

let content = document.querySelector(".content")
let colors = ["yellow", "green", "olive", "crimson", "white", "purple", "grey", "aquamarine", "seagreen", "palevioletred", "brown", "orange"]

//preenchendo dinamicamente o conteudo principal
for(let i = 0; i < 12; i++){
    let card = document.createElement("div")
    card.className = "card"
    card.style.backgroundColor = colors[i]
    card.style.borderRadius = "5px"
    card.style.padding = "20px 0"
    card.style.fontWeight = "bold"
    
    card.style.display = "flex"
    card.style.justifyContent = "center"
    card.style.alignItems = "center"
    card.innerHTML = `Item ${i + 1}`

    content.appendChild(card)
}