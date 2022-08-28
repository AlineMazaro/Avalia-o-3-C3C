/*Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

var a = 3
var b = -5
var c = 12
var x = [];
//delta
var delta = Math.pow(b, 2) - (4 * a * c);
if (delta < 0 ){
    x.push(delta)
    console.log("Raiz quadrada de " + x + " não existe")
console.log("Delta é negativo")
} else {
//baskara
var baskPositivo = (-b) + (Math.sqrt(delta))/(2*a);
var baskNegativo = (-b) - (Math.sqrt(delta))/(2*a);
x.push(baskPositivo, baskNegativo);
console.log(delta)
console.log(x)
} 




