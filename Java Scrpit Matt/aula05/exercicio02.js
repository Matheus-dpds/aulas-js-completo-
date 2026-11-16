let soma = 0; //sua soma começa em 0

let numero;
//FAÇA: pede um numero
do{
    numero = Number(prompt("Digite um numero! (Digita 0 quando cansar):"));
    soma += numero;
} while(numero !=0);// ENQUANTO o numero não for 0, continua pedindo
console.log (`a soma total é:` + soma);
alert(`a soma total é :` + soma );
