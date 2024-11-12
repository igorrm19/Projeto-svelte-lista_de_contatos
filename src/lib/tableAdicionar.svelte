
<script>
  import {contador} from '../stores.js'

  let usuarios = [] //aaray de objct vazio

  function Adicionar() {
   usuarios = [...usuarios, {id: Date.now() ,nome: '', email: ''}]  //funcao click, ao clicar adiciona um id aleatorio, nome e eail vazio
   contador.update(() => usuarios.length)

   if(usuarios[0].nome == ''){  //não esta funcionando descobrir motivo
     contador.update(() => null)
   }
  } 

 
  function ExibirConsole() {
   return usuarios.forEach((usuarios, index) => {
    console.log(`Ususario ${index + 1}`, usuarios) //funcao click, mostra tudo que ja foi adicionado no objct usuarios
  });
 }


</script>



<table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Adicionar nome</th>
        <th>Adicionar email</th>
        <th>Status</th>
        <th>Excluir</th>
        <th>Editar</th>
      </tr>

    </thead>

    {#each usuarios as usuario, index}
    <tbody>

      <tr>
        <td>
          <h3>{usuario.id}</h3>
        </td>

        <td>
          <input bind:value={usuario.nome} placeholder="Nome..." type="text">
        </td>

        <td>
          <input bind:value={usuario.email} placeholder="Email..." type="text">
        </td>

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
    
    {/each}
</table>


<button on:click={Adicionar} on:click={ExibirConsole}>Adicionar</button>




<style>
  table{
   margin-left: 100px;
  }
  .status-ativo{
    color: green;
  }

  .status-desativado{
    color: red;
  }

  th{
    padding: 2rem;
  }

  td{
    padding: 2rem;
  }

  button{
    padding: 2rem;
    background-color: rgb(39, 64, 208);
    text-align: center;
    margin: 3rem;
    margin-top: -2rem;
    border: 1px solid black;
    border-radius: 2rem;
    color: black;
  }

</style>