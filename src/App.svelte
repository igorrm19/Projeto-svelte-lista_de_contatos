<script>
  import {contador} from "./stores.js"
  import "./app.css"
  import Pesquisar from "./lib/pesquisar.svelte"
  import TableAdicionar from "./lib/tableAdicionar.svelte";
</script>


<main>

  <div id="cabesalho">
     <h1>Liata de tarefas</h1>
     <i id="contador" class="fa-solid fa-users">{$contador}</i>
  </div>

  <div id="pesquisa">
    <Pesquisar />
  </div>

  <div id="adicionar">
   <TableAdicionar />
  </div>
 
</main>



<style>

#cabesalho{
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

#contador{
  color:green;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#pesquisa{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
