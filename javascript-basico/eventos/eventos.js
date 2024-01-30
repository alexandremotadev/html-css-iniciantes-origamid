// selecionar elemento
const ativar = document.querySelector('.ativar');

function ativarAoClick() {
  console.log('Clicou em:', ativar);
}

// adicionar evento
// este é um método que recebe 3 argumentos: tipo de evento, função
ativar.addEventListener('click', ativarAoClick); // não é para ativar a função colocando ativarAoClick(), porque retorna undefined. ativarAoClick internamente o código entende que é pra ativar o click

// utilizar log para verificar se está tudo certo
console.log(ativar);