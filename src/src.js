

export let variaveis = [
    { id: aleatorio(),
       nome: "", 
       email: "", 
       status:  true}
]
    

export let lista = [
    {id: aleatorio(), nome: "Igor", email: "igormachado14@gmail", status:  true},
    {id: aleatorio(), nome: "Briza", email: "brizamachado14@gmail", status: false},
    {id: aleatorio(), nome: "Tierre", email: "tierremachado14@gmail", status: true}
  ];


//numero aleatorio
  function aleatorio() {
    return Math.floor(Math.random() * 1000000)
   }


lista.forEach((lista, index) => {console.log("Exibir", index +1, " ", lista)})


