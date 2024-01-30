// objeto:
const curso = {
  // propriedade:
  nome:'Javascript',
  // método (função dentro do objeto):
  completar() {
    console.log(this.nome); // this permite acessar toda propriedade criada dentro do objeto
  },
};

console.log(curso.nome); // retorna o nome do curso

// console.log(curso.completar); retorna o corpo da função

curso.completar(); // retorna o nome do curso