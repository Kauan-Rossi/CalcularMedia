function calcularMedia() {
  const nome = document.getElementById("nomeAluno").value;
  const serie = document.getElementById("serieAluno").value;
  const nota1 = document.getElementById("notasAluno1").value;
  const nota2 = document.getElementById("notasAluno2").value;
  const nota3 = document.getElementById("notasAluno3").value;
  const nota4 = document.getElementById("notasAluno4").value;
  console.log(nota1, nota2, nota3, nota4);

  let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
  console.log(nota1, nota2, nota3, nota4, media);
  exibirDados(nome, serie, media);
}

function exibirDados(nome, serie, media) {
  let situacao;
  if (media >= 7) {
    situacao = "APROVADO";
  } else if (media < 5) {
    situacao = "REPROVADO";
  } else {
    situacao = "EM RECUPERAÇÃO";
  }
  document.getElementById("mediaAluno").value = media;
  document.getElementById("situacaoAluno").value = `O aluno ${nome} do ${serie} está ${situacao}, com média ${media}`;
}
