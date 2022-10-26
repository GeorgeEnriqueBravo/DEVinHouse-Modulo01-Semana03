const procuraMinMax = (valor) => {

    if (!Array.isArray(valor) || !valor.length) {
        console.log(`Não é possível encontrar"`)
    } else {
        let maior = valor[0]
        let menor = valor[0]

        for (let i = 0; i <= valor.length; i++) {
                if (maior < valor[i]) {
                    maior = valor[i]
                }
                if (menor > valor[i]) {
                    menor = valor[i]
                }
            }
        console.log({ menor, maior })
    }
}




procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47])
procuraMinMax([])
procuraMinMax([1])
procuraMinMax([1, -1])
procuraMinMax(null)
procuraMinMax([-2,-2,-2,-2])
procuraMinMax([20,10, 30])
