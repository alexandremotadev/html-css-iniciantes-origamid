// queryselectorall: selecionar todos os links da página que estiverem dentro da nav. Se fosse utilizar o queryselector, teria como selecionar somente o primeiro link.

// retorna somente o link de home:
const links = document.querySelector('nav a'); // selecionar apenas os "a" dentro de nav

console.log(links);

// retorna todos os links:
// const links2 é uma array like, não uma array
// se ocorrer erro is not a function é porque você está ativando método de algo que não existe (não é array por exemplo)
//Array.from transforma array like em array real

const links2 = Array.from(document.querySelectorAll('nav a')); // selecionar apenas os "a" dentro de nav

console.log(links2);
const ultimoLink = links2.pop();

// essa função executa uma função para cada item:
function logHref(item) {
  const href = item.href; // extrair o href
  console.log(href);
}

links2.forEach(logHref); // utilizar função forEach

// console.log(links2[0]);

// pegar ultimo item do array:
console.log(links2[links2.length - 1]);

// ---------------------------------------
// Métodos e propriedades

const lista = ["JavaScript", "HTML", "CSS"];

/* lista.pop(); // remove ultimo item da lista
console.log(lista); */

const ultimo = lista.pop(); // colocando essa função numa const, ela retorna o valor final
console.log(ultimo);

const primeiro = lista.shift(); // colocando essa função numa const, ela retorna o valor inicial
console.log(primeiro);

lista.push("PHP"); // adiciona item à lista
console.log(lista);