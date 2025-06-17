/* Dada uma data, qual é o seu dia juliano? */

import scanf from "scanf";

console.log("Informe uma data no formato AAAA-MM-DD:")
let [y, m, d] = scanf("%d-%d-%d");
let j, c = Math.trunc((m - 14) / 12);
j = Math.trunc((1461 * (y + 4800 + c)) / 4) +
    Math.trunc((367 * (m - 2 - 12 * c)) / 12) -
    Math.trunc((3 * (Math.trunc((y + 4900 + c) / 100))) / 4) +
    d - 32075;

console.log("O dia juliano é", j);