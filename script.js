const changePage = () => {
    let pagina1 = document.getElementById("inicial")
    let pagina2 = document.getElementById("conteudo")
    pagina1.classList.add("hide")
    pagina2.classList.remove("hide")
}

const changeBackPage = () => {
    let pagina1 = document.getElementById("inicial")
    let pagina2 = document.getElementById("conteudo")
    pagina2.classList.add("hide")
    pagina1.classList.remove("hide")
}
document.querySelector(".usuarioAtivo").addEventListener("click", changeBackPage)
document.querySelector(".Gabriel").addEventListener("click", changePage)
document.querySelector(".Renato").addEventListener("click", changePage)
document.querySelector(".Maria").addEventListener("click", changePage)