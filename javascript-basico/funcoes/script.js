function logCurso() {
  const nome1 = "Javascript";
  console.log(nome1);
}

logCurso();
logCurso();
logCurso();

// nome = parâmetro
function logCurso2(nome2) {
  console.log(nome2);
}

// "html e css dentro do () de logcurso2 = argumento"
logCurso2("HTML");
logCurso2("CSS");


function logCurso3(nome3, horas3) {
  console.log(nome3, horas3, "horas"); // 2 argumentos + valor fixo
}

logCurso3("JavaSc", "40");
logCurso3("HTM", "20");
