function youShallNotPass() {
    while (prompt('Senha?') !== '1234') {
        alert('Você não passará!');
    }
    alert('Você passou!');
}

alert('Vamos começar');
youShallNotPass();
alert('Fim');