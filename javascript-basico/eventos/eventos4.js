// console.log(window.innerHeight);
// console.log(window.innerWidth);

const larguraTela = window.innerWidth;
// console.log(larguraTela);

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x, // ver coordenada x
    y: event.y, // ver coordenada y
  };
  console.log(coordenadas);
}

// window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
  console.log(window.scrollY); // distancia da barra do scroll até o topo
}

window.addEventListener('scroll', scroll);

