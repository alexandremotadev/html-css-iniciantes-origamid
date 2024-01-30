// para acessar a lista de eventos que posso utilizar, igual ao timestamp, acessar a documentação MouseEvent da mozilla

const ativar = document.querySelector('.ativar');

// o parametro não precisa ser event, este é apenas o nome da variavel

/** @param {MouseEvent} event */ // este comentário adicionar lista com as propriedades e metodos ao event.timestamp para ajudar desenvolver o site

function ativarAoClick(event) {  
  console.log(event.timeStamp); // timestamp infoma tempo em milisegundos que demorou pra usuario clicar no botao (exemplo: tempo que usuario demorou para fazer uma compra no meu site)
}

//o parametro definido acima é passado automaticamente pelo addEventListener
ativar.addEventListener('click', ativarAoClick);
console.log(ativar);