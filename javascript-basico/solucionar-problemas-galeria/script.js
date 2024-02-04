// selecionar lista de imagens
// seleciona apenas as img dentro de li:
const imagens = document.querySelectorAll("#galeria li img");
// console.log(imagens); teste se está tudo certo

// ao clicar, aparecerá um evento (galeriatTrocar)
function galeriaTrocar(event) {
  // trocar imagem principal:
  // primeiro passo selecionamos a imagem principal:
  const principal = document.querySelector("#imagem-principal");

  const clicada = event.currentTarget; // .currentTarget serve pra ter acesso ao elemento que estou dando o clique

  // segundo passo mudamos o src e alt da principal para a mesma da imagem clicada
  principal.src = clicada.src;
  principal.alt = clicada.alt;

  // console.log(clicada.src); // .src serve pra ter acesso ao src do html do item clicado
}

// dentro do galeriaClique tenho acesso a cada uma das imgs, uma por uma
function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

// adicionar evento a cada uma das imagens
// selecionar imagens atraves do loop forEach. passo a função e tenho acesso a cada uma das imagens
imagens.forEach(galeriaClique);
