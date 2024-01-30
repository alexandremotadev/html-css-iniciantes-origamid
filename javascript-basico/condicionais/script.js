// Operador Boolean (true ou false)

// const elemento1 = document.querySelector("p");
// se selecionar elemento que não está na tela (exemplo o p não está no html) o retorno é null

// se elemento existir, pegar este elemento e adicionar um evento click
/* if(elemento1) {
  elemento1.addEventListener("click");
}
*/ 
// Primeiro selecionamos o elemento, verificamos se ele existe na tela para aí sim manipular ele, porque se carregar esse javascript no site todo, uma página tem o "p" (ou qualquer outra classe) e outra página não tem, aconteceria um erro no javascript inteiro

// -----------------------------------------------

// Operadores lógicos || (OU) e && (E)

/* 
if(true && false) {
  console.log('Não executa');
}

if(true || false) {
  console.log('Executa');
} 
*/

// se o p existir ou se o body existir, retornar palavra teste
/* const elemento = document.querySelector("p");

if (elemento || document.querySelector("body")) {
  console.log("teste");
}
*/
// Operadores de comparação === (igual) ou !== (diferente)

const elemento = document.querySelector("p");
const texto = elemento.innerText; // pegar o texto dentro do elemento

console.log(texto);

// toUpperCase vai transformar o texto em maiúscula, e como a condição "HTML" que eu defini está maiúscula, neste caso o resultado é sempre "executar código"
if (texto.toUpperCase() === "HTML") {
  console.log("Executar código");
}

if (10 > 5) {
  console.log("Funciona");
}

if (10 !== 5) {
  console.log("Diferente");
}

if (10 === 10) {
  console.log("Igual");
}

if (10 !== "10") {
  console.log("Diferente");
}


