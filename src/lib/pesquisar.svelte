
<script>
  import {contador} from '../stores.js'
  import { lista } from "../src.js";
 
  
  contador.set(lista.length) 
</script>



<div id="container">
  <div class="input-group">
    <div class="input-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <input id="sereach"
           type="text"
           class="input-field"
           placeholder="pesquisar">
  </div>


  <ul class="items">
   {#each lista as newlista}
    <li>

      <h3>Contato {newlista.id},  {newlista.nome},  {newlista.email}</h3>

      {#if newlista.status == true}
        <i class="fa-solid fa-tree status-ativo"></i>
      {/if}

       {#if newlista.status === false}
         <i class="fa-solid fa-tree  status-inativo"></i>
       {/if}

    </li>
   {/each}
  </ul>

   
</div>

<style>

  ul{
    padding: 2rem;
    margin-top: 20px;
  }

  li{
    display: flex;
    gap: 2rem;
    margin-top: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .status-ativo{
    color: green;
  }

  .status-inativo{
    color: red;
  }
</style>


