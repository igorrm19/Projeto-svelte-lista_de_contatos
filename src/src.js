let lista = [
  {name: 'Igor'},
  {name: 'Briza'},
  {name: 'Tierre'}
]

let listas = lista = lista.filter((list) => list.name == 'Igor')

lista.forEach((user, index) => console.log("Listar " + user.name ))