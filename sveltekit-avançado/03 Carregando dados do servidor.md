# Carregando Dados do Servidor

Before a +page.svelte component (and its containing +layout.svelte components) can be rendered, we often need to get some data. This is done by defining load functions.

## Page data

A +page.svelte file can have a sibling +page.server.js that exports a load function, the return value of which is available to the page via the data prop:

```
export function load() {
	return {
		post: {
			title: `Title asdff`,
			content: `Content fwfwe`
		},
    author:{name:'fewijew',email:'jijijiji'}
	};
}
```

```
<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<sub>by {author.name}</sub>
<div>{@html data.post.content}</div>
```

## Layout data

Your +layout.svelte files can also load data, via  +layout.server.js.

para esses exemplos, vamos criar o seguinte arquivo:

src\lib\server\database.js
```
const posts = [
    { slug: 'one', title: 'the one post', publish_date: '2025-03-12', content: 'this is the content of the one post' },
    { slug: 'another', title: 'another one post', publish_date: '2025-03-25', content: 'this is the content of another one post' },
    { slug: 'some', title: 'someother post', publish_date: '2024-11-22', content: 'this is the content of someother post' },
    { slug: 'yap', title: 'yet another post', publish_date: '2024-11-02', content: 'this is the content of yet another post' }
]
```

src\routes\03\posts\+layout.server.js
```
import * as db from '$lib/server/database';

export async function load() {
  const posts = db.getAll();
  return { posts };
}
```

src\routes\03\posts\+layout.svelte
```
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

Data returned from layout load functions is available to child +layout.svelte components and the +page.svelte component as well as the layout that it ‘belongs’ to.

src\routes\03\posts\+page.svelte
```
<script>
  let { data } = $props();
</script>

