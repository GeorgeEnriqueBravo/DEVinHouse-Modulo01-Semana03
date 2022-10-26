const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };

//////////////////////////////////////////////
// Função normal
function destructuring(pessoa){
    const { nome, idade, profissao } = pessoa

    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`
  }

console.log(destructuring(pessoa))

//////////////////////////////////////////////
// Função Arrow
const destructArrow = ({ nome, idade, profissao }) => `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`

const string = (destructArrow(pessoa))
console.log(string)
