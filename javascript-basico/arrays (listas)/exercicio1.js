// exercicio serve para informar para o usuario qual o link (página home, produto ou contato) está ativo no momento, mudando o css do link

const links = document.querySelectorAll('nav a'); // seleciona apenas links da nav

// criar função
function ativarLink(link) {
  const href = link.href; // extrair link do href
  const url = document.location.href; // acessar url da pagina
  /* comparar se links estão iguais, se não estiverem as alterações do if não vão funcionar 
  console.log(url);
  console.log(href); */

  // mudar cor do background e cor do texto da lista de acordo com a página que está ativa
  if(href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
}

links.forEach(ativarLink); // adicionar função forEach


