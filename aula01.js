// variável pode ter o seu valor alterado e esta disponível en escopos diferentes
let idade = 26;

// variável pode ser alterada em escopos diferentes
const nome = 'Higor';
function soma(num,num2){
  // alterando o valor da variável 
  idade = num+num2
  return num+num2
}
// constants 

// const nome = 'Higor';

// função normal
// function soma(num,num2){
//   return num+num2
// }
// função rápida
// const soma = (num,num2) => {
//     return num + num2
//   }

// console.log(soma(1,2))

// object objeto em JS com chave e valor
const user = {
  name: 'Matheus',
  age: 26,
  city: 'SP'
}
const key = 'name'

// desestruturação  
const { name, ...rest } = user 
// console.log({rest});
// pegar o valor das chaves do objeto
// console.log(Object.keys(user))
// pegar os values do objeto
// console.log(Object.values(user))

const list = [1,2,3,4]
// desestruturação
const [value,,teste] = list 

// console.log({value,teste});