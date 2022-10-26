// Função normal
function somaTudo(...numeros) {
    let somador = 0
    for (let i = 0; i < numeros.length; i++) {
        somador += numeros[i]
    }
    return somador
}
const resultado = somaTudo(1, 2, 3, 4)
console.log(resultado)

//////////////////////////////////////////////////
// Função Arrow
const somaTudoArr = (...numeros) => {
    let somador = 0
    for (let i = 0; i < numeros.length; i++) {
        somador += numeros[i]
    }
    return somador
}
const result = somaTudoArr(1, 2, 3, 4)
console.log(result)

//////////////////////////////////////////////////
// Função normal com ForEach
function somaTudoFE(...numeros) {
    let somador = 0
    numeros.forEach((element) => {
    somador += element
    });
    return somador
}
const resultFE = somaTudoFE(1, 2, 3, 4)
console.log(resultFE)

//////////////////////////////////////////////////
// Carregando na página HTML
const carregar = () => {
    let res = window.document.getElementById('res')
    let res2 = window.document.getElementById("res2")
    res.innerHTML = `somaTudo(1, 2, 3, 4)`
    res2.innerHTML = `Resultado da soma = ${resultado}`
}