<h3>All posts</h3>
{#each data.posts as post}
  <p><a href="/03/posts/{post.slug}">{post.title}</a></p>
{/each}
```

info: If multiple load functions return data with the same key, the last one ‘wins’ — the result of a layout load returning { a: 1, b: 2 } and a page load returning { b: 3, c: 4 } would be { a: 1, b: 3, c: 4 }.

## Load function params

the load function is called with a ServerLoadEvent object passed as param, which has several properties, as params, url, and fetch.

### params

Uma rota pode ser um caminho estático, como `src/routes/about`, mas pode ser também um caminho dinâmico como `src/routes/blog/[slug]`, ou `src/routes/posts/[ano]/[mes]`. Neste caso, [slug], [a] e [b] são chamados de parâmetros de rota, isto é, variáveis em que diferentes valores podem levar à mesma página. Por exemplo, a url `/about` vai abrir a página em `src/routes/about`. Já tanto a url `/blog/post1` quanto `blog/post2` abrirão a página em `src/routes/blog/[slug]`. Já `/posts/2025/03` e `/posts/2024/11` abrirão a página `src/routes/posts/[ano]/[mes]`. A propriedade param é um objeto em que cada propriedade é um parâmetro da respectiva rota com seu valor.

src\routes\03\posts\[ano]\[mes]\+page.server.js
```
import * as db from '$lib/server/database';

export async function load({ params }) {
  const posts = db.getByYearMonth(params.ano, params.mes);
  return { posts };
}
```

src\routes\03\posts\[ano]\[mes]\+page.svelte
```
<script>
  let { data } = $props();
</script>

<h3>All posts</h3>

{#each data.posts as post}
  <p><a href="/03/posts/{post.slug}">{post.title}</a></p>
{/each}
```

Podemos usar a mesma página para exibir cada post separado.

src\routes\03\posts\[slug]\+page.server.js
```
import * as db from '$lib/server/database';

export async function load({ params }) {
  const post = db.getBySlug(params.slug);
  return { post };
}
```

src\routes\03\posts\[slug]\+page.svelte
```
<script>
  let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<sub>At {data.post.publish_date}</sub>
<p>{data.post.content}</p>
```

### url

An instance of [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL), containing properties like the origin, hostname, pathname and searchParams (which contains the parsed query string as a [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) object).

por exemplo, além de parâmetros de rotas, temos parâmetros de consulta (query params ou search params), que podem ser obtidos através do objeto URL.

src\routes\03\posts\query\+page.server.js
```
import * as db from '$lib/server/database';

export async function load({ url }) {
  console.log(url);
  const title = url.searchParams.get('title') || null;
  const content = url.searchParams.get('content') || null;

  if (!title && !content) return { posts: db.getAll() };

  return { posts: db.getByQuery(title, content) };
}
```

observe que usei o console.log para ver o conteúdo da url. isso é muito útil, debugar. use o console.log para saber o que está dentro de uma variável.

src\routes\03\posts\query\+page.svelte
```
<script>
  let { data } = $props();
</script>

<form>
  <input type="text" name="title" placeholder="Search by title..." />
  <input type="text" name="content" placeholder="Search by content..." />
  <button type="submit">Search</button>
</form>

<ul>
  {#each data.posts as post}
    <li>{post.title}</li>
  {:else}
    <p>No posts found.</p>
  {/each}
</ul>
```

### fetch

To get data from an external API or your own server, you can use the provided fetch function, which behaves identically to the native fetch web API with a few additional features:

- It can be used to make credentialed requests on the server, as it inherits the cookie and authorization headers for the page request.
- Internal requests (e.g. for +server.js routes) go directly to the handler function when running on the server, without the overhead of an HTTP call.
- in some cases it can be more efficient, as it (prevents additional network request)[https://svelte.dev/docs/kit/load#Making-fetch-requests].

src/routes/03/external/users/+page.server.js
```
export async function load({ fetch }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return { users };
}
```

src/routes/03/external/users/+page.svelte
```
<script>
  let { data } = $props();
</script>

<h3>Users</h3>
<ul>
  {#each data.users as user}
    <li><a href="/03/external/users/{user.id}">{user.name}</a></li>
  {/each}
</ul>
```

Para carregar as informações de um usuários, bem como suas postagens, podemos fazer:

src/routes/03/external/users/[id]/+page.server.js
```
export async function load({ params, fetch }) {
  const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await resUser.json();

  const resPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`);
  const posts = await resPosts.json();

  return { user, posts };
}
```

src/routes/03/external/users/[id]/+page.svelte
```
<script>
  let { data } = $props();
</script>

<h3>User</h3>
<p> <strong>Name:</strong> {data.user.name} </p>
<p> <strong>Email:</strong> {data.user.email} </p>
<p> <strong>Phone:</strong> {data.user.phone} </p>
<p> <strong>Website:</strong> {data.user.website} </p>
<p> <strong>Company:</strong> {data.user.company.name} </p>
<p> <strong>Address:</strong> {data.user.address.street}, {data.user.address.suite}, {data.user.address.city}, {data.user.address.zipcode} </p>

<h3>User's posts</h3>
<ul>
  {#each data.posts as post}
    <li><a href="/03/external/posts/{post.id}">{post.title}</a></li>
  {:else}
    <p>No posts found.</p>
  {/each}
</ul>
<p>
  <a href="/03/external/users">Back to users</a>
</p>
```



## page.data

The +page.svelte component, and each +layout.svelte component above it, has access to its own data plus all the data from its parents.

In some cases, we might need the opposite — a parent layout might need to access page data or data from a child layout. For example, the root layout might want to access a title property returned from a load function in +page.server.js. This can be done with page.data.

modify the layout:

src\routes\03\posts\+layout.svelte
```
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

## client vs server

além do +page.server.js, que sempre roda no servidor, você também pode ter o +page.js, que runs both on the server and in the browser (unless combined with export const ssr = false, in which case it will (only run in the browser)[https://svelte.dev/docs/kit/page-options#ssr]).

By default, universal load functions run on the server during SSR when the user first visits your page. They will then run again during (hydration)[https://svelte.dev/docs/kit/glossary#Hydration], reusing any responses from (fetch requests)[https://svelte.dev/docs/kit/load#Making-fetch-requests]. All subsequent invocations of universal load functions happen in the browser. You can customize the behavior through (page options)[https://svelte.dev/docs/kit/page-options]. If you disable (server side rendering)[https://svelte.dev/docs/kit/page-options#ssr], you’ll get an SPA and universal load functions always run on the client.

If a route contains both universal and server load functions, the server load runs first.

A load function is invoked at runtime, unless you (prerender)[https://svelte.dev/docs/kit/page-options#prerender] the page — in that case, it’s invoked at build time.

### When to use which

If your load function should always run on the server, because it uses private environment variables, for example, or accesses a database or filesystem, then it would go in a +page.server.js.

If you need to fetch data from an external API and don’t need private credentials, since SvelteKit can get the data directly from the API rather than going via your server, then use +page.js.



## Conclusão

existem muitos outros recursos que você pode fazer ao carregar dados em uma página, você pode consultar a documentação https://svelte.dev/docs/kit/load.



## Exercícios

fazer todas páginas navegáveis

implementar as operações do banco

[mais exercícios, por favor?]


[observação: após cada código, eu tbm gostaria de uma explicação]