// selecionar botao
const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div"); // selecionar elemento
  const  total = Number(div.innerText) + 1; // criei essa const para pegar o valor que está dentro da div. Number transforma o texto em número para somar + 1
  console.log(total);
  // trocar valor da div ao somar + 1 (limitado a < 10, caso queira tirar a limitação, basta tirar o if):
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possível adicionar mais");
  }
}

// somente adicionar o evento abaixo, caso o botao exista (para evitar erros no js)
if (botao) {
// adicionar evento no botao
botao.addEventListener("click", somar);
}


// exemplo de utilização deste código: e-commerce. Verifica o limite do estoque do produto e evita que o cliente compre mais do que se tem em estoque.