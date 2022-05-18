alert('Bem Vindo! A seguir pediremos que informe alguns dados')

let nome = prompt('informe o seu nome:')
let idade = prompt('informe o sua idade:')
let confIdade = confirm('sua idade é: ' + idade)

while (confIdade != true) {
  idade = prompt('informe o sua idade:')
  confIdade = confirm('sua idade é: ' + idade)
}

alert('nome de usuário: ' + nome + ' idade: ' + idade)
