alert('Seja bem vindo, vamos para os nossa tarefa')

let oldPeople = prompt('how old is the name person?')
let ageOld = prompt('how old is the oldest person')
let newPeople = prompt('how new is the name person?')
let ageNew = prompt('how new is the oldest person')

let calc = ageOld - ageNew

alert(
  'o nome da pessoa mais velha: ' +
    oldPeople +
    '\na idade da pessoa mais velha: ' +
    ageOld +
    '\no nome da pessoa mais nova: ' +
    newPeople +
    '\na idade da pessoa mais nova: ' +
    ageNew +
    '\ndiferença de idade: ' +
    calc
)
