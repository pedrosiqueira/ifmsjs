# Carregando Dados no SvelteKit

Antes que um componente `+page.svelte` (e seus componentes `+layout.svelte` correspondentes) possa ser renderizado, frequentemente precisamos obter alguns dados. Isso é feito definindo funções `load`.

## Dados da Página

Um arquivo `+page.svelte` pode ter um arquivo irmão `+page.server.js` que exporta uma função `load`. O valor retornado por essa função estará disponível para a página através da propriedade `data`:

Crie o arquivo `src/routes/03/test/+page.server.js`:

```javascript
export function load() {
	return {
		post: {
			title: `Título de Exemplo`,
			content: `Conteúdo de Exemplo`
		},
    author: { name: 'Autor Exemplo', email: 'autor@exemplo.com' }
	};
}
```

Crie o arquivo `src/routes/03/test/+page.svelte`:

```svelte
<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<sub>por {data.author.name}</sub>
<div>{@html data.post.content}</div>
```

**Explicação:** A função `load` em `+page.server.js` retorna um objeto com os dados necessários para a página. Esses dados são acessados no componente Svelte através da propriedade `data`.

## Dados do Layout

Teus arquivos `+layout.svelte` também podem carregar dados, via `+layout.server.js`.

Crie o arquivo `src/lib/server/database.js`:

```javascript
const posts = [
    { slug: 'um', title: 'Primeiro Post', publish_date: '2025-03-12', content: 'Conteúdo do primeiro post' },
    { slug: 'outro', title: 'Outro Post', publish_date: '2025-03-25', content: 'Conteúdo do outro post' },
    { slug: 'algum', title: 'Mais um Post', publish_date: '2024-11-22', content: 'Conteúdo de mais um post' },
    { slug: 'ainda', title: 'Ainda Outro Post', publish_date: '2024-11-02', content: 'Conteúdo de ainda outro post' }
];
```

**Explicação**: Esse arquivo represetará nosso banco de dados.

Crie o arquivo `src/routes/03/posts/+layout.server.js`:

```javascript
import * as db from '$lib/server/database';

export async function load() {
  const posts = db.getAll();
  return { posts };
}
```

Crie o arquivo `src/routes/03/posts/+layout.svelte`:

```svelte
<script>
  import { page } from '$app/state';

  let { data, children } = $props();
</script>

<svelte:head>
  <title>{page.data.post?.title || page.url.pathname}</title>
</svelte:head>

<div class="row">
  <div class="col-4 bg-body-secondary">
    <aside>
      <h4>Últimos Posts</h4>
      <ul>
        {#each data.posts.slice(0, 2) as post}
          <li>
            <a href="/03/posts/{post.slug}">
              {post.title}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  </div>
  <div class="col">
    <main>
      {@render children()}
    </main>
  </div>
</div>
```

**Explicação:** Dados retornados pela função `load` de um arquivo `+layout.server.js` ficam disponíveis para todos os seus componentes `.svelte` filhos, bem como para ele próprio. Aqui, o arquivo `+layout.server.js` carrega todos os posts e os disponibiliza para o layout e suas páginas filhas. No layout, exibimos os dois posts mais recentes em um menu lateral.

Vamos criar uma página filha. Crie o arquivo `src/routes/03/posts/+page.svelte`:

```svelte
<script>
  let { data } = $props();
</script>

<h3>Todos os Posts</h3>
{#each data.posts as post}
  <p><a href="/03/posts/{post.slug}">{post.title}</a></p>
{/each}
```

**Explicação:** A página principal lista todos os posts disponíveis, utilizando os dados fornecidos pelo layout.

> **Nota:** Se múltiplas funções `load` retornarem dados com a mesma propriedade, a última sobrescreve as anteriores. Por exemplo, se uma função `load` do layout retorna `{ a: 1, b: 2 }` e a da página retorna `{ b: 3, c: 4 }`, o resultado final será `{ a: 1, b: 3, c: 4 }`.

## Parâmetros da Função Load

A função `load` é invocada com um objeto `ServerLoadEvent` como parâmetro, que possui várias propriedades, como `params`, `url` e `fetch`.

### params

Uma rota pode ser um caminho estático, como `src/routes/about`, ou um caminho dinâmico, como `src/routes/blog/[slug]` ou `src/routes/posts/[ano]/[mes]`. Neste caso, `[slug]`, `[ano]` e `[mes]` são chamados de parâmetros de rota, ou seja, variáveis que permitem diferentes valores levarem à mesma página.

