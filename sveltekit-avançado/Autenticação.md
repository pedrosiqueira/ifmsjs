Leitura sobre autenticação:

- https://lucia-auth.com/sessions/overview
- https://lucia-auth.com/sessions/basic-api/drizzle-orm
- https://lucia-auth.com/sessions/cookies/sveltekit

O arquivo `src\lib\server\db\schema.js` define o esquema do banco de dados.

O arquivo `src\lib\server\db\index.js` contém o objeto `db` que se conecta ao banco de dados.

O arquivo `src\lib\server\auth.js` contém a API de autenticação.

A função `handle` do arquivo `src\hooks.server.js` sempre é executada no início de cada requisição. Ele se encarrega de carregar as informações do usuário e sessão, se houver alguma sessão aberta, que ficarão disponíveis nos loaders, actions, e endpoints.

A função `load` do arquivo `src\routes\[...]\+page.server.js` sempre é executada após a função `handle` do `hooks.server.js`.