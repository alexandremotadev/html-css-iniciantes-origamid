function logCurso(nome) {
  console.log(nome);
  return nome + 'Log'; // return sempre fica no final
}

const valor = logCurso('JavaScript'); // para ver o retorno de uma função, colocar ela dentro de uma variavel
console.log(valor);





function logCurso2(nome, horas) {
  console.log(nome, horas, "horas");
  // return "Teste Log2 Retorno"
  // return nome;
  // retorno de um objeto:
  return {
    nome, 
    horas,
  }
}

logCurso2("Javascript", "40");
const retorno = logCurso2("HTML log2 retorno", "20");

console.log(retorno);
console.log(retorno.horas);

