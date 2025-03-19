## Funções Assíncronas no JavaScript

### Funções síncronas vs assíncronas

👉 **Pergunta:** Qual o conceito de síncrono e de assíncrono?

No JavaScript, código normalmente executa de forma síncrona, linha por linha. Mas algumas operações, como buscar dados na internet, podem demorar. Se esperássemos o resultado antes de seguir para a próxima linha, o código ficaria travado.

Exemplo de código síncrono:

```js
console.log("Primeiro");
console.log("Segundo");
console.log("Terceiro");
```

### A função assíncrona `setTimeout`

`setTimeout` é um exemplo clássico de função assíncrona. Ela agenda uma função para rodar depois de um tempo.

Código exemplo:

```js
console.log("Antes de setTimeout");

setTimeout(() => {
  console.log("Dentro de setTimeout");
}, 2000);

console.log("Depois de setTimeout");
```

📌 **Pergunta:** Qual será a ordem de execução?

O `setTimeout` agenda a execução do código para o futuro, mas não bloqueia o restante do programa.

### Introdução às `Promise`s

Uma `Promise` é um objeto que representa um valor que estará disponível no futuro. Pode estar em três estados:

- **Pending** (pendente)
- **Fulfilled** (resolvida)
- **Rejected** (rejeitada)

Antes das `Promise`s, a abordagem mais comum para lidar com operações assíncronas (como requisições HTTP, leitura de arquivos ou interações com bancos de dados) era usar funções **callback**. No entanto, essa abordagem apresentava diversos problemas, como o famoso **Callback hell**: Quando uma função callback também chama outra função callback, criando uma cadeia de funções aninhadas (uma dentro da outra).

```js
buscarDados((dados) => {
  processarDados(dados, (resultado) => {
    salvarNoBanco(resultado, (res) => {
      console.log("Dados salvos!");
    });
  });
});
```

Observação: Callbacks são funções passadas como argumento para outras funções e executadas posteriormente, geralmente após a conclusão de uma operação assíncrona.

`Promise`s surgiram no JavaScript para resolver problemas relacionados ao código assíncrono, como o Callback hell:

```js
buscarDados()
  .then(processarDados)
  .then(salvarNoBanco)
  .then(() => console.log("Dados salvos!"))
  .catch((erro) => console.error("Erro:", erro));
```

Com `Promise`s, a cadeia de funções não fica mais aninhada, mas sim serializada, o que simplifica o desenvolvimento e melhora a legibilidade.

Exemplo de uma `Promise` simples:

```js
const promessa = new `Promise`((resolve, reject) => {
    let senha = prompt('Senha?');
    if (senha === '1234') resolve('O segredo é "43"!');
    else reject('Não te conto o segredo!');
});

promessa
    .then((resultado) => {
        console.log("Acesso liberado...")
        console.log(resultado);
    })
    .catch((erro) => {
        console.log("Acesso proibido...")
        console.error(erro);
    });
```

📢 **Explicação:**

- O código entre as chaves de um objeto `Promise` é executado.
- Se a promessa for cumprida, então `resolve` deve ser executado, passando um valor para o `then`.
- Se a promessa não puder ser cumprida, então `reject` deve ser executado, passando um valor para o `catch`.
- O `then` é executado quando a promessa é cumprida (resolvida), recebendo o valor passado no `resolve`.
- O `catch` é executado quando a promessa é rejeitada (não cumprida), recebendo o valor passado no `reject`.

---

### A função assíncrona `fetch`

A função `fetch` é usada para fazer requisições HTTP a um servidor, e retorna uma `Promise`. Para testar o `fetch`, vamos requisitar objetos fictícios do servidor https://jsonplaceholder.typicode.com/.

Código exemplo:

```js
import { onMount } from 'svelte';

onMount(async () => {
    function requisicaoAssincrona() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((resposta) => resposta.json())
            .then((dados) => console.log(dados))
            .catch((erro) => console.error('Erro!', erro));
    }

    console.log('antes da requisição');
    requisicaoAssincrona();
    console.log('depois da requisição');
});
```

📌 **Explicação:**

- `fetch(url)` faz a requisição a um objeto "tarefa.
- O primeiro `then` obtém a resposta da requisição.
- `resposta.json()` extrai o objeto da resposta.
- O segundo `then` obtém o objeto após a extração.
- O `catch` captura possíveis erros.

### Transformando código assíncrono em síncrono com `async/await`

O `async/await` simplifica o uso de `Promise`s. Ele permite que código assíncrono seja executado de modo síncrono.

Código exemplo:

```js
    (async () => {
        async function requisicaoSincrona() {
            try {
                let resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                let dados = await resposta.json();
                console.log(dados);
            } catch (erro) {
                console.error('Erro!', erro);
            }
        }

        console.log('antes da requisição');
        await requisicaoSincrona();
        console.log('depois da requisição');
    })();
```

📌 **Explicação:**
- Toda função que usa `await` deve ser declarada com `async`.
- `await` pausa a execução até que a `Promise` seja resolvida.
- `try/catch` ajuda a capturar possíveis erros.

O que acontece se você tirar o `await` de `await requisicaoSincrona();`?

### Recapitulando

- `setTimeout` agenda funções sem travar o código.
- `Promise`s ajudam a trabalhar com valores futuros.
- `fetch` faz requisições HTTP e retorna uma `Promise`.
- `async`/`await` facilita o trabalho com código assíncrono.

---

### Exercícios

1. Crie uma função que faça uma requisição para buscar usuários de `https://jsonplaceholder.typicode.com/users` e exiba apenas os nomes.