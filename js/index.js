let menuBar = document.querySelector(".left-menubar")
let filtroCategorias = document.querySelector("#categorias")
let filtroPrecos = document.querySelector("#precos")
let content = document.querySelector(".card-container")

function addNoCarrinho(){
    let estaNoCarrinho = false
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho'))

    if(carrinho != null && carrinho.length > 0){
        for(let i = 0; i < carrinho.length; i++){
            if(carrinho[i].id == this.name){
                estaNoCarrinho = true
                carrinho[i].qtd++
            }
        }
        
        if(!estaNoCarrinho){ //se o item não estiver no carrinho, ele é adicionado
            let item = {
                "id": this.name,
                "qtd": 1
            }
            carrinho.push(item)
        }

        sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
    else{
        let item = {
            "id": this.name,
            "qtd": 1
        }
        carrinho = []
        carrinho.push(item)
        sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
}

function getCategorias(produtos) {
    let categorias = []

    for (const produto of produtos) {
        categorias.push(produto["categoria"])
    }
    return [...new Set(categorias)]
}
let categorias = getCategorias(produtos)

//exibição de produtos na tela inicial
//produtos é a lista com os produtos
//content é o container onde os produtos serão exibidos
function exibirProdutos(produtos, content){
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
        comprar.name = produtos[i]["id"]
        comprar.addEventListener("click", addNoCarrinho)
    
        card.appendChild(img)
        card.appendChild(nome)
        card.appendChild(preco)
        card.appendChild(comprar)
    
        content.appendChild(card)
    }
}
exibirProdutos(produtos, content)

//preenchendo os itens dinamicamente no menu da esquerda
for(let i = 0; i < categorias.length; i++){
    let categoria = document.createElement("input")
    categoria.type = "checkbox" 
    categoria.value = categorias[i]
    categoria.id = categorias[i]
    categoria.name = categorias[i]
    categoria.className = "checkbox-categoria"
    
    let label = document.createElement("label")
    label.setAttribute("for", categorias[i])
    label.innerHTML = categorias[i]

    let lineBreak = document.createElement("br")

    filtroCategorias.appendChild(categoria)
    filtroCategorias.appendChild(label)
    filtroCategorias.appendChild(lineBreak)
}

function setFiltroPreco(){
    let inicioIntervalos = []

    for(let i = 0; i < produtos.length; i++){
        let preco = produtos[i]["preco"]      
        inicioIntervalos.push(parseInt(preco / 500) * 500) //adicionando o início do intervalo no set
    }

    //coloca em um Set para eliminar os repetidos e aplica uma ordenação
    inicioIntervalos = [...(new Set(inicioIntervalos))].sort((a, b) => a - b)

    inicioIntervalos.forEach((inicio)=>{
        let preco = document.createElement("input")
        preco.type = "checkbox"
        preco.value = inicio
        preco.id = inicio
        preco.name = inicio
        preco.className = "checkbox-preco"

        let label = document.createElement("label")
        label.setAttribute("for", inicio)
        label.innerHTML = `R$${inicio.toFixed(2)} - R$${(inicio+499.99).toFixed(2)}`

        let lineBreak = document.createElement("br")

        filtroPrecos.appendChild(preco)
        filtroPrecos.appendChild(label)
        filtroPrecos.appendChild(lineBreak)
    })
}
setFiltroPreco()
