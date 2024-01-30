const botao = document.querySelector('.botao'); // selecionar elemento

function mostrar() {
  // selecionar elemento texto, que quero modificar
  const texto = document.querySelector('.texto');
  // console.log(texto); testar se está funcionando
  texto.classList.toggle('ativar'); // adicionar ativar caso não exista e remover caso exista, faz texto aparecer e sumir ao clicar em mais informações
}

botao.addEventListener('click', mostrar)

// mostrar = o que vai fazer quando usuario clicar