// array (lista) é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo de dados, enquanto um index (i) é um valor numérico que indica a posição de um elemento dentro de um array

/* const lista = ['Javascript', 20, true];
console.log(lista);

const nome = lista[0];
console.log(nome);
*/
// Loop pode ser utilizado para executar um codigo para cada item da array

const lista = ['Javascript', 'HTML', 'CSS'];

console.log(lista.length);
// for (tem 3 itens): variavel inicial (tem que ser let porque vai mudar a cada loop) + quando o loop para (quando for maior que 100 ele para) + o que vai ocorrer com o i quando o loop for ativado (i++ = soma +1 ao i)
for (let i = 0; i < lista.length; i++) {
  // console.log("teste" + i);
  // console.log("teste");

  // mostrar itens da lista:
  console.log(lista[i]);
}
