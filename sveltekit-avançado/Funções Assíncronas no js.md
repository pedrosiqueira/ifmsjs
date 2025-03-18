## **Aula: Funções Assíncronas no JavaScript**  

### **1. Introdução: O que é Assíncrono?**  

👉 **Pergunta para os alunos:** O que significa "assíncrono" para vocês?  

📢 **Explicação:**  
No JavaScript, código normalmente executa de forma síncrona, linha por linha. Mas algumas operações, como buscar dados na internet, podem demorar. Se esperássemos o resultado antes de seguir para a próxima linha, o código ficaria travado.  

🎯 **Exemplo prático (Síncrono)**  
```js
console.log("Primeiro");
console.log("Segundo");
console.log("Terceiro");
```
**Saída:**  
```
Primeiro  
Segundo  
Terceiro  
```
Agora, vejamos um código assíncrono.  

---

### **2. Introdução ao `setTimeout`**  

📢 **Explicação:**  
`setTimeout` é um exemplo clássico de função assíncrona. Ele agenda uma função para rodar depois de um tempo.  

💻 **Código exemplo:**  
```js
console.log("Antes do setTimeout");

setTimeout(() => {
  console.log("Dentro do setTimeout");
}, 2000);

console.log("Depois do setTimeout");
```
📌 **Pergunta para os alunos:** Qual será a ordem de execução?  

🧐 **Explicação:**  
O `setTimeout` agenda a execução do código para o futuro, mas não bloqueia o restante do programa. Por isso, a saída será:  
```
Antes do setTimeout  
Depois do setTimeout  
(DOIS SEGUNDOS DEPOIS...)  
Dentro do setTimeout  
```

---

### **3. Introdução às Promises**  

📢 **Explicação:**  
Uma **Promise** é um objeto que representa um valor que estará disponível no futuro. Pode estar em três estados:  
✅ **Pending** (pendente)  
✅ **Fulfilled** (resolvida)  
✅ **Rejected** (rejeitada)  

Antes das Promises, a abordagem mais comum para lidar com operações assíncronas (como requisições HTTP, leitura de arquivos ou interações com bancos de dados) era usar funções de callback. No entanto, essa abordagem apresentava diversos problemas, como o famoso Callback hell: Quando uma função de callback também chama outra função de callback, criando uma cadeia de funções aninhadas (uma dentro da outra).

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

Promises surgiram no JavaScript para resolver problemas relacionados ao código assíncrono, como o Callback hell:

```js
buscarDados()
  .then(processarDados)
  .then(salvarNoBanco)
  .then(() => console.log("Dados salvos!"))
  .catch((erro) => console.error("Erro:", erro));
```

Com Promises, a cadeia de funções não fica mais aninhada, mas sim serializada, o que simplifica o desenvolvimento e melhora a legibilidade.

💻 **Exemplo de uma Promise simples:**  

```js
const promessa = new Promise((resolve, reject) => {
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
- **`then()`**: Executado quando a **Promise** é cumprida (resolvida), recebendo o valor passado no `resolve`.
- **`catch()`**: Executado quando a **Promise** é rejeitada (não cumprida), recebendo o erro passado no `reject`.

---

### **4. O `fetch()` e Requisições HTTP**  

📢 **Explicação:**  
O `fetch()` é uma função que retorna uma Promise e é usada para fazer requisições HTTP a um servidor. Para testar o `fetch`, vamos requisitar objetos fictícios do servidor https://jsonplaceholder.typicode.com/.

💻 **Exemplo básico:**  
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
📌 **Explicação passo a passo:**  
1. `fetch(url)` faz a requisição.
2. O primeiro `then` obtém a resposta da requisição.
3. `resposta.json()` extrai um objeto da resposta.
4. O segundo `.then()` obtém o objeto após a extração.
5. O `.catch()` captura possíveis erros.

---

### **5. Transformando código assíncrono em síncrono com `async/await`**  
📢 **Explicação:**  

O `async/await` simplifica o uso de Promises. Ele permite que código assíncrono seja executado de modo síncrono.

💻 **Exemplo básico:**  
```js
import { onMount } from 'svelte';

onMount(async () => {
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
});
```
📌 **O que acontece aqui?**  
- `await` pausa a execução até que a Promise seja resolvida.  
- `try/catch` ajuda a capturar erros de rede.  

O que acontece se você tirar o `await` de `await requisicaoSincrona();`

---

### **6. Recapitulando**  
✅ **setTimeout** agenda funções sem travar o código.  
✅ **Promises** ajudam a trabalhar com valores futuros.  
✅ **fetch()** faz requisições HTTP e retorna uma Promise.  
✅ **async/await** facilita o trabalho com código assíncrono.  

---

### **7. Exercício Prático**  
🚀 **Desafio:** Crie uma função que faça uma requisição para buscar usuários de `https://jsonplaceholder.typicode.com/users` e exiba apenas os nomes no console.  

💡 **Dica:** Use `async/await`, `fetch()` e `.map()`.  