Por exemplo:

- A URL `/about` abrirá a página em `src/routes/about`.
- As URLs `/blog/post1` e `/blog/post2` abrirão a mesma página dinâmica em `src/routes/blog/[slug]`, sendo que o valor de `slug` será `post1` ou `post2`, respectivamente.
- Da mesma forma, `/posts/2025/03` e `/posts/2024/11` abrirão a página `src/routes/posts/[ano]/[mes]`, com `ano` sendo `2025` ou `2024`, e `mes` sendo `03` ou `11`.

A propriedade `params` é um **objeto** onde cada propriedade corresponde ao nome do parâmetro definido entre colchetes na rota, e seu valor corresponde ao trecho da URL acessada.

Crie o arquivo `src/routes/03/posts/[ano]/[mes]/+page.server.js`:

```javascript
import * as db from '$lib/server/database';

export async function load({ params }) {
  const posts = db.getByYearMonth(params.ano, params.mes);
  return { posts };
}
```

Crie o arquivo `src/routes/03/posts/[ano]/[mes]/+page.svelte`:

```svelte
<script>
  let { data } = $props();
</script>

<h3>Posts</h3>

{#each data.posts as post}
  <p><a href="/03/posts/{post.slug}">{post.title}</a></p>
{/each}
```

**Explicação:** Utilizamos os parâmetros de rota `ano` e `mes` para filtrar os posts por data.

Também podemos usar uma única página para exibir cada post separadamente.

Crie o arquivo `src/routes/03/posts/[slug]/+page.server.js`:

```javascript
import * as db from '$lib/server/database';

export async function load({ params }) {
  const post = db.getBySlug(params.slug);
  return { post };
}
```

Crie o arquivo `src/routes/03/posts/[slug]/+page.svelte`:

```svelte
<script>
  let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<sub>Em {data.post.publish_date}</sub>
<p>{data.post.content}</p>
```

**Explicação:** Aqui, utilizamos o parâmetro de rota `slug` para buscar e exibir um post específico.

### url

Além dos **parâmetros de rota**, também podemos passar informações pela **URL** usando o que chamamos de **parâmetros de consulta** — também conhecidos como **query params** ou **search params**.

Esses parâmetros aparecem após o símbolo `?` na URL. Por exemplo:

```
https://meusite.com/produtos?categoria=livros&ordem=preco
```

Nesse caso, a URL possui dois query params:

- `categoria` com valor `"livros"`
- `ordem` com valor `"preco"`

No SvelteKit, dentro da função `load`, você pode acessar esses dados através da propriedade `url`, que é um objeto do tipo [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL). Esse objeto representa a URL da requisição e contém várias informações úteis, como:

- `origin`: origem da URL (ex: `https://meusite.com`)
- `pathname`: caminho da URL (ex: `/produtos`)
- `searchParams`: um objeto do tipo [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), que representa os parâmetros de consulta da URL e permite acessar facilmente os valores dos query params.

Crie o arquivo `src/routes/03/posts/query/+page.server.js`:

```javascript
import * as db from '$lib/server/database';

export async function load({ url }) {
  console.log(url);
  const title = url.searchParams.get('title') || null;
  const content = url.searchParams.get('content') || null;

  if (!title && !content) return { posts: db.getAll() };

  return { posts: db.getByQuery(title, content) };
}
```

> 💡 **Dica:** Neste exemplo, usamos `console.log()` para exibir o conteúdo da URL e dos parâmetros no terminal ou no console do navegador. Essa é uma ferramenta muito útil para **debugar** (ou seja, investigar e entender o que está acontecendo no seu código).
>
> Sempre que estiver em dúvida sobre o que uma variável contém, experimente usar `console.log(minhaVariavel)` para visualizar seu valor. Isso pode ajudar bastante na hora de identificar problemas e entender melhor o fluxo do programa.

Crie o arquivo `src/routes/03/posts/query/+page.svelte`:

```svelte
<script>
  let { data } = $props();
</script>

<form>
  <input type="text" name="title" placeholder="Search by title..." />
  <input type="text" name="content" placeholder="Search by content..." />
  <button type="submit">Search</button>
</form>

<h1>Busca de posts</h1>

<ul>
  {#each data.posts as post}
    <li><a href="/03/posts/{post.slug}">{post.title}</a></li>
  {:else}
    <li>Nenhum resultado encontrado.</li>
  {/each}
</ul>
```

