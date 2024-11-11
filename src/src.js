export let variaveis = [
    { id: aleatorio(),
       nome: "", 
       email: "", 
       status:  true}
]
    

export let lista = [
    {id: 1, nome: "Igor", email: "igormachado14@gmail", status:  true},
    {id: 2, nome: "Briza", email: "brizamachado14@gmail", status: false},
    {id: 3, nome: "Tierre", email: "tierremachado14@gmail", status: true}
  ];


//numero aleatorio
  function aleatorio() {
    return Math.floor(Math.random() * 1000000)
   }