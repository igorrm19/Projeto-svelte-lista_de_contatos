
<script>

  import {lista} from '../src'
  import {variaveis} from '../src'


  function Adicionar() {
    return 
  }
 
</script>


<table>
    <thead>

      <tr>
        <th>Adicionar nome</th>
        <th>Adicionar email</th>
        <th>Status</th>
        <th>Excluir</th>
        <th>Editar</th>
      </tr>

    </thead>
    <tbody>

      <tr>
        <td><input bind:value={variaveis[0].nome} type="text"></td>
        <td><input bind:value={variaveis[0].email} type="text"></td>

        <td>
          <i class="fa-solid fa-tree status-ativo"></i>
        </td>

        <td>
          <i class="fa-solid fa-trash status-desativado"></i>
        </td>

        <td>
          <i class="fa-solid fa-pen"></i>
        </td>
      </tr>

    </tbody>
</table>

<button>Adicionar</button>



<style>
  .status-ativo{
    color: green;
  }

  .status-desativado{
    color: red;
  }

  

</style>