**Explicação:** Neste exemplo, a função `load` acessa os parâmetros da URL usando `url.searchParams.get('termo')`, permitindo buscar posts por título. Isso simula uma funcionalidade de busca baseada em query strings.

### fetch

Para buscar dados de uma API externa ou do seu próprio servidor, você pode usar a função `fetch` disponibilizada pelo SvelteKit. Ela se comporta de forma idêntica à API nativa `fetch`, mas com algumas vantagens:

- Pode ser usada para fazer requisições autenticadas no servidor, herdando cookies e cabeçalhos de autorização da requisição da página.
- Requisições internas (como para rotas `+server.js`) são redirecionadas diretamente para o manipulador de requisições no servidor, sem o overhead de uma chamada HTTP.
- Em alguns casos, é mais eficiente, pois **evita uma requisição adicional** ([veja na documentação](https://svelte.dev/docs/kit/load#Making-fetch-requests)).

Crie o arquivo `src/routes/03/external/users/+page.server.js`:

```js
export async function load({ fetch }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return { users };
}
```

**Explicação:** Esse código faz uma requisição para a API externa e retorna os dados dos usuários. Como está em `+page.server.js`, a requisição sempre será feita no servidor, protegendo eventuais dados sensíveis.

Crie o arquivo `src/routes/03/external/users/+page.svelte`:

```svelte
<script>
  let { data } = $props();
</script>

<h3>Usuários</h3>
<ul>
  {#each data.users as user}
    <li><a href="/03/external/users/{user.id}">{user.name}</a></li>
  {/each}
</ul>
```

**Explicação:** Aqui, iteramos sobre os usuários carregados e mostramos uma lista com links para cada um.

Agora vamos carregar as informações de um usuários, bem como suas postagens. Crie o arquivo `src/routes/03/external/users/[id]/+page.server.js`:

```js
export async function load({ params, fetch }) {
  const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await resUser.json();

  const resPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
  const posts = await resPosts.json();

  return { user, posts };
}
```

**Explicação:** Usamos `params.id` para buscar os dados de um usuário específico e também suas postagens. Retornamos tudo no objeto `data`.

Crie o arquivo `src/routes/03/external/users/[id]/+page.svelte`:

```svelte
<script>
  let { data } = $props();
</script>

<h3>User</h3>
<p><strong>Nome:</strong> {data.user.name}</p>
<p><strong>Email:</strong> {data.user.email}</p>
<p><strong>Telefone:</strong> {data.user.phone}</p>
<p><strong>Website:</strong> {data.user.website}</p>
<p><strong>Companhia:</strong> {data.user.company.name}</p>
<p><strong>Endereço:</strong> {data.user.address.street}, {data.user.address.suite}, {data.user.address.city}, {data.user.address.zipcode}</p>

<h3>Postagens do usuário</h3>
<ul>
  {#each data.posts as post}
    <li><a href="/03/external/posts/{post.id}">{post.title}</a></li>
  {:else}
    <p>Nenhuma postagem encontrada.</p>
  {/each}
</ul>
<p>
  <a href="/03/external/users">Back to users</a>
</p>
```

**Explicação:** Exibimos os detalhes do usuário e uma lista de suas postagens. Também incluímos um link de volta à lista de usuários.

## page.data

O componente `+page.svelte`, assim como cada `+layout.svelte` acima dele na hierarquia, tem acesso aos seus próprios dados e também aos dados de todos os seus layouts "pais".

No entanto, em algumas situações precisamos do contrário — um layout "pai" pode precisar acessar dados carregados por uma página ou por um layout "filho". Um exemplo comum é o layout raiz (`+layout.svelte`) querer acessar uma propriedade `title` retornada pela função `load` de um `+page.server.js`.

Para isso, utilizamos `page.data`.

**Modifique** o arquivo `src/routes/03/posts/+layout.svelte`:

```svelte
<script>
  import { page } from '$app/state';
  let { data, children } = $props();

  console.log(page);
</script>

<svelte:head>
  <title>{page.data.post?.title || page.url.pathname}</title>
</svelte:head>

<div class="row">
  <div class="col-4 bg-body-secondary">
    <aside>
      <h4>Latest posts</h4>
      <ul>
        {#each data.posts.slice(0, 2) as post}
          <li>
            <a href="/03/posts/{post.slug}">
              {post.title}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  </div>
  <div class="col">
    <main>
      {@render children()}
    </main>
  </div>
</div>
```

**Explicação:** Aqui, o layout acessa `page.data.post?.title` para definir o título da aba dinamicamente com base na página carregada.

## Cliente vs Servidor

Além das funções `load` nos arquivos `+layout.server.js` e `+page.server.js`, que sempre são executadas no servidor, também existem as funções `load` nos arquivos `+layout.js` e `+page.js`, conhecidas como funções `load` universais. Essas funções podem ser executadas tanto no servidor quanto no navegador (a menos que sejam combinadas com `export const ssr = false`, caso em que elas serão executadas (somente no navegador)[https://svelte.dev/docs/kit/page-options#ssr]).

Por padrão, as funções `load` universais são executadas no servidor durante o SSR (Server-Side Rendering) quando o usuário visita a página pela primeira vez. Elas serão executadas novamente durante o processo de (hidratação)[https://svelte.dev/docs/kit/glossary#Hydration], reutilizando quaisquer respostas de (requisições fetch)[https://svelte.dev/docs/kit/load#Making-fetch-requests] feitas anteriormente. Todas as invocações subsequentes dessas funções `load` universais ocorrerão no navegador. Você pode personalizar esse comportamento por meio das (opções da página)[https://svelte.dev/docs/kit/page-options]. Por exemplo, se desativar a opção de página (server-side rendering)[https://svelte.dev/docs/kit/page-options#ssr], você estará criando uma SPA (Single Page Application), e todas as funções `load` universais serão executadas no cliente.

Se uma rota contiver tanto funções `load` universais quanto funções `load` específicas para o servidor, a função `load` do servidor será executada primeiro.

A função `load` é invocada em tempo de execução, a menos que você (pré-renderize)[https://svelte.dev/docs/kit/page-options#prerender] a página — nesse caso, ela será invocada em tempo de compilação.

### Quando usar o quê

- Se a sua função `load` deve ser executada sempre no servidor, por exemplo, quando utiliza variáveis de ambiente privadas ou acessa um banco de dados ou sistema de arquivos, ela deve ser colocada em um `+page.server.js`.
  
- Como o SvelteKit pode acessar os dados diretamente da API sem passar pelo seu servidor, se você precisar buscar dados de uma API externa e não precisar de credenciais privadas, use o `+page.js`.

## Conclusão

O SvelteKit oferece uma série de recursos poderosos para carregar dados de maneira eficiente, seja do servidor, de APIs externas ou de fontes internas. Ao entender as diferenças entre as funções `load` nos arquivos `+page.server.js`, `+layout.server.js`, `+page.js` e `+layout.js`, você pode otimizar o desempenho de teu aplicativo, aproveitando o que há de melhor em renderização no servidor e no cliente. Para explorar mais sobre esses recursos e como aplicá-los, consulte a [documentação oficial](https://svelte.dev/docs/kit/load).

## Exercícios

1.  Tornar as páginas de teu aplicativo SvelteKit completamente navegáveis, permitindo a navegação entre todas as rotas criadas.
  
  **Passos:**

  1. Crie um menu de navegação simples com links para todas as páginas criadas.
  2. Assegure que cada página tenha um link de navegação que a leve de volta à página inicial ou para outra página do aplicativo.
  3. Teste a navegação para garantir que todas as páginas estão acessíveis e funcionando corretamente.

2. Implementar operações utilizadas do banco de dados `database.js`:
   1. getAll()
   2. getByYearMonth(params.ano, params.mes)
   3. getBySlug(params.slug)
   4. getByQuery(title, content)

3. Utilizando a API REST [https://pokeapi.co/](https://pokeapi.co/), implemente uma página que liste os pokémons, com um link que redireciona para a página de detalhes de cada pokémon.

4. Implemente paginação para listar os Pokémons.

   **Passos**:

   1. Exiba apenas um número limitado de itens por página (por exemplo, 20 pokémons por página).
   2. Implemente botões de navegação para mudar de página, como "Próximo" e "Anterior".
   3. Ao clicar em um botão de navegação, a página será atualizada com os novos itens da próxima ou da página anterior.
   4. Teste a navegação para garantir que a paginação funcione corretamente, carregando os pokémons conforme esperado.

5. Quando o usuário clicar em um pokémon, crie uma página dedicada para exibir os detalhes desse pokémon.

6. Implemente uma funcionalidade de busca para filtrar os pokémons com base em parâmetros de consulta (query params), como o tipo do pokémon.