let externo, interno;
console.log("Início");
for (externo = 1; externo <= 3; externo++) {
    console.log(">");
    for (interno = 1; interno <= 5; interno++) {
        console.log(externo, interno);
    }
    console.log("<");
}
console.log("Fim");
