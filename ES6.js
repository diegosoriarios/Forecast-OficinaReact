//ES6, ECMAScript 6 ou ES2015, é uma especificação de linguagem Javascript
//CONST & LET

//ARROW FUNCTION
// ES5
var boasVindas = function(nome) {
    return "Seja bem-vindo, " + nome;
}
 
// ES6
const boasVindas = nome => `Seja bem-vindo, ${nome}`;
boasVindas("Luiz"); // Seja bem-vindo, Luiz



//FOREACH => Utilizamos para quando precisamos passar por todos os nossos itens de um Array.
var nomes = ['fulano','sicrano','beltrano']

nomes.push('jose')

nomes.forEach((nome) => {
  console.log(nome)
})

//MAP => Usado para quando precisamos não somente passar por todos os itens,
//       mas fazer algo com eles.
var numeros = [1,2,3,4,5]
var dobro = numeros.map(function(numero){
    return numero * 2
});
 
console.log(dobro)

//FILTER => Filtra itens de uma lista
var numeros = [1,2,3,4,5]
var pares = numeros.filter(function(numero){
    return numero % 2 === 0
})
 
console.log(pares)

//FIND => Busca um item numa lista. Lembrando que ele só devolve apenas a 
//        primeira ocorrência do item que bate com a condição da busca.
var numeros = [1,2,3,4,5]
var valor = numeros.find(function(numero){
    return numero == 2
})
 
console.log(valor) 

//EVERY => Essa função é excelente para quando precisamos validar se
//         todos os itens da lista atendem a um critério em comum.
var numeros = [1,2,3,4,5]
var todosMenoresQueDez = numeros.every(function(numero){
    return numero < 10
})
 
console.log(todosMenoresQueDez)


//SOME => Retorna true se pelo menos um item da lista atende a um critério
var numeros = [1,2,3,4,5]
var peloMenosUmNumeroTres = numeros.some(function(numero){
    return numero === 3
})
 
console.log(peloMenosUmNumeroTres)

//REDUCE => Reduz todos os itens de um array
var numeros = [1,2,3,4,5]
var soma = numeros.reduce(function(soma,numero){
    return soma + numero
},0)
 
console.log(soma) 

//CLASSES