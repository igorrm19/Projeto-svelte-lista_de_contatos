
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


   
</div>



