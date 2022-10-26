// Função normal
function mesclaObjetosHtml(objH1, objH2) {
    return {...objH1, ...objH2}
}
const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const result = mesclaObjetosHtml(objUm, objDois)
console.log(result)

////////////////////////////////////////////
//Arrow Function
const mesclaObjetos = (obj1, obj2) => ({...obj1, ...obj2 })

const objUmArr = { a: 1, b: 2 };
const objDoisArr = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUmArr, objDoisArr);
console.log(novoObjeto);

////////////////////////////////////////////
function carregar() {
    let res = document.getElementById("res")
    res.innerHTML = mesclaObjetosHtml(objUm, objDois)
    res.innerHTML = `${result}`

    let texto = ""
    
    texto += `{ `
    for (const key in result) {
        texto += `${key}: ${result[key]}, `
    }
    texto += `}`
    res.innerHTML = texto

    // Feito por JSON
    let res2 = document.getElementById("res2")
    let texto2 = JSON.stringify(result);
    res2.innerHTML = texto2
}
