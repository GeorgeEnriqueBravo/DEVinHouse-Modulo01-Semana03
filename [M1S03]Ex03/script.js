let res = window.document.getElementById("res")

function concatena(array1, array2) {
    let arrayConcatenado = [...array1, ...array2]
    console.log(`${arrayConcatenado}`)
    res.innerHTML += `Function >>> [ ${arrayConcatenado} ] <br>`
}
concatena([1, 2, 3], [4, 5, 6]);


const concatenaArrow = (ar1, ar2) => {
    console.log([...ar1, ...ar2])
    res.innerHTML += `Arrow Function >>> [ ${[...ar1, ...ar2]} ]`
}
concatenaArrow([1, 2, 3], [4, 5, 6]);