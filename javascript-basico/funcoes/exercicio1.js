// function nome da função(parâmetros)
// { o que está dentro de chaves é o corpo da função }
function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + ' por ' + autor;

// colocando const's acima dentro de um objeto:
  const objeto = {
    nome: nomeMaior,
    totalAnos, // mesma coisa de totalAnos = totalAnos,
    frase, // mesma coisa de frase = frase,
  };
// retornar o objeto definido acima:
  return objeto;
}

// livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien') -> execução da função com 3 argumentos (argumentos são as informações dentro dos parenteses)
// Guardar retorno da função acima em uma variável:
const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
                      
// Mostrar o que tem no objeto inteiro:
// console.log(livroRetorno);

// Exercício pediu para retornar apenas frase final:
console.log(livroRetorno.frase);

//-----------------------------------------------------------------------------

// Forma mais otimizada de escrever o mesmo código acima:

// não precisa criar const's nome, anos e frase, se não vou reutilizá-las
// não é necessário declarar o objeto em const e depois retornar ele, posso retornar direto o objeto, colocando nome, totalAnos e frase dentro do retorno do objeto

// function livro(nome, ano, autor) {
//  return {
//    nome: nome.toUpperCase(),   
//    totalAnos: 2050 - ano,
//    frase: nome + ' por ' + autor,    
//  };
// }

// const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
// console.log(livroRetorno.frase);




