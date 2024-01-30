// Variáveis declaradas dentro da função só podem ser acessadas dentro delas. Exceção: criar um return dentro da função e colocar a função dentro de uma variável const.

// Variáveis declaradas fora da função podem ser acessadas dentro e fora das funções.

const nome = "JavaScriptEs";

function logCurso() {
  const nome = "HTMLEs";
  console.log(nome);
  // return (nome); caso queira acessar o nome fora da função
}

// const nomedaFuncao = logCurso(); colocar função dentro do const, caso queira acessar o nome fora da função
// console.log(nomedaFuncao); caso queira acessar o nome fora da função

logCurso();

console.log(nome);