function requisicaoAssincrona() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((resposta) => resposta.json())
        .then((dados) => console.log(dados))
        .catch((erro) => console.error('Erro!', erro));
}

console.log('Antes da requisição');
requisicaoAssincrona();
console.log('Depois da requisição');
