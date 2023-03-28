const page1 = document.getElementById("page")
const page2 = document.getElementById("page2")
const biscoito = document.getElementById("biscoito")
const botao = document.getElementById("botao")

biscoito.addEventListener('click', () => {
    page1.setAttribute('style', 'display:none;')
    page2.setAttribute('style', 'display:flex;')

})

botao.addEventListener('click', () => {
    location.reload()
})





