
<script>

  import {contador} from '../stores.js';
  import {cont} from '../stores.js'

  let usuarios = []; //aaray de objct vazio
  let isEditable = true;

  function Adicionar() {
   usuarios = [...usuarios, {id: Date.now() ,nome: '', email: '', editMode: true} ];  //funcao click, ao clicar adiciona um id aleatorio, nome e eail vazio
   contador.update(() => usuarios.length); //atualiza o valor do contador reativo a cada novo objct
 
   }

   function Editar() {
    isEditable = !isEditable //sempre que clikar no botao vi alterar entre true e false 
   }
    


  function Excluir(id){
    usuarios = usuarios.filter((usuario, index) => usuario.id !== id); //eu posso usar o index para excluir tambem index !== index
    contador.update(() => usuarios.length);
  }

 
  function ExibirConsole() {
   return usuarios.forEach((usuario, index) => {
    console.log(`Ususario ${index + 1} ${usuario.id}`, usuario, usuarios); //funcao click, mostra tudo que ja foi adicionado no objct usuarios
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

    {#each usuarios as usuario (usuario.id)}
    <tbody>

      <tr>
        <td>
          <h3>{usuario.id}</h3>
        </td>

        <td>
          <input bind:value={usuario.nome} readonly={isEditable} placeholder="Nome..." type="text">
        </td>

        <td>
          <input bind:value={usuario.email}  readonly={!usuario.editMode} placeholder="Email..." type="text">
        </td>

        <td>
          <i  class="fa-solid fa-tree status-ativo"></i>
        </td>

        <td>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <i on:click={() => {Excluir(usuario.id)}}  class="fa-solid fa-trash status-desativado"></i>
        </td>

        <td>
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <i on:click={Editar} class="fa-solid fa-pen"></i>
        </td>
      </tr>

    </tbody>
   
    {/each}
</table>

<div>
  <button on:click={Adicionar} on:click={ExibirConsole}>Adicionar</button>
</div>


<style>
  div{
    display: flex;
    padding: 1rem;
  }

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