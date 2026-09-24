// let nome = 'Maiara' // string
// let idade = 28 // int
// let altura = 1.57 // float

// console.log(`Meu nome é ${nome}, tenho ${idade} anos e minha altura é ${altura}.`)

const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')
const contadorTexto = document.getElementById('contador')

const btnTexto = document.getElementById('btnTexto')
const btnCor = document.getElementById('btnCor')
const btnFundo = document.getElementById('btnFundo')
const btnDestaque = document.getElementById('btnDestaque')
const btnFonte = document.getElementById('btnFonte')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnRemover = document.getElementById('btnRemover')
const btnContador = document.getElementById('btnContador')

btnTexto.addEventListener('click', function(){
    paragrafo.textContent = 'Texto alterado com sucesso!'
})

btnCor.addEventListener('click', function(){
    paragrafo.style.color = "purple"
})

btnFundo.addEventListener('click', function(){
    caixa.style.backgroundColor = "#af459d"
})

btnDestaque.addEventListener('click', function(){
    caixa.classList.toggle('destaque')
})

btnFonte.addEventListener('click', function(){
    titulo.style.fontSize = "40px"
    paragrafo.style.fontSize = "20px"
    paragrafo.style.fontWeight = "bold"
})

btnAdicionar.addEventListener('click', function(){
    const itemNovo = document.createElement('li')
    itemNovo.textContent = 'Item ' + (lista.children.length + 1)
    lista.appendChild(itemNovo)
})

btnRemover.addEventListener('click', function(){
    if(lista.lastElementChild){
        lista.lastElementChild.remove()
    }
})
let cliques = 0
btnContador.addEventListener('click', function(){
    cliques = cliques + 1
    contadorTexto.textContent = cliques
})
