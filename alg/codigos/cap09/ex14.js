/*
14. Dada uma data, qual a estação do ano correspondente (Primavera, Verão, Outono, Inverno)?

Verão: 22 de dezembro a 19 de março;
Outono: 20 de março a 20 de junho;
Inverno: 21 de junho a 22 de setembro;
Primavera: 23 de setembro a 22 de dezembro.
*/

import scanf from "scanf"

console.log('digite o dia:');
let dia = scanf('%d')
console.log('digite o mes:');
let mes = scanf('%d')

if ((mes == 12 && dia >= 22) ||
    (mes == 1 || mes == 2) ||
    (mes == 3 && dia <= 19)) {
    console.log('É Verão!');
} else if ((mes == 3 && dia >= 20) ||
    (mes == 4 || mes == 5) ||
    (mes == 6 && dia <= 20)) {
    console.log('É Outono!');
} else if ((mes == 6 && dia >= 21) ||
    (mes == 7 || mes == 8) ||
    (mes == 9 && dia <= 22)) {
    console.log('É Inverno!');
} else {
    console.log('É Primavera!');
}