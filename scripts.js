/*

Variaveis = É um pedacinho de memória que eu posso guardar o que eu quiser.
Funçao = É um pedacinho de código ue só é executado quando chamado.

*/
let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.Starbucks')

function trocarACor(cor){
    circulo.style.background = cor
}

function trocaimagem(img){
    imagem.src = img
}

