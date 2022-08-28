/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados.
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/

//selecionando elementos da tela

const num1 = document.querySelector("#lado1");
const num2 = document.querySelector("#lado2");
const num3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const aviso = document.querySelector("#aviso")

//Mostrar que o campo não foi preenchido
num1.onblur = () => {
    if(num1.value == ""){
    l1.style = "color: #aa0044";
    num1.style = "border-color: #aa0044";
}else{
    l1.style = "color: #000000";
    num1.style = "border: #000000";
}
}

num2.onblur = () => {
    if(num2.value == ""){
    l2.style = "color: #aa0044";
    num2.style = "border-color: #aa0044";
}else{
    l2.style = "color: #000000";
    num2.style = "border: #000000";
}
}

num3.onblur = () => {
    if(num2.value == ""){
    l2.style = "color: #aa0044";
    num3.style = "border-color: #aa0044";
}else{
    l2.style = "color: #000000";
    num3.style = "border: #000000";
}
}

//Condições
btn.onclick = () => {
    if(num1.value == "" && num2.value != "" && num3.value == ""){
        num1.focus();
    }else if(num2.value == "" && num1.value != "" && num3.value == ""){
        num2.focus();
    }else if(num1.value < 0 || num2.value < 0 || num3.value < 0){
        num1.value = "";
        num2.value = "";
        num3.value = "";
        res.value = "";
        aviso.innerText = "Somente valores a partir de 0"
    }else{
        res.value = tipotriangulo(num1.value, num2.value, num3.value)
        aviso.innerText = "";
    }
}

//Identificar tipo do triângulo

const tipotriangulo = (num1, num2, num3) => {
    if (num1 < (num2 + num3) && num2 < (num1 + num3) && num3 < (num1 + num2)) {

    if ( num1 >0 == num2 >0 && num2 >=0 == num3 >0 ){
        return("Equilátero");        
        } else if (num1 == num2 || num1 == num3 || num2 == num3){
        return("Isósceles");
        } else if(num1!= num2 != num3){
        return("Escaleno")
        }else if(num1 <=0 || num2 <=0  || num3 <=0 ){
        return("Insira nº > 0")
        }
    }else{
            return ("Preencher valores")

        }
}


