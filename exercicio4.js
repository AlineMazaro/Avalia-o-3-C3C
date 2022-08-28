/* Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.

Exemplo de retorno:

Entrada:
45

Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.
*/

const botaoVerificar = document.querySelector("#botaoVerificar")

function substituirArray(valor){
   const array = []
   for(var i = 1; i <= valor; i++){
      if(i%9==0 && i%5 == 0){
         array.push("LuidyMoura");
      }else if(i%9==0){
         array.push("Moura");
      }else if(i%5 == 0){
         array.push("Luidy");
      }else{
         array.push(i);
      }
   }
   return array
}


botaoVerificar.addEventListener("click", ()=>{
   const resposta = document.querySelector("#respostaSequencia");
   const valor = document.querySelector("#valor").value;

   if(valor < 0 || valor == ""){
      resposta.innerHTML = `Verificar o valor inserido`;
   }else{
      resultado = substituirArray(valor);
      resposta.innerHTML = `${resultado}`;
   }
})