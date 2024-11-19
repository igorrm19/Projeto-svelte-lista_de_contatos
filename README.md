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

# No componente tabela 
```

    const dados = {id: Date.now() ,nome: '', email: '', editar};

    usuarios.update(tableDados => 
       [...tableDados, dados]
    )

    contador.update(() => $usuarios.length);

```

Primeiramente, a função adicionar é ultilizada sempre ao clikar no botão adicionar, ela adiciona um novo objeto dentro de um array vazio em stores.js ao criar um novo objeto a o svelte ultilizando. 

``` 
 {#each $usuarios.filter(usuario => usuario.nome.includes($buscar)) as usuario (usuario.id)}

```
Particularidade do svelte semelhante a um laço for aplicado dentro da parte de html. Ele alem de ultilizar filter para filtrar usuarios digitados em busca tambem cria uma nova tabela ao clicar em adicionar.

Alem de adicionar temos funções simples como editar que ultila o metodo map para localizar um item especico e alterar seu sua variavel ao clickar en editar para que possa prencher os campos de nome e email.

Temos a função de excluir que usa filter para filtrar todos os items do array com exeção do item especifico que esta o botão excluir escolhido e alem desses temos a função exibir no console que mostra todas as operações realizadas no console do navegador ou do node.




