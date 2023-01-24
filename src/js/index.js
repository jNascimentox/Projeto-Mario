const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;



function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})





/* 

Objetivo 1 - Quando usuarrio clicar no botao de ver trailer, devemos abrir o modal com o video do trailer
    -Passo 1 -  Dar um jeito de pegar o elemento que repsenta o botão na tela usando o JS
    -Passo 2 - Da um jeito de indentificar quando o usuario clicar no botão
    -Passo 3 - Dar um jeito de pegar o elemento da modal no JS
    -Passo 4 - Abrir a modal na tela

Objetivo 2 - Quando o usuario clicar no x devemos fechar a modal
    -Passo 1 - Dar um jeito de pegar o elemento de fechar modal usando JS
    -Passo 2 - Dar um jeito de indetificar quando usuario clicar no x
    -Passo 3 - Fechar a modal
*/