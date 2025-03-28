function bloquear(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Desbloqueando...")
            resolve()
        }, segundos * 1000);
    });
}

console.log('Bloqueando...');
await bloquear(3);
console.log('Desbloqueado!');