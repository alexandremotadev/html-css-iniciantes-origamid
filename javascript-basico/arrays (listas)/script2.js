const lista = ["Javascript", "HTML", "CSS", "PHP"];
const body = document.querySelector("body");

// dentro desta função tenho acesso ao item
function adicionarBody(item) {
  // adicionar itens ao body
  body.innerHTML += "<li>" + item + "</li>";
  // essa função é executada 4 vezes
}

lista.forEach(adicionarBody);