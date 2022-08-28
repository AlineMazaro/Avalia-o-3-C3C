/* Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/


const botaoVerificar = document.querySelector("#botaoVerificar")

function arredondarNota(nota){
   let notaReal = nota
   let notaArredondada = 0
   while(nota<=100){
      if(nota%5 == 0){
         let notaFinal = nota
         if(notaFinal-notaReal<3){
            notaArredondada = notaFinal
            return notaArredondada
         }else{
            notaArredondada = notaReal
            return notaArredondada
         }
      }else{
         nota++
      }
   }
}


botaoCalcular.addEventListener("click", ()=>{
   const resposta = document.querySelector("#respostaNota");
   const nota = document.querySelector("#nota").value;

   if(nota < 0 || nota > 100 || nota == ""){
      resposta.innerHTML = `Verificar o valor inserido`;
   }else{
      if(nota < 38){
         resposta.innerHTML = `O Aluno foi reprovado!`;
      }else if(nota>=38){
         resultado = arredondarNota(nota)
         resposta.innerHTML = `A nova nota do aluno é ${resultado}`;
      }
   }
})