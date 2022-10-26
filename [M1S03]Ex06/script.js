function verificaPalindromo(texto) {

    if (typeof texto !== "string") {
        console.log('Desculpe, isso não é um texto válido!')
        return false
    }

    for ( let i = 0; i < texto.length; i++) {
        if (texto[i] !== texto[(texto.length - 1) - i]) {
            console.log("Não é um palíndromo")
            return false
        }
        console.log(texto[i])
        console.log(texto[(texto.length - 1) - i])
    }
    console.log("É um palíndromo")
    return true
}

const teste1 = verificaPalindromo("ana");
console.log(teste1)

const teste2 = verificaPalindromo("julia");
console.log(teste2)

const teste3 = verificaPalindromo(3003);
console.log(teste3)

////////////////////////////////////////////////////////
// Função de botão por onclick
function verificar() {
    let texto = window.document.getElementById("iTxt")
    let res = window.document.getElementById("res")

    if (verificaPalindromo(texto.value)) {
        res.innerHTML = `O texto "${texto.value}" é um palíndromo.`
    } else {
        res.innerHTML = `O texto "${texto.value}" <strong>não</strong> é um palíndromo.`
    }
}

///////////////////////////////////////////////////////
// Função de botão por addEventListener
let botao = window.document.getElementById("botao")
botao.addEventListener("click", function() {
    let texto = window.document.getElementById("iTxt")
    let res = window.document.getElementById("res")

    if (verificaPalindromo(texto.value)) {
        res.innerHTML = `O texto "${texto.value}" é um palíndromo.`
    } else {
        res.innerHTML = `O texto "${texto.value}" <strong>não</strong> é um palíndromo.`
    }
})



