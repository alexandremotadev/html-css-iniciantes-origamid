const circulo = document.querySelector("#circulo"); // pode ficar fora da function porque não preciso selecionar este elemento toda vez que  o mouse mexer. posso selecionar apenas uma vez, ao deixar ele fora da function

function seguirMouse(event) {  
  circulo.style.top = event.y + "px"; // adicionar px porque a posição top que será adicionada pela função no style é em px 
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
