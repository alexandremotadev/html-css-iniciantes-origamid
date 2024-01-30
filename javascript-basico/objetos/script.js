const nome = "O Senhor dos Anéis"
const ano = 1954
const autor = "J.R.R.Tolkien"

const nomeFilme = "O Senhor dos Anéis"
const diretorFilme = "Peter Jackson"

// const livro = objeto .. nome dentro de const livro = propriedade

const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J.R.R.Tolkien"
}

const filme = {
  nome: "O Senhor dos Anéis",
  ano: 2001,
  diretor: "Peter Jackson",
  autor: "J.R.R.Tolkien"
}

// para selecionar uma propriedade de um objeto, utilizamos o .
// exemplo: para selecionar o ano do livro: livro.ano
console.log(livro.ano);

console.log(2024-livro.ano);
console.log(livro.nome + filme.diretor);

console.log(livro.nome === nome);

const texto = document.querySelector("p");
console.log(texto.innerHTML); // acessar propriedades de texto
console.log(texto.clientHeight);

console.log(autor.toUpperCase());

const decimal = 1223.99;
console.log(decimal.toFixed()+3); // arredondar... retorna como string e não número
console.log(Number(decimal.toFixed())+9); // função number converte em numero

// quantos caracteres tem o decimal apos ser transformado em tofixed

// const total = decimal.toFixed(); = é uma string
// console.log(total);

const total = decimal.toFixed().length.toFixed().length.toFixed();
console.log(total);

//.length faz virar número
// .toFixed() faz virar string







