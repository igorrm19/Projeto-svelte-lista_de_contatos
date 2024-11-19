 # Svelte lista 
 
 O codigo svelte se trata de uma lista simples de nomes e emails com diversas funcionalidades como pesquisar por nome
 adicionar novo contato a lista, editar e excluir.


 Seu codigo principal esta localizado em src no qual temos um compo principal App.svelte nele esta a estrutura basica do codigo 
 com cabeçalho que contem um pequeno contador reativo que indica quantos items foram adicionados alem de dois componentes pesquisar tabela


 Dentro de lib nossa pasta que fica armazenada os componentes svelte tem pesquisar e a tabela de items


 Em pesquisar temos uma função chamada atualizar busca 
 
 ```
 function atualizarBusaca(event)
{  return buscar.set(event.target.value) }

```

 essa funcao usa uma variavel reativa importada de store.js local que fica armazenado os stores, essa funcao esta reponsavel por capturar dados de busca e atualizlos constantemente para ser usado em table que esta o coraçao do projeto





