let alunos = [
  { nome: 'Carlos', nota: 10, turma: 'A' },
  { nome: 'Joan', nota: 5, turma: 'A' },
  { nome: 'Julian', nota: 8.5, turma: 'B' }
]

function alunosAprovados(array, media) {
  let aprovados = []
  for (let i = 0; i < array.lenght; i++) {
    if (array[i].nota >= media) {
      aprovados.push(array[i].nome)
    }
  }
  return aprovados
}

//or

function alunosAprovados1(array, media) {
  let aprovados = []
  for (let i = 0; i < array.lenght; i++) {
    const { nota, nome } = array[i]
    if (nota >= media) {
      aprovados.push[nome]
    }
  }
  return aprovados
}

console.log(alunosAprovados(alunos, 6))
