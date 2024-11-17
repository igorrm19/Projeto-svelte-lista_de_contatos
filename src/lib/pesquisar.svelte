<script>
  import {buscar} from '../stores.js';


  function atualizarBusaca(event) {
    return buscar.set(event.target.value)
   }
 
</script>

<div id="container">
  <div class="input-group">
    <div class="input-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <input id="sereach"
           type="text"
           class="input-field"
           on:input={atualizarBusaca}
           bind:value={$buscar}
           placeholder="pesquisar">
  </div>
  
</div>


<style>
  div{
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>