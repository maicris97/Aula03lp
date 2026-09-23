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