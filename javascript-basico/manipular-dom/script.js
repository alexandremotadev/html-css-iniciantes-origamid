const nav = document.querySelector('nav'); // 'nav' selecionar tag nav
const produtos = document.querySelector('.produtos a'); // retornar "a" dentro de produtos

console.log(nav); // retornar/selecionar elemento no console
console.log(produtos);

console.log(produtos.href);

console.dir(nav); // informa quais propriedades e metodos que essa navegação possui

// posso utilizar essas estilizações baseado nas ações do usuários, algo bem limitado com css
nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

nav.classList.add("ativo");