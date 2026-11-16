// Escopo global
//pode ser redeclarada
//tipo: string (texto)
var nome_aluno = "Matheus Duarte"
var idade_aluno = 18 
//Escopo bloco
//tipo: number  (float ou int)
//tipo: string (texto)
//nao pode ser redeclarado
let nome_aluno2 = 'Carlos Daniel'
let idade_aluno2 = 23

// NÃO PODE TER SEU VALOR REDEFINIDO
//NÃO PODE SER REDECLARADA
const bebida = 18
const media = 7

let recreio30m = true
// Tipos de Dados

//Tipo Boolean - true | false
//Tipo Number - 2 | 2.0
//Tipo string - "nome" | 'nome' | `nome´

// Declaração de Variavel

//let - Escopo de bloco (pode ter seu valor redefinido mas não redeclarada)
//var - Escopo global (pode ser redeclarada e redefinida - NÃO USAR)
//const - Constante (Não pode ser redeclarada e nem redefinida)
let nome = "ritinha"
let jogo = "Subwaysurf"
let idade = 19
let joga_na_aula = true

console.log("Olá, Mundo")
console.log("Olá", nome)

console.log(`Olá, ${nome}! você está jogando na aula? ${joga_na_aula}!`);

let nota1 = 10
let nota2 = 9

let media_aluno = (nota1 + nota2) / 2

console.log(`Média aluno: ${media_aluno}`);