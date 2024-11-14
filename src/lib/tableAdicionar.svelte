
<script>

  import {contador} from '../stores.js';


  let usuarios = []; //aaray de objct vazio
  let editar = true;

  contador.update(() => usuarios.length); //atualiza n somete quando cliko em um botao mas quando por exemplo salvo algo no codigo

  function Adicionar() {
   usuarios = [...usuarios, {id: Date.now() ,nome: '', email: ''} ];  //funcao click, ao clicar adiciona um id aleatorio, nome e eail vazio
   contador.update(() => usuarios.length); //atualiza o valor do contador reativo a cada novo objct
 
   }

   function Editar() {
    editar = !editar  //sempre que clikar no botao vi alterar entre true e false, o realdoly dessativa o input para edicao se seu valor for falso 
   } //enho que editar item por item e n todos
    

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
      <tr style="background-color:  mediumslateblue">
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

      <tr style="background-color: limegreen">
        <td>
          <h3>{usuario.id}</h3>
        </td>
      
        <td>
          <input bind:value={usuario.nome} readonly={editar} placeholder="Nome..." type="text">
        </td>

        <td>
          <input bind:value={usuario.email} readonly={editar} placeholder="Email..." type="text">
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
  <button on:click={Adicionar} on:click={ExibirConsole}>Add</button>
</div>


<style>
  div{
    display: flex;
    padding: 1rem;
  }

  table{
   margin-left: 30px;
   margin-top: 30px;
   border: 1px solid black;
  }
  .status-ativo{
    color: rgb(13, 75, 13);
  }

  .status-desativado{
    color: red;
  }

  th{
    padding: 4rem;
    border: 1px solid black;
  }

  td{
    padding: 1rem;
    border: 1px solid black;
  }

  i{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button{
    background-color: rgb(39, 64, 208);
    text-align: center;
    border: 1px solid rgb(169, 163, 163);
    border-radius: 30%;
    color: rgb(208, 198, 198);
    height: 50px;
    width: 100px;
    margin-left: 70px;
  }

</style>