/* Dado um dia juliano, qual é a data correspondente? */

import scanf from "scanf";

console.log("Informe um dia juliano:")

let J = scanf("%d");

let f = J + 1401 + Math.trunc(Math.trunc((4 * J + 274277) / 146097) * 3 / 4) - 38;
let e = 4 * f + 3;
let g = Math.trunc(e % 1461 / 4);
let h = 5 * g + 2;
let D = Math.trunc(h % 153 / 5) + 1;
let M = (Math.trunc(h / 153) + 2) % 12 + 1;
let Y = Math.trunc(e / 1461) - 4716 + Math.trunc((14 - M) / 12);

console.log(`A data é ${Y}-${M}-${D}`);