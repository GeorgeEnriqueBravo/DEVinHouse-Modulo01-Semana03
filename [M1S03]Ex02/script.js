    let txtNome = window.document.getElementById("txtId")
    let res = window.document.querySelector("div#res")

const mensagemOla = () => {
    let nome = txtNome.value
    res.innerHTML = `Olá, ${nome}!`
}


let btn = window.document.getElementById("btn")
 btn.addEventListener("click", () => {
    let botao = txtNome.value
    res.innerHTML = `Olá, ${botao}!`
